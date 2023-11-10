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
// export const fetchAddImage = createAsyncThunk(
//   "images/fetchAddImage",
//   async (file) => {
//     if (file) {
//       const imageRef = ref(storage, `images/${v4()}`);
//       uploadBytes(imageRef, file).then(() => {
//         alert("image uploaded!");
//       });
//     } else return;
//   }
// );

// export const fetchDeleteImage = createAsyncThunk(
//   "images/fetchDeleteImage",
//   async (path) => {
//     if (path) {
//       const imageRef = ref(storage, path);
//       deleteObject(imageRef).then(() => {
//         alert("image deleted!");
//       });
//     } else return;
//   }
// );

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
    // [fetchAddImage.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [fetchAddImage.fulfilled]: (state) => {
    //   state.status = "loaded";
    // },
    // [fetchAddImage.rejected]: (state) => {
    //   state.status = "loading";
    // },
    // [fetchDeleteImage.pending]: (state) => {
    //   state.status = "loading";
    // },
    // [fetchDeleteImage.fulfilled]: (state) => {
    //   state.status = "loaded";
    // },
    // [fetchDeleteImage.rejected]: (state) => {
    //   state.status = "loading";
    // },
  },
});

export const imageReducer = imageSlice.reducer;
