import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import CoverPicture from "../../img/cover.jpg";
// import DefaultPicture from "../../img/defaultPic.png";
// import Profile from "../../img/profileImg.jfif";
import "./ProfileCard.css";
const PorfileCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const ProfilePage = false;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "cover.jpg"
          }
          alt="Pic"
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultProfile.png"
          }
          alt="Pic"
        />
      </div>
      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span> {user.followers.length}</span>
            <span> Follower </span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? (
        ""
      ) : (
        <span>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={`/profile/${user._id}`}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default PorfileCard;
