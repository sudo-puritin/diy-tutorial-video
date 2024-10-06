import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiService from "../../app/apiService";
import { API } from "../../constants/API.constants";

const initialState = {
  isLoading: false,
  isLoadingDetail: true,
  error: null,
  myVideo: null,
  videoDetail: null,
  updateVideoInfo: null,
  categoryStore: null,
  collectionStore: null,
  videos: [],
  rating: null,
  viewing: null,
  page: 1,
  totalPage: null,
};

const slice = createSlice({
  name: "video",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    startLoadingDetail(state) {
      state.isLoadingDetail = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.isLoadingDetail = false;
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
    getVideoDetailSuccess(state, action) {
      state.videoDetail = action.payload;
      state.error = null;
      state.isLoadingDetail = false;
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
    searchVideoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.videos = action.payload.searchVideos;
      state.totalPage = action.payload.totalPage;
      state.page = action.payload.page;
    },
    setCategorySuccess(state, action) {
      state.categoryStore = action.payload;
    },
    setCollectionSuccess(state, action) {
      state.collectionStore = action.payload;
    },
    updateRatingSuccess(state, action) {
      state.rating = action.payload;
    },
    updateViewingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.viewing = action.payload;
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

export const getVideoDetail =
  ({ videoId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoadingDetail());
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

export const searchVideo = (queryParams) => async (dispatch) => {
  dispatch(slice.actions.startLoading());
  try {
    const response = await apiService.get(`${API.SEARCH_VIDEO}`, {
      params: { ...queryParams, limit: 12 },
    });

    dispatch(
      slice.actions.searchVideoSuccess({
        ...response.data,
        page: queryParams?.page || slice.getInitialState().page,
      })
    );
  } catch (error) {
    dispatch(slice.actions.hasError(error.message));
    return { success: false };
  }
};

export const setCategoryStore = (category) => (dispatch) => {
  dispatch(slice.actions.setCategorySuccess(category));
  return { success: true };
};

export const setCollectionStore = (collection) => (dispatch) => {
  dispatch(slice.actions.setCollectionSuccess(collection));
};

export const updateRating =
  ({ userId, videoId }) =>
  async (dispatch) => {
    try {
      const response = await apiService.put(
        `${API.UPDATING_RATING}/${videoId}`,
        {
          userId,
        }
      );
      dispatch(slice.actions.updateRatingSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      return { success: false };
    }
  };

export const updateViewing =
  ({ videoId, data }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.put(
        `${API.UPDATING_VIEWING}/${videoId}`,
        {
          ...data,
        }
      );
      dispatch(slice.actions.updateViewingSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      return { success: false };
    }
  };

export default slice.reducer;
