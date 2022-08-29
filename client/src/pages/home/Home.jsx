import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/profileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide />
      <RightSide />
      {/* <div className="postSide">Post</div>
      <div className="RightSide">Right</div> */}
    </div>
  );
};

export default Home;
