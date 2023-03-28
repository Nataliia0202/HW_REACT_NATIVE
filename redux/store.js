import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../../../ReactNativeApp/ReactN/redux/sliceAuth"


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
