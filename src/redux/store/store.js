import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "../slices/modalSlice";
import { imageReducer } from "../slices/imagesSlice";
import { partnersReducer } from "../slices/partnersSlice";
import { calcReducer } from "../slices/calcSlice";
import { additionalReducer } from "../slices/additionalSlice";
import { popupReducer } from "../slices/popupSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    images: imageReducer,
    partners: partnersReducer,
    calculator: calcReducer,
    additional: additionalReducer,
    popup: popupReducer,
  },
});
