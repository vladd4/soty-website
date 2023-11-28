import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  info: "",
};

export const additionalSlice = createSlice({
  name: "additional",
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

export const { setInfo, setTitle } = additionalSlice.actions;

export const additionalReducer = additionalSlice.reducer;
