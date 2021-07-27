import React from 'react'

function updateApplication(user, university, course) {
    const [decisionDate, setDecisionDate] = useState(null)
    const decision = (e, university, course, status) => {
        e.preventDefault()
        db.collection("users")
            .doc(user?.email).collection("Applications").doc(university).set({
                university: university,
                course: course,
                status: status,
                decisionDate: decisionDate
            }).then(() => {
                fetchApplications()
            })
    }
    return (
        <Modal>
            <ModalContent>

                <span className="close" onClick={handlePopup}>
                    &times;
                </span>
                <h5>{university}</h5>

                <span>
                    {course}
                </span>
                <br />
                <Admit onClick={(e) => { decision(e, university, course, decisionDate, "admitted") }}>Admitted</Admit>
                <Reject onClick={(e) => { decision(e, university, course, decisionDate, "rejected") }}>Rejected</Reject>

                <input type="date" value="decisionDate" onChange={(e) => setDecisionDate((e.target.value))}></input>

            </ModalContent>
        </Modal>
    )
}
const Modal = styled.div`
position: fixed;
  width: 50%;
  height: 50%;
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


 
`;
const Admit = styled.button`
  color: red;
  margin: 5px 5px;
    border-radius:2px;
    border: none;
`;
const Reject = styled.button`
 color: green;
 margin: 5px 5px;
    border-radius:2px;
    border: none;
`;
const Update = styled.button`
 color: blue;

    border-radius:2px;
    border: none;
`;
const Buttons = styled.div`
  display: flex;

`;
export default updateApplication
