import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiService from "../../app/apiService";
import { API } from "../../constants/API.constants";

const initialState = {
  isLoading: false,
  error: null,
  myVideo: null,
  videos: [],
  videoDetail: null,
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
    getMyVideoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.myVideo = action.payload.videoList;
    },
    getVideoListSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.videos = action.payload;
    },
    getVideoDetailSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.videoDetail = action.payload;
    },
    updateVideoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.updateVideoInfo = action.payload;
      toast.success("Update video successfully");
    },
    removeVideoSuccess(state) {
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

    dispatch(slice.actions.createVideoSuccess(response.data));
    return { success: true };
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
    return { success: false };
  }
};

export const getMyVideo =
  ({ userId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.get(`${API.GET_MY_VIDEO}/${userId}`);

      dispatch(slice.actions.getMyVideoSuccess(response.data));

      return { success: true };
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
      return { success: false };
    }
  };

export const getVideoList = () => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await apiService.get(`${API.GET_VIDEO}`);

    dispatch(slice.actions.getVideoListSuccess(response.data));

    return { success: true };
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    toast.error(error.message);
    return { success: false };
  }
};

export const getVideoDetail =
  ({ videoId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.get(`${API.UPDATE_VIDEO}/${videoId}`);
      dispatch(slice.actions.getVideoDetailSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

export const updateVideoInfo =
  ({ videoId, data }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.put(`${API.UPDATE_VIDEO}/${videoId}`, {
        ...data,
      });
      dispatch(slice.actions.updateVideoSuccess(response.data));
      return { success: true };
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
      return { success: false };
    }
  };

export const deleteVideoInfo =
  ({ videoId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.delete(
        `${API.DELETE_VIDEO}/${videoId}`
      );
      dispatch(slice.actions.removeVideoSuccess(response.data));
      return { success: true };
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
      return { success: false };
    }
  };

export default slice.reducer;
