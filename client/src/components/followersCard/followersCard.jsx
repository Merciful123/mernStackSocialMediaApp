import React from "react";
import "./followersCard.css";
import { Followers } from "../../data/FollowersData";
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following You</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="FollowerImg" />
              <div className="name">
                <span>{follower.name}</span>
                <span>{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
