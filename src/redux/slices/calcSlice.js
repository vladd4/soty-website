import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchIsEmpty = createAsyncThunk(
  "calculator/fetchIsEmpty",
  async () => {
    const collectionRef = collection(db, "calculator_individual");
    const data = await getDocs(collectionRef);
    return data.docs[0].data().empty;
  }
);

export const fetchTerminAndPrice = createAsyncThunk(
  "calculator/fetchTerminAndPrice",
  async () => {
    const collectionRef = collection(db, "calculator_individual");
    const data = await getDocs(collectionRef);

    const termin = data.docs[0].data().termin;
    const terminPrice = data.docs[0].data().termin_price;

    return { termin, terminPrice };
  }
);

export const fetchSizesAndPrice = createAsyncThunk(
  "calculator/fetchSizesAndPrice",
  async () => {
    const collectionRef = collection(db, "calculator_individual");
    const data = await getDocs(collectionRef);

    const sizes = data.docs[0].data().sizes;
    const sizesPrice = data.docs[0].data().sizes_price;

    return { sizes, sizesPrice };
  }
);

const initialState = {
  isEmptyIndividual: false,
  isEmptyRemote: false,
  isEmptyStorage: false,
  terminIndividual: [],
  sizesIndividual: [],
  status: "loading",
};

export const calcSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchIsEmpty.pending]: (state) => {
      state.isEmptyIndividual = false;
      state.status = "loading";
    },
    [fetchIsEmpty.fulfilled]: (state, action) => {
      state.isEmptyIndividual = action.payload;
      state.status = "loaded";
    },
    [fetchIsEmpty.rejected]: (state) => {
      state.isEmptyIndividual = false;
      state.status = "loading";
    },

    [fetchTerminAndPrice.pending]: (state) => {
      state.terminIndividual = [];
      state.status = "loading";
    },
    [fetchTerminAndPrice.fulfilled]: (state, action) => {
      const { termin, terminPrice } = action.payload;
      const newArray = termin.map((termin, index) => ({
        termin,
        price: terminPrice[index],
      }));
      state.terminIndividual = newArray;
      state.status = "loaded";
    },
    [fetchTerminAndPrice.rejected]: (state) => {
      state.terminIndividual = [];
      state.status = "loading";
    },

    [fetchSizesAndPrice.pending]: (state) => {
      state.sizesIndividual = [];
      state.status = "loading";
    },
    [fetchSizesAndPrice.fulfilled]: (state, action) => {
      const { sizes, sizesPrice } = action.payload;
      const newArray = sizes.map((size, index) => ({
        size,
        price: sizesPrice[index],
      }));

      state.sizesIndividual = newArray;
      state.status = "loaded";
    },
    [fetchSizesAndPrice.rejected]: (state) => {
      state.sizesIndividual = [];
      state.status = "loading";
    },
  },
});

export const calcReducer = calcSlice.reducer;
