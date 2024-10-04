import React, { useEffect, useState } from "react";
import UploadVideo from "../../../features/Video/UploadVideo";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideoDetail } from "../../../features/Video/videoSlice";
import LoadingScreen from "../../../components/LoadingScreen";

function EditVideoPage() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  const videoDetail = useSelector((state) => state.video.videoDetail);

  useEffect(() => {
    dispatch(getVideoDetail({ videoId: params.id })).then(() =>
      setIsLoading(false)
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  if (isLoading) return <LoadingScreen />;

  return (
    <div>
      <UploadVideo initialData={videoDetail} isEdit />
    </div>
  );
}

export default EditVideoPage;
