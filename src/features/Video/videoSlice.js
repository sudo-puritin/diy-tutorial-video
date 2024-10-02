import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiService from "../../app/apiService";
import { API } from "../../constants/API.constants";

const initialState = {
  isLoading: false,
  error: null,
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
    },
  },
});

export const createVideo =
  ({ data }) =>
  async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await apiService.post(`${API.CREATE_VIDEO}`, {
        ...data,
      });
      console.log("🚀 Puritin ~ response:", response);
      dispatch(slice.actions.createVideoSuccess(response.data));
      toast.success("Create video successfully");
    } catch (error) {
      dispatch(slice.actions.hasError(error.message));
      toast.error(error.message);
    }
  };

export default slice.reducer;
