import { configureStore } from "@reduxjs/toolkit";
import { popupReducer } from "./slices/togglePopupSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});

export default store;
