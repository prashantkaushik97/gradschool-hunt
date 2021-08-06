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
  const [listeingI, setListeningI] = useState("");
  const [readingI, setReadingI] = useState("");
  const [speakingI, setSpeakingI] = useState("");
  const [writingI, setWritingI] = useState("");
  const [listeningT, setListeningT] = useState("");
  const [readingT, setReadingT] = useState("");
  const [speakingT, setSpeakingT] = useState("");
  const [writingT, setWritingT] = useState("");
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
          ielts: {
            listeingI: listeingI,
            readingI: readingI,
            speakingI: speakingI,
            writingI: writingI,
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
            <h4>IELTS Scores</h4>
            <div class="input-group">
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Listening"
                  value={listeingI}
                  onChange={(e) => setListeningI(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Reading"
                  value={readingI}
                  onChange={(e) => setReadingI(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Writing"
                  value={writingI}
                  onChange={(e) => setWritingI(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Speaking"
                  value={speakingI}
                  onChange={(e) => setSpeakingI(e.target.value)}
                />
              </div>
            </div>
            <h4>TOEFL Scores</h4>

            <div class="input-group">
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Listening"
                  value={listeningT}
                  onChange={(e) => setListeningT(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Reading"
                  value={readingT}
                  onChange={(e) => setReadingT(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Writing"
                  value={writingT}
                  onChange={(e) => setWritingT(e.target.value)}
                />
              </div>
              <div class="col-fourth">
                <input
                  type="text"
                  placeholder="Speaking"
                  value={speakingT}
                  onChange={(e) => setSpeakingT(e.target.value)}
                />
              </div>
            </div>
          </div>


          <button type="submit" onClick={addUser}>
            Add details
          </button>

        </form>
      </div>
    </div>
  );
}

export default UpdateAcademics;
