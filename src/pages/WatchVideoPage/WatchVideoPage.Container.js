import React, { useEffect, useMemo, useState } from "react";
import { MiniCard } from "../../components/MiniCard";
import DisplayVideo from "../../components/DisplayVideo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchVideo, updateRating } from "../../features/Video/videoSlice";
import { MATERIAL_OPTION, TOOLS_OPTION } from "../../constants/list.constants";
import { formatArrayToStringLabel } from "../../ultis/formatArrayDataToLabel";
import useAuth from "../../hooks/useAuth";

import FavoriteIcon from "@mui/icons-material/Favorite";

import "./VideoPage.scss";

const WatchVideoPageContainer = () => {
  const params = useParams();
  const { user, isAuthenticated } = useAuth();

  const dispatch = useDispatch();

  const { videoDetail } = useSelector((state) => state.video);

  const isRated = useMemo(() => {
    const founded = videoDetail?.rating?.find((item) => item === user?._id);
    return !!founded;
  }, [videoDetail?.rating, user?._id]);

  const { videos } = useSelector((state) => state.video);
  console.log("🚀 Puritin ~ WatchVideoPageContainer ~ videos:", videos);

  useEffect(() => {
    dispatch(searchVideo());
  }, [dispatch]);

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
                {videoDetail?.author?.firstName} {videoDetail?.author?.lastName}
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
          <h2>Recommendation</h2>
          <div className="miniCard_container">
            {videos.map((video) => (
              <MiniCard video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideoPageContainer;
