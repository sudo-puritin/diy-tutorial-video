import React from "react";

import { Player } from "video-react";

import "video-react/dist/video-react.css";

const DisplayVideo = ({ videoSrc }) => {
  return (
    <div className="display_video">
      <Player playsInline src={videoSrc} width={180} height={20} />
    </div>
  );
};

export default DisplayVideo;
