import React from "react";
import "./Profile.css";

import { SocialIcon } from "react-social-icons";
import DetailBox from "./DetailBox";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <div className="profile__box">
        <div className="profile__boxLeft">
          <h1>{user?.displayName}</h1>
          <h5>University of Ottawa</h5>
          <h5>Master of Electrical and Computer Engineering</h5>
        </div>
        <div className="profile__boxRight">
          <SocialIcon
            className="profile__socialIcon"
            url="https://twitter.com/jaketrent"
          />
          <SocialIcon
            className="profile__socialIcon"
            url="https://instagram.com/jaketrent"
          />
          <SocialIcon
            className="profile__socialIcon"
            url="https://linkedin.com/jaketrent"
          />
          <SocialIcon
            className="profile__socialIcon"
            url="https://github.com/jaketrent"
          />
        </div>
      </div>
      <div className="profile__detailBox">
        <DetailBox></DetailBox>
      </div>
      <div className="profile__academics"></div>
    </div>
  );
}
export default Profile;
