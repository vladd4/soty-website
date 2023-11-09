import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "../slices/modalSlice";
import { imageReducer } from "../slices/imagesSlice";
import { partnersReducer } from "../slices/partnersSlice";
import { calcReducer } from "../slices/calcSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    images: imageReducer,
    partners: partnersReducer,
    calculator: calcReducer,
  },
});
