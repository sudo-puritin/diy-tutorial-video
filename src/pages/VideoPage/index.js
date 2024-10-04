import React from "react";

import "./VideoPage.scss";
import { Avatar } from "@mui/material";
import { MiniCard } from "../../components/MiniCard";

function VideoPage() {
  return (
    <div className="videoPage_container">
      <div className="player_display">
        <img src="images/art3.png" alt="test" width={"100%"} />
      </div>

      <div className="underPlayerDisplay_container">
        <div className="player_detail">
          <h2 className="player_title">Title of Video</h2>
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
          <h2>RECOMMENDATION</h2>
          <MiniCard />
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
