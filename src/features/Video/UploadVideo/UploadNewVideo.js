import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Player } from "video-react";
import { useFormContext } from "react-hook-form";

import "video-react/dist/video-react.css";
import { Box, LinearProgress } from "@mui/material";

const UploadNewVideo = ({ videoSrc, setVideoSrc }) => {
  const { setValue } = useFormContext();

  const [loadingUploadVideo, setLoadingUploadVideo] = useState(false);

  const handleFile = (event) => {
    setLoadingUploadVideo(true);

    const file = event.target.files[0];

    console.log(file);
    const url = URL.createObjectURL(file);
    setValue("videoUrl", url);
    setValue("videoFile", file);
    setVideoSrc(url);
    setLoadingUploadVideo(false);
  };
  return (
    <>
      <div className="uploadField_container">
        <label htmlFor="fileInput" className="uploadField_box">
          <CloudUploadIcon
            className="icon_upload"
            style={{ width: 50, height: 50, cursor: "pointer" }}
          />
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFile}
          />

          <p style={{ fontSize: 14, margin: 0, fontWeight: 600 }}>
            Drag and drop video files to upload
          </p>
          <p style={{ fontSize: 12, margin: 0 }}>
            Your videos will be private until you publish them.
          </p>
          {loadingUploadVideo && (
            <Box sx={{ width: "100%", marginTop: "10px" }}>
              <LinearProgress />
            </Box>
          )}
        </label>
      </div>
      <div className="display_video">
        {!!videoSrc && (
          <Player playsInline src={videoSrc} width={180} height={20} />
        )}
      </div>
    </>
  );
};

export default UploadNewVideo;
