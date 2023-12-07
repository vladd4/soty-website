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
      const uniqueUrls = new Set(imageList);

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
