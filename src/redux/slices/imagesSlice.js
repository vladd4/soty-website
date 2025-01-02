import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { getState, rejectWithValue }) => {
    const { imageList } = getState().images;
    const imageListRef = ref(storage, "images/");

    try {
      const res = await listAll(imageListRef);
      const urls = await Promise.all(
        res.items.map(async (item) => {
          try {
            return await getDownloadURL(item);
          } catch (error) {
            console.error(`Failed to fetch URL for ${item.name}`, error);
            return null;
          }
        })
      );

      const validUrls = urls.filter((url) => url !== null);

      const uniqueUrls = Array.from(new Set([...imageList, ...validUrls]));

      return uniqueUrls;
    } catch (error) {
      console.error("Error fetching images:", error);
      return rejectWithValue(error.message || "Failed to fetch images");
    }
  }
);
export const fetchIndividualImages = createAsyncThunk(
  "images/fetchIndividualImages",
  async (_, { getState, rejectWithValue }) => {
    const { imageList } = getState().images;
    const imageListRef = ref(storage, "images_individual/");

    try {
      const res = await listAll(imageListRef);
      const urls = await Promise.all(
        res.items.map(async (item) => {
          try {
            return await getDownloadURL(item);
          } catch (error) {
            console.error(`Failed to fetch URL for ${item.name}`, error);
            return null;
          }
        })
      );

      const validUrls = urls.filter((url) => url !== null);

      const uniqueUrls = Array.from(new Set([...imageList, ...validUrls]));

      return uniqueUrls;
    } catch (error) {
      console.error("Error fetching images:", error);
      return rejectWithValue(error.message || "Failed to fetch images");
    }
  }
);

export const fetchStorageImages = createAsyncThunk(
  "images/fetchStorageImages",
  async (_, { getState, rejectWithValue }) => {
    const { imageList } = getState().images;
    const imageListRef = ref(storage, "images_storage/");

    try {
      const res = await listAll(imageListRef);
      const urls = await Promise.all(
        res.items.map(async (item) => {
          try {
            return await getDownloadURL(item);
          } catch (error) {
            console.error(`Failed to fetch URL for ${item.name}`, error);
            return null;
          }
        })
      );

      const validUrls = urls.filter((url) => url !== null);

      const uniqueUrls = Array.from(new Set([...imageList, ...validUrls]));

      return uniqueUrls;
    } catch (error) {
      console.error("Error fetching images:", error);
      return rejectWithValue(error.message || "Failed to fetch images");
    }
  }
);

export const fetchRemoteImages = createAsyncThunk(
  "images/fetchRemoteImages",
  async (_, { getState, rejectWithValue }) => {
    const { imageList } = getState().images;
    const imageListRef = ref(storage, "images_remote/");

    try {
      const res = await listAll(imageListRef);
      const urls = await Promise.all(
        res.items.map(async (item) => {
          try {
            return await getDownloadURL(item);
          } catch (error) {
            console.error(`Failed to fetch URL for ${item.name}`, error);
            return null;
          }
        })
      );

      const validUrls = urls.filter((url) => url !== null);

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
  individualImageList: [],
  remoteImageList: [],
  storageImageList: [],
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
    [fetchRemoteImages.pending]: (state) => {
      state.remoteImageList = [];
      state.status = "loading";
    },
    [fetchRemoteImages.fulfilled]: (state, action) => {
      state.remoteImageList = action.payload;
      state.status = "loaded";
    },
    [fetchRemoteImages.rejected]: (state) => {
      state.remoteImageList = [];
      state.status = "loading";
    },
    [fetchIndividualImages.pending]: (state) => {
      state.individualImageList = [];
      state.status = "loading";
    },
    [fetchIndividualImages.fulfilled]: (state, action) => {
      state.individualImageList = action.payload;
      state.status = "loaded";
    },
    [fetchIndividualImages.rejected]: (state) => {
      state.individualImageList = [];
      state.status = "loading";
    },
    [fetchStorageImages.pending]: (state) => {
      state.storageImageList = [];
      state.status = "loading";
    },
    [fetchStorageImages.fulfilled]: (state, action) => {
      state.storageImageList = action.payload;
      state.status = "loaded";
    },
    [fetchStorageImages.rejected]: (state) => {
      state.storageImageList = [];
      state.status = "loading";
    },
  },
});

export const imageReducer = imageSlice.reducer;
