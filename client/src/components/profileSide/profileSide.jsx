import React from "react";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import TrendCard from "../TrendCard/TrendCard";
import "./profielSide.css";
function ProfileSide() {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <TrendCard />
    </div>
  );
}

export default ProfileSide;
