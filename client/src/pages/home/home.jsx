import React from "react";
import PostSide from "../../components/postSide/PostSide";
import ProfileSide from "../../components/profileSide/profileSide";
import RightSide from "../../components/RightSide/RightSide";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">
        <PostSide />
      </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  );
}

export default Home;
