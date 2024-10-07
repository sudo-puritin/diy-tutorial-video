import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { getVideoDetail } from "../../features/Video/videoSlice";
import LoadingScreen from "../../components/LoadingScreen";
import WatchVideoPageContainer from "./WatchVideoPage.Container";

import "./VideoPage.scss";

const WatchVideoPage = () => {
  const params = useParams();
  const { isInitialized } = useAuth();
  const { isLoadingDetail } = useSelector((state) => state.video);

  const dispatch = useDispatch();

  useEffect(() => {
    params.videoID && dispatch(getVideoDetail({ videoId: params.videoID }));
  }, [dispatch, params.videoID]);

  if (isLoadingDetail || !isInitialized) return <LoadingScreen />;

  return <WatchVideoPageContainer />;
};

export default WatchVideoPage;
