import { React, useEffect, useState } from "react";
import "./FollowersCard.css";
import { useSelector } from "react-redux";
import User from "../User/User";

import { Followers } from "../Data/followerData.js";
import { getAllUser } from "../../api/UserRequests";
const FollowersCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>Maybe follow?</h3>

      {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
    </div>
  );
};

export default FollowersCard;
