import React, { useEffect } from "react";

import "./VideoPage.scss";
import { Avatar } from "@mui/material";
import { MiniCard } from "../../components/MiniCard";
import DisplayVideo from "../../components/DisplayVideo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoDetail } from "../../features/Video/videoSlice";
import LoadingScreen from "../../components/LoadingScreen";
import { MATERIAL_OPTION, TOOLS_OPTION } from "../../constants/list.constants";
import { formatArrayToStringLabel } from "../../ultis/formatArrayDataToLabel";

const WatchVideoPage = () => {
  const params = useParams();

  const { isLoading, videoDetail } = useSelector((state) => state.video);

  const dispatch = useDispatch();
  useEffect(() => {
    params.videoID && dispatch(getVideoDetail({ videoId: params.videoID }));
  }, [dispatch, params.videoID]);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="videoPage_container">
      <div className="player_display">
        <DisplayVideo videoSrc={videoDetail?.videoUrl} width={""} />
      </div>

      <div className="underPlayerDisplay_container">
        <div className="player_detail">
          <h2 className="player_title">{videoDetail?.title}</h2>
          <div className="player_ownerInfo">
            <div className="avatar_box">
              <Avatar width="40px" />
            </div>
            <div className="ownerName_box">
              <p>
                {videoDetail?.userName?.firstName}{" "}
                {videoDetail?.userName?.lastName}
              </p>
            </div>
          </div>
          <div className="player_description">{videoDetail?.description}</div>
          <div className="player_info">
            <div>
              <div className="player_info_box">
                <h4>Material</h4>
                <div>
                  {" "}
                  {formatArrayToStringLabel(
                    videoDetail?.material.split(","),
                    MATERIAL_OPTION
                  )}
                </div>
              </div>
              <div className="player_info_box">
                <h4>Tool</h4>
                <div>
                  {formatArrayToStringLabel(
                    videoDetail?.tool.split(","),
                    TOOLS_OPTION
                  )}
                </div>
              </div>
              <div className="player_info_box">
                <h4>Difficulty</h4>
                <p>{videoDetail?.difficulty}</p>
              </div>
              <div className="player_info_box">
                <h4>Duration</h4>
                <p>~{videoDetail?.duration}</p>
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
};

export default WatchVideoPage;
