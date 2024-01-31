import React from "react";
import "./VideoPage.css";
// import vid from '../../Components/Video/'

const VideoPage = () => {
  return (
    <div className="container_videoPage">
      <div className="container2_videoPage">
        <div className="video_display_screen_videoPage">
          <video
            src=""
            className={"video_ShowVideo_videoPage"}
            controls
            // autoPlay
          ></video>
          <div className="video_details_videoPage">
            <div className="video_btns_title_VideoPage_cont">
              <p className="video_title_VideoPage">Title</p>
              <div className="views_date_btns_VideoPage">
                <div className="views_videoPage">
                  5 Views <div className="dot"></div> uploaded 1 year ago
                </div>
              </div>
            </div>
            <div className="chanel_details_videoPage">
              <b className="chanel_logo_videoPage">
                <p>C</p>
              </b>
              <p className="chanel_name_videoPage">Lav Kushwaha</p>
            </div>
            <div className="comments_VideoPage">
              <h2>
                <u>Comments</u>
              </h2>
            </div>
          </div>
        </div>
        <div className="moreVideoBar">
            More Videos
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
