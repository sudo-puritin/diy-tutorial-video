import React from "react";
import "./CreatingVideoPage.scss";

import UploadVideo from "../../../features/Video/UploadVideo";

const CreatingVideoPage = () => {
  return (
    <div>
      <h3>Upload videos</h3>
      <hr />
      <UploadVideo />
    </div>
  );
};

export default CreatingVideoPage;
