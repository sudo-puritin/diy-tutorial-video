import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User/userSlice";
import videoReducer from "../features/Video/videoSlice";

const rootReducer = {
  user: userReducer,
  video: videoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
