import React, { useEffect } from "react";

import "./VideoList.scss";

import HeroCard from "../../../components/HeroCard";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../videoSlice";

function MyVideoList({ userId }) {
  const dispatch = useDispatch();

  const { videos } = useSelector((state) => state.video);

  useEffect(() => {
    userId && dispatch(getVideo({ userId }));
  }, [userId, dispatch]);

  return (
    <div className="myVideoList_container">
      {videos?.searchVideos?.map((video) => (
        <HeroCard key={video._id} video={video} />
      ))}
    </div>
  );
}

export default MyVideoList;
