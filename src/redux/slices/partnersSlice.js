import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async (_, { getState }) => {
    const { partnersList } = getState().partners;
    const partnersListRef = ref(storage, "partners/");

    try {
      const res = await listAll(partnersListRef);
      const urls = await Promise.all(
        res.items.map(async (item) => await getDownloadURL(item))
      );

      const uniqueUrls = Array.from(new Set([...partnersList, ...urls]));
      return uniqueUrls;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  partnersList: [],
  status: "loading",
};

export const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPartners.pending]: (state) => {
      state.partnersList = [];
      state.status = "loading";
    },
    [fetchPartners.fulfilled]: (state, action) => {
      state.partnersList = action.payload;
      state.status = "loaded";
    },
    [fetchPartners.rejected]: (state) => {
      state.partnersList = [];
      state.status = "loading";
    },
  },
});

export const partnersReducer = partnersSlice.reducer;
