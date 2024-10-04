import React from "react";

import { Player } from "video-react";

import "video-react/dist/video-react.css";
import "./DisplayVideo.scss";

const DisplayVideo = ({ videoSrc }) => {
  return (
    <div className="display_video">
      <Player className="main_video" playsInline src={videoSrc} />
    </div>
  );
};

export default DisplayVideo;
