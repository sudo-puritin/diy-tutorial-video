import React from "react";

import "./VideoPage.scss";
import { Avatar } from "@mui/material";

function VideoPage() {
  return (
    <div className="videoPage_container">
      <div className="player_display" style={{ position: "relative" }}>
        <img src="images/art3.png" alt="test" width={"100%"} height={"100%"} />
      </div>

      <div className="underPlayerDisplay_container">
        <div className="player_detail">
          <div className="player_title">Title of Video</div>
          <div className="player_ownerInfo">
            <div className="avatar_box">
              <Avatar width="40px" />
            </div>
            <div className="ownerName_box">
              <p>Putin Nguyen D</p>
            </div>
          </div>
          <div className="player_description">
            This is the description of the video. The video want to show us how
            to made a beautiful wooden chair. You can do it easily with the way
            we show us here. It took only about 2 hours to completed all this
            craft
          </div>
          <div className="player_info">
            <div>
              <div className="player_info_box">
                <h4>Material</h4>
                <div>
                  <p>Wood</p>
                </div>
              </div>
              <div className="player_info_box">
                <h4>Tool</h4>
                <div>
                  <p>Hammer</p>
                </div>
              </div>
              <div className="player_info_box">
                <h4>Difficulty</h4>
                <p>Easy</p>
              </div>
              <div className="player_info_box">
                <h4>Duration</h4>
                <p>2h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="player_recommendation">
          <div width="100%" style={{ background: "yellow" }}>
            1
          </div>
          <div width="100%" style={{ background: "yellow" }}>
            2
          </div>
          <div width="100%" style={{ background: "yellow" }}>
            3
          </div>
          <div width="100%" style={{ background: "yellow" }}>
            4
          </div>
          <div width="100%" style={{ background: "yellow" }}>
            5
          </div>
          <div width="100%" style={{ background: "yellow" }}>
            6
          </div>
          <div width="100%" style={{ background: "yellow" }}>
            7
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
