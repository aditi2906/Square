import React, { useState } from "react";
import "./RightSide.css";
import { AiFillSetting } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";
import { RiHomeSmileFill } from "react-icons/ri";
import TrendCard from "../TrendCard/TrendCard";
import FollowersCard from "../FollowersCard/FollowersCard";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <div
          className="one"
          style={{ backgroundColor: "#FCE2DB#FF8FB1#80489C#432C7A" }}
        >
          <RiHomeSmileFill size={40} color="#FFB200" />
        </div>
        <AiFillSetting size={40} color="#80489C" />
        <IoMdNotifications size={40} color="#FF6464" />
        <AiOutlineComment size={40} />
      </div>

      <FollowersCard />
    </div>
  );
};

export default RightSide;
