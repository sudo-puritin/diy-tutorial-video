import React, { useState } from "react";
import { cloudinaryUpload } from "../../../ultis/cloudinary";
import useAuth from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../userSlice";

import { Avatar } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import "./UploadAvatar.scss";

const UploadAvatar = () => {
  const { user } = useAuth();

  const dispatch = useDispatch();

  const [urlImage, setUrlImage] = useState(user.avatar);

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  const handleChangeAvatar = async ({ target }) => {
    const response = await cloudinaryUpload(target.files[0]);
    if (response.success) {
      setUrlImage(response.imageUrl);
      dispatch(
        updateUserInfo({
          userId: user._id,
          data: { ...user, avatar: response.imageUrl },
        })
      );
    }
  };

  return (
    <div className="avatar_box">
      <input
        accept="image/jpeg"
        id="faceImage"
        type="file"
        style={{ display: "none" }}
        onChange={handleChangeAvatar}
      />
      <label htmlFor="faceImage">
        <Avatar
          {...stringAvatar(`${user.firstName}${" "}${user.lastName}`)}
          src={urlImage}
          sx={{ width: "100px", height: "100px", cursor: "pointer" }}
        />
        <div className="photoIcon_box">
          <PhotoCameraIcon />
        </div>
      </label>
    </div>
  );
};

export default UploadAvatar;
