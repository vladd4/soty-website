import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  size: null,
  termin: null,
  type: null,
  price: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setTermin: (state, action) => {
      state.termin = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    resetData: (state) => {
      state.size = initialState.size;
      state.termin = initialState.termin;
      state.type = initialState.type;
      state.price = initialState.price;
    },
  },
  extraReducers: {},
});

export const { setSize, setTermin, setType, resetData, setPrice } =
  modalSlice.actions;

export const modalReducer = modalSlice.reducer;
