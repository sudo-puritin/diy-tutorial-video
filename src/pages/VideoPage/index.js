import React from "react";

import "./VideoPage.scss";

function VideoPage() {
  return (
    <div className="videoPage_container">
      <div className="leftSideVideoPage_container">
        <div className="player_box" style={{ position: "relative" }}></div>
        <div className="below_player_box"></div>
      </div>
      <div className="rightSideVideoPage_container"></div>
    </div>
  );
}

export default VideoPage;
