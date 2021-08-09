import React, { useState } from "react";
import { logout, selectUser } from "../features/userSlice";
import { db, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./UpdateProfile.css";
import Header from "./Header";
function UpdateAcademics() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [gradScore, setGradScore] = useState("");
  const [greQ, setGreQ] = useState("");
  const [greV, setGreV] = useState("");
  const [greAWA, setGreAWA] = useState("");
  const [listeing, setListening] = useState("");
  const [reading, setReading] = useState("");
  const [speaking, setSpeaking] = useState("");
  const [writing, setWriting] = useState("");
  const [exam, setexam] = useState("IELTS")
  const addUser = (event) => {
    event.preventDefault();
    db.collection("users")
      .doc(user?.email)
      .update({
        academics: {
          gre: {
            greQ: greQ,
            greV: greV,
            greAWA: greAWA,
          },
          english: {
            exam: exam,
            listeing: listeing,
            reading: reading,
            speaking: speaking,
            writing: writing,
          },
          undergrad: {
            gradScore: gradScore,
          }
        }
      })
      .catch(function (error) {
        console.error("Error adding Product: ", error);
      });
    history.push("/updateexperience");
  };
  return (
    <div>
      <div className="updateProfile__form">
        <form>
          <div class="row">
            <h4>Undergrad Percentage</h4>
            <div class="input-group">
              <div class="col-third">
                <input
                  type="text"
                  placeholder="%"
                  value={gradScore}
                  onChange={(e) => setGradScore(e.target.value)}
                />
              </div>
            </div>
            <h4>GRE Scores</h4>
            <div class="input-group">
              <div class="col-third">
                <input
                  type="text"
                  placeholder="Quants"
                  value={greQ}
                  onChange={(e) => setGreQ(e.target.value)}
                />
              </div>
              <div class="col-third">
                <input
                  type="text"
                  placeholder="Verbal"
                  value={greV}
                  onChange={(e) => setGreV(e.target.value)}
                />
              </div>
              <div class="col-third">
                <input
                  type="text"
                  placeholder="AWA"
                  value={greAWA}
                  onChange={(e) => setGreAWA(e.target.value)}
                />
              </div>
            </div>
            <h4>English Exam</h4>

            <div class="input-group"><select onChange={(e) => setexam(e.target.value)}
            >
              <option>IELTS</option>
              <option>TOEFL</option>
            </select></div>
            <div class="input-group">
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Listening"
                  value={listeing}
                  onChange={(e) => setListening(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Reading"
                  value={reading}
                  onChange={(e) => setReading(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Writing"
                  value={writing}
                  onChange={(e) => setWriting(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Speaking"
                  value={speaking}
                  onChange={(e) => setSpeaking(e.target.value)}
                />
              </div>
            </div>

          </div>


          <button type="submit" onClick={addUser}>
            Add details
          </button>
        </form>
      </div>
      {console.log(exam)}

    </div>
  );
}

export default UpdateAcademics;
