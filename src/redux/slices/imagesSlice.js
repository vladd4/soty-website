import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { getState }) => {
    const { imageList } = getState().images;
    const imageListRef = ref(storage, "images/");

    try {
      const res = await listAll(imageListRef);
      const urls = await Promise.all(
        res.items.map(async (item) => await getDownloadURL(item))
      );

      const uniqueUrls = Array.from(new Set([...imageList, ...urls]));
      return uniqueUrls;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  imageList: [],
  status: "loading",
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchImages.pending]: (state) => {
      state.imageList = [];
      state.status = "loading";
    },
    [fetchImages.fulfilled]: (state, action) => {
      state.imageList = action.payload;
      state.status = "loaded";
    },
    [fetchImages.rejected]: (state) => {
      state.imageList = [];
      state.status = "loading";
    },
  },
});

export const imageReducer = imageSlice.reducer;
