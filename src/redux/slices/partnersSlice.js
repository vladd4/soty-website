import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async (_, { getState }) => {
    const { partnersList } = getState().images;
    const partnersListRef = ref(storage, "partners/");

    try {
      const res = await listAll(partnersListRef);
      const uniqueUrls = new Set(partnersList);

      for (const item of res.items) {
        const url = await getDownloadURL(item);
        uniqueUrls.add(url);
      }

      return Array.from(uniqueUrls);
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
