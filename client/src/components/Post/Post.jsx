import { React, useState } from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/heart.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  return (
    <div className="Post">
      <img src={process.env.REACT_APP_PUBLIC_FOLDER + data.image} />
      <div className="postReact">
        <img src={data.liked ? Heart : NotLike} alt="" height="25" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
