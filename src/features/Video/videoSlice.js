import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiService from "../../app/apiService";
import { API } from "../../constants/API.constants";

const initialState = {
  isLoading: false,
  error: null,
  videos: [],
  updateVideoInfo: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createVideoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.createVideo = action.payload;
      toast.success("Create video successfully");
    },
    getVideoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.videos = action.payload;
    },
    updateVideoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.updateVideoInfo = action.payload;
    },
    removeVideoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      toast.success("The video has been removed successfully");
    },
  },
});

export const createVideo = (data) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await apiService.post(`${API.CREATE_VIDEO}`, {
      ...data,
    });
    console.log("🚀 Puritin ~ response:", response);

    dispatch(slice.actions.createVideoSuccess(response.data));
    return { success: true };
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
    return { success: false };
  }
};

export const getVideo =
  ({ userId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.get(`${API.CREATE_VIDEO}`);

      dispatch(slice.actions.getVideoSuccess(response.data));

      return { success: true };
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
      return { success: false };
    }
  };

export const updateVideoInfo =
  ({ videoId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.put(`${API.CREATE_VIDEO}/${videoId}`);
      dispatch(slice.actions.updateVideoSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

export const deleteVideoInfo =
  ({ videoId, data }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.delete(
        `${API.CREATE_VIDEO}/${videoId}`
      );
      dispatch(slice.actions.removeVideoSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

export default slice.reducer;
