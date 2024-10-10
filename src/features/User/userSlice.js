import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { API } from "../../constants/API.constants";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  error: null,
  updateUserInfo: null,
  userInfo: null,
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
    updateUserInfoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.updateUserInfo = action.payload;
      toast.success("Update profile successfully");
    },
    getMyUserInfoSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload;
    },
  },
});

export const updateUserInfo =
  ({ userId, data }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await apiService.put(
        `${API.UPDATE_USER_INFO}/${userId}`,
        {
          ...data,
        }
      );
      dispatch(slice.actions.updateUserInfoSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

export const getMyUserInfo =
  ({ userId }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.get(`${API.GET_USER_INFO}/${userId}`);
      dispatch(slice.actions.getMyUserInfoSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

export default slice.reducer;
