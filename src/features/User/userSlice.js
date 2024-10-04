import { createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/apiService";
import { API } from "../../constants/API.constants";
import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  error: null,
  updateUserInfo: null,
};
console.log("🚀 Puritin ~ initialState:", initialState.isLoading);

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

export default slice.reducer;
