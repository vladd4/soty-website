import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { getState, rejectWithValue }) => {
    const { imageList } = getState().images;
    const imageListRef = ref(storage, "images/");

    try {
      // List all items from the "images/" directory
      const res = await listAll(imageListRef);

      // Attempt to fetch download URLs for each item
      const urls = await Promise.all(
        res.items.map(async (item) => {
          try {
            return await getDownloadURL(item);
          } catch (error) {
            console.error(`Failed to fetch URL for ${item.name}`, error);
            return null; // Return null for failed URL fetch
          }
        })
      );

      // Filter out any null values resulting from failed URL fetches
      const validUrls = urls.filter((url) => url !== null);

      // Merge the fetched URLs with the existing image list, removing duplicates
      const uniqueUrls = Array.from(new Set([...imageList, ...validUrls]));

      return uniqueUrls;
    } catch (error) {
      console.error("Error fetching images:", error);
      return rejectWithValue(error.message || "Failed to fetch images");
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
