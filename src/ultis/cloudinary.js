import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "../app/config";
import axios from "axios";

export const cloudinaryUpload = async (image) => {
  if (!image) return "";

  try {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    console.log("🚀 Puritin ~ cloudinaryUpload ~ formData:", formData);

    const response = await axios({
      url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const imageUrl = response.data.secure_url;
    return imageUrl;
  } catch (error) {
    console.log("🚀 Puritin ~ cloudinaryUpload ~ error:", error);
  }
};
