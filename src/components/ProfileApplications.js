import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SchoolIcon from "@material-ui/icons/School";
import DescriptionIcon from "@material-ui/icons/Description";
import "./style.css";
import UniversitySearch from "./UniversitySearch";
import Select from "react-select";
import { db, provider } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function ProfileApplications() {
  const user = useSelector(selectUser);
  const [Click, setClick] = useState(true);
  const [intake, setIntake] = useState("")
  const [year, setyear] = useState("")
  const handleClick = () => {
    setClick(!Click);
  };

  const decision = (e, university, course, status) => {
    e.preventDefault();
    db.collection("users")
      .doc(user?.email)
      .collection("Applications")
      .where("university", "==", university)
      .where("course", "==", course)

      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          db.collection("users")
            .doc(user?.email)
            .collection("Applications")
            .doc(doc.id)

            .update({
              status: status,
            });
        });
      })
      .then(() => {
        fetchApplications();
      });
    db.collection("universities").doc(university).collection("decisions").add({
      user: user?.email,
      course: course,
      status: status,
    });
  };
  const [country, setCountry] = useState("USA");
  const [course, setCourse] = useState(null);
  const [resetUni, setResetUni] = useState(false);
  const [info, setInfo] = useState([]);
  const options = [
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "Australia", label: "Australia" },
  ];
  const intakes = [
    {
      value: "fall", label: "Fall"
    },
    {
      value: "winter", label: "winter"
    },
    {
      value: "spring", label: "spring"
    }
  ]
  const years = [
    {
      value: "2019", label: "2019"
    },
    {
      value: "2020", label: "2020"
    },
    {
      value: "2021", label: "2021"
    },
    {
      value: "2022", label: "2022"
    }
  ]
  const styles = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),
  };
  const addApplication = (event) => {

    event.preventDefault();

    let uni = document.querySelectorAll(".css-1uccc91-singleValue")[1]
      ?.textContent;
    db.collection("users")
      .doc(user?.email)
      .collection("Applications")
      .add({
        university: uni,
        course: course,
        status: "applied",
        year: year,
        session: intake
      })
      .then(() => {
        fetchApplications();
      });
  };

  const fetchApplications = () => {
    setInfo([]);
    db.collection("users")
      .doc(user?.email)
      .collection("Applications")
      .where("status", "==", "applied")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };
  useEffect(() => {
    fetchApplications();
  }, []);
  return (
    <div className="profileApplications">
      {Click ? (
        <button
          className="profileApplications_addApplication"
          onClick={handleClick}
        >
          Add Application
        </button>
      ) : (
        <Modal>
          <ModalContent>
            <span className="close" onClick={handleClick}>
              &times;
            </span>
            <form>
              <h3>Add application</h3>
              <Select
                placeholder={<div>Country</div>}
                options={options}
                onChange={(value) => {
                  setCountry(value.label);
                  setResetUni(true);
                }}
                styles={styles}
              />

              <UniversitySearch
                reset={resetUni}
                label="Choose a university"
                country={country}
              />
              <input
                type="text"
                placeholder="Course"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              ></input>
              <Select
                placeholder={<div>Year</div>}
                options={years}
                onChange={(value) => {
                  setyear(value.label);
                }}
                styles={styles}
              />
              <Select
                placeholder={<div>Session</div>}
                options={intakes}
                onChange={(value) => {
                  setIntake(value.label);
                }}
                styles={styles}
              />
              <input
                type="submit"
                onClick={(e) => {
                  addApplication(e);
                  handleClick();
                }}
              />
            </form>
          </ModalContent>
        </Modal>
      )}

      <Container>
        {info.map((object, i) => (
          <Info>
            <Logo>
              <SchoolIcon />
            </Logo>
            <GradScore>
              <h5>{object.university}</h5>
              <span>{object.course}</span>
              {object.status == "admitted" ? (
                <div className="admitted">
                  <span>Admitted</span>
                </div>
              ) : (
                <Buttons>
                  <Admit
                    onClick={(e) => {
                      decision(e, object.university, object.course, "admitted");
                    }}
                  >
                    Admitted
                  </Admit>

                  <Reject
                    onClick={(e) => {
                      decision(e, object.university, object.course, "rejected");
                    }}
                  >
                    Rejected
                  </Reject>
                </Buttons>
              )}
            </GradScore>
          </Info>
        ))}
      </Container>
    </div>
  );
}
const Container = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .percentage {
    font: 700;
  }
  .admit {
    color: red;
  }
`;
const Logo = styled.div`
  margin: auto auto auto auto;
  padding: 10px 40px 10px 40px;

  max-width: 100%;
  display: flex;
  flex-direction: column;
  .hidden {
    visibility: hidden;
  }
`;
const Info = styled.div`
  margin-right: auto;
  padding: 10px 10px 10px 10px;
  max-width: 100%;
  display: flex;
  .hidden {
    visibility: hidden;
  }
`;
const GradScore = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  h3 {
    color: red;
  }
  .hidden {
    visibility: hidden;
  }
`;

const Modal = styled.div`
  display: flex;
  /* background-color: red; */
  @media screen and (max-width: 477px) {
    
    margin:auto;
    

  }
`;
const ModalContent = styled.div`
  background-color: white;
  top: 20%;
  left: 30%;
  width: 40%;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
  margin: auto auto;
  text-align: center;
  
  @media screen and (max-width: 880px) {
    
    width:300px;
    

  }
  
`;
const Admit = styled.button`
  color: red;
`;
const Reject = styled.button`
  color: green;
`;
const Buttons = styled.div`
  display: flex;

  button {
    margin: 5px 5px;
    border-radius: 2px;
    border: none;
  }
`;
export default ProfileApplications;
