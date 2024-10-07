import React, { useEffect } from "react";
import HeroCard from "../../../components/HeroCard";
import { useDispatch, useSelector } from "react-redux";
import { getMyVideo } from "../videoSlice";
import LoadingScreen from "../../../components/LoadingScreen";

import "./VideoList.scss";

const MyVideoList = ({ userId }) => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.video);

  const { myVideo } = useSelector((state) => state.video);

  useEffect(() => {
    userId && dispatch(getMyVideo({ userId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div style={{ height: "65vh" }}>
        <LoadingScreen />
      </div>
    );
  }
  return (
    <div className="myVideoList_container">
      {myVideo?.map((video) => (
        <HeroCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export default MyVideoList;
