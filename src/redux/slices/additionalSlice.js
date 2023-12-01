import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  info: "",
  icon: null,
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
    setIcon: (state, action) => {
      state.icon = action.payload;
    },
  },
  extraReducers: {},
});

export const { setInfo, setTitle, setIcon } = additionalSlice.actions;

export const additionalReducer = additionalSlice.reducer;
