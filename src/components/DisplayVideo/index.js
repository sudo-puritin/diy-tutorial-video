import React from "react";
import { Player } from "video-react";

import "video-react/dist/video-react.css";
import "./DisplayVideo.scss";

const DisplayVideo = ({ videoSrc, width, height }) => {
  return (
    <div
      className="displayVideo_container"
      style={{
        width: `${width}`,
        height: `${height}`,
        maxWidth: `calc(100vh * (16 / 9))`,
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Player className="main_video" playsInline src={videoSrc} />
    </div>
  );
};

export default DisplayVideo;
