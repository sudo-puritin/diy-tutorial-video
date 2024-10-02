import { toast } from "react-toastify";
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "../app/config";
import axios from "axios";

export const cloudinaryUpload = async (image) => {
  if (!image) return "";

  try {
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await axios({
      url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const imageUrl = response.data.secure_url;
    return { success: true, imageUrl };
  } catch (error) {
    toast.error("Upload image failed");
    console.log("🚀 Puritin ~ cloudinaryUpload ~ error:", error);
    return { success: false, imageUrl: "" };
  }
};

export const cloudinaryVideoUpload = async (video) => {
  if (!video) return "";

  try {
    const formData = new FormData();

    formData.append("file", video);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await axios({
      url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const videoUrl = response.data.secure_url;
    return { success: true, videoUrl };
  } catch (error) {
    toast.error("Upload video failed");
    console.log("🚀 Puritin ~ cloudinaryUpload ~ error:", error);
    return { success: false, videoUrl: "" };
  }
};
