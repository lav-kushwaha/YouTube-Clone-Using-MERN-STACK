import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { MdPlaylistAddCheck } from "react-icons/md";
import { RiHeartAddFill, RiPlayListAddFill, RiShareForward2Fill } from "react-icons/ri";
import "./LikeWatchLaterSaveBtns.css";

const LikeWatchLaterSaveBtns = () => {
  const [SAveVideo, setSAve] = useState(true);
  const [Dislikebtn, setDislikebtn] = useState(false);
  const [LikeBtn, setLikebtn] = useState(false);

  const handleClick = () => {
    setSAve(() => !SAveVideo);
  };
  return (
    <div className="btns_cont_videoPage">
      <div className="btn_VideoPage">
        <BsThreeDots size={22} />
      </div>
      <div className="btn_VideoPage">

        {/*Like*/}
        <div className="like_videoPage">
          {LikeBtn ? (
            <>
              <AiFillLike
                size={25}
                className="btns_videoPage"
              />
            </>
          ) : (
            <>
              <AiOutlineLike
                size={20}
                className="btns_videoPage"
              />
            </>
          )}
        <b>1</b>
        </div>

        {/*Dislike*/}
        <div className="like_videoPage">
          {Dislikebtn ? (
            <>
              <AiFillDislike
                size={25}
                className="btns_videoPage"
              />
            </>
          ) : (
            <>
              <AiOutlineDislike
                size={20}
                className="btns_videoPage"
              />
            </>
          )}
        <b>1</b>
        </div>


        <div className="like_videoPage">
          <RiHeartAddFill
            size={20}
            className="btns_videoPage"
          />
          <b>Thanks</b>
        </div>
        <div className="like_videoPage">
          <RiShareForward2Fill
            size={20}
            className="btns_videoPage"
          />
          <b>Share</b>
        </div>
        <div className="like_videoPage">
          {SAveVideo ? (
            <>
              <MdPlaylistAddCheck
                onClick={handleClick}
                size={25}
                className="btns_videoPage"
              />
              <b>Save</b>
            </>
          ) : (
            <>
              <RiPlayListAddFill
                onClick={handleClick}
                size={20}
                className="btns_videoPage"
              />
              <b>Saved</b>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikeWatchLaterSaveBtns;
