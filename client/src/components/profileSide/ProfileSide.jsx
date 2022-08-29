import React from "react";
import FollowersCard from "../followersCard/followersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../profileCard/PorfileCard";
import "./ProfileSide.css";

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
