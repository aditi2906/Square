import React, { useState, useRef } from "react";
import profile from "../../images/profile.png";
import "./PostShare.css";
import { useDispatch, useSelector } from "react-redux";

import { TbPhoto } from "react-icons/tb";
import { BsPlayCircleFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { uploadImage, uploadPost } from "../../actions/uploadActions";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const [image, setImage] = useState(null);
  const desc = useRef();

  const imageRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  const handleUpload = async (e) => {
    console.log("hey");
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        console.log("uouo");
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    console.log("he");
    dispatch(uploadPost(newPost));
    resetShare();
  };
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };
  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "def.png"
        }
        alt=""
      />
      <div>
        <input type="text" placeholder="Write what you feel" ref={desc} />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <TbPhoto />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <BsPlayCircleFill />
            Video
          </div>{" "}
          <div className="option" style={{ color: "var(--location)" }}>
            <TiLocation />
            Location
          </div>{" "}
          <div className="option" style={{ color: "var(--shedule)" }}>
            <BsFillCalendarCheckFill />
            Shedule
          </div>
          <button className="button" onClick={handleUpload} disabled={loading}>
            {loading ? "Almost there" : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <AiOutlineCloseCircle onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
