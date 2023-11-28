import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  info: "",
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
  extraReducers: {},
});

export const { setInfo, setTitle } = popupSlice.actions;

export const popupReducer = popupSlice.reducer;
