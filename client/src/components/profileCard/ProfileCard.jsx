import React from "react";
import cover from "../../images/cover.png";
import def from "../../images/def.png";
import "./ProfileCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/AuthActions";
const ProfileCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch;
  const navigate = useNavigate;
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "cover.png"
          }
          alt="CoverImage"
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "def.png"
          }
          alt="ProfileImage"
        />
      </div>

      <div className="ProfileName">
        <span>
          {user.firstname}&nbsp;{user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
        <div className="followStatus">
          <hr />
          <div>
            <div className="vl"></div>
            <div className="follow">
              <span style={{ color: "black", fontWeight: "700" }}>
                {user.following.length} &nbsp;
              </span>
              <span style={{ color: "black", fontWeight: "700" }}>
                Following
              </span>
            </div>
            <div style={{ padding: "10px" }}>
              <button className="btn-32" onClick={handleLogout}>
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
