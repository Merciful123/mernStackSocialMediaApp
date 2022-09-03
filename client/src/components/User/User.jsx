import React from "react";

const User = ({ person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.coverPicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
          className="FollowerImg"
        />
        <div className="name">
          <span>{person.name}</span>
          <span>{person.username}</span>
        </div>
      </div>
      <button className="button fc-button">Follow</button>
    </div>
  );
};

export default User;
