import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showImageViewer: false,
  currentImage: null,
};

export const imageViewerSlice = createSlice({
  name: "imageViewer",
  initialState,
  reducers: {
    setShowImageViewer: (state, action) => {
      state.showImageViewer = action.payload;
      if (action.payload) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    },
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload;
    },
  },
});

export const { setShowImageViewer, setCurrentImage } = imageViewerSlice.actions;
export const imageViewerReducer = imageViewerSlice.reducer;
