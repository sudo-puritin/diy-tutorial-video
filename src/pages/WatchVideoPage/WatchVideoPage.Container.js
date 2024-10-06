import React, { useMemo, useState } from "react";

import "./VideoPage.scss";
import { Avatar } from "@mui/material";
import { MiniCard } from "../../components/MiniCard";
import DisplayVideo from "../../components/DisplayVideo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateRating } from "../../features/Video/videoSlice";
import { MATERIAL_OPTION, TOOLS_OPTION } from "../../constants/list.constants";
import { formatArrayToStringLabel } from "../../ultis/formatArrayDataToLabel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useAuth from "../../hooks/useAuth";

const WatchVideoPageContainer = () => {
  const params = useParams();
  const { user, isAuthenticated } = useAuth();

  const dispatch = useDispatch();

  const { videoDetail } = useSelector((state) => state.video);

  const isRated = useMemo(() => {
    const founded = videoDetail?.rating?.find((item) => item === user?._id);
    return !!founded;
  }, [videoDetail?.rating, user?._id]);

  const [isFavorite, setIsFavorite] = useState(isRated);

  const handleLikeVideo = () => {
    setIsFavorite(!isFavorite);
    dispatch(updateRating({ userId: user._id, videoId: params?.videoID }));
  };

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
              <p style={{ fontWeight: 600 }}>
                {videoDetail?.userName?.firstName}{" "}
                {videoDetail?.userName?.lastName}
              </p>
            </div>
            {isAuthenticated && (
              <div onClick={handleLikeVideo}>
                <FavoriteIcon
                  color={isFavorite ? "error" : "disabled"}
                  style={{ color: !isFavorite ? "secondary" : "disabled" }}
                  className="like_icon"
                  fontSize="large"
                />
              </div>
            )}
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

export default WatchVideoPageContainer;
