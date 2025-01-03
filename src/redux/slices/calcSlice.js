import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchIsActive = createAsyncThunk(
  "calculator/fetchIsActive",
  async () => {
    const collectionRef = collection(db, "main_buttons");
    const data = await getDocs(collectionRef);

    const active_individual = data.docs[0].data().active_individual;
    const active_remote = data.docs[0].data().active_remote;
    const active_storage = data.docs[0].data().active_storage;

    return {
      active_individual,
      active_remote,
      active_storage,
    };
  }
);

export const fetchIsEmpty = createAsyncThunk(
  "calculator/fetchIsEmpty",
  async () => {
    const collectionRef = collection(db, "calculator_individual");
    const data = await getDocs(collectionRef);
    return data.docs[0].data().empty;
  }
);

export const fetchIsEmptyRemote = createAsyncThunk(
  "calculator/fetchIsEmptyRemote",
  async () => {
    const collectionRef = collection(db, "calculator_remote");
    const data = await getDocs(collectionRef);
    return data.docs[0].data().empty;
  }
);

export const fetchIsEmptyStorage = createAsyncThunk(
  "calculator/fetchIsEmptyStorage",
  async () => {
    const collectionRef = collection(db, "calculator_storage");
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

    return termin;
  }
);

export const fetchSizesAndPrice = createAsyncThunk(
  "calculator/fetchSizesAndPrice",
  async () => {
    const collectionRef = collection(db, "calculator_individual");
    const data = await getDocs(collectionRef);

    const sizes = data.docs[0].data().sizes;
    const sizesPrice = data.docs[0].data().sizes_price;
    const sizesQuantity = data.docs[0].data().sizes_quantity;

    return { sizes, sizesPrice, sizesQuantity };
  }
);

export const fetchSizesAndPriceRemote = createAsyncThunk(
  "calculator/fetchSizesAndPriceRemote",
  async () => {
    const collectionRef = collection(db, "calculator_remote");
    const data = await getDocs(collectionRef);

    const sizes = data.docs[0].data().sizes;
    const sizesPrice = data.docs[0].data().sizes_price;
    // const sizesQuantity = data.docs[0].data().sizes_quantity;

    return { sizes, sizesPrice };
  }
);

export const fetchSizesAndPriceStorage = createAsyncThunk(
  "calculator/fetchSizesAndPriceStorage",
  async () => {
    const collectionRef = collection(db, "calculator_storage");
    const data = await getDocs(collectionRef);

    const sizes = data.docs[0].data().sizes;
    const sizesPrice = data.docs[0].data().sizes_price;
    // const sizesQuantity = data.docs[0].data().sizes_quantity;

    return { sizes, sizesPrice };
  }
);

const initialState = {
  isEmptyIndividual: false,
  isEmptyRemote: false,
  isEmptyStorage: false,
  isActiveIndividual: true,
  isActiveRemote: true,
  isActiveStorage: true,
  terminIndividual: [],
  sizesIndividual: [],
  sizesRemote: [],
  sizesStorage: [],
  status: "loading",
};

export const calcSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
  extraReducers: {
    // individual
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
    // remote
    [fetchIsEmptyRemote.pending]: (state) => {
      state.isEmptyRemote = false;
      state.status = "loading";
    },
    [fetchIsEmptyRemote.fulfilled]: (state, action) => {
      state.isEmptyRemote = action.payload;
      state.status = "loaded";
    },
    [fetchIsEmptyRemote.rejected]: (state) => {
      state.isEmptyRemote = false;
      state.status = "loading";
    },
    // storage
    [fetchIsEmptyStorage.pending]: (state) => {
      state.isEmptyStorage = false;
      state.status = "loading";
    },
    [fetchIsEmptyStorage.fulfilled]: (state, action) => {
      state.isEmptyStorage = action.payload;
      state.status = "loaded";
    },
    [fetchIsEmptyStorage.rejected]: (state) => {
      state.isEmptyStorage = false;
      state.status = "loading";
    },

    // termin for all
    [fetchTerminAndPrice.pending]: (state) => {
      state.terminIndividual = [];
      state.status = "loading";
    },
    [fetchTerminAndPrice.fulfilled]: (state, action) => {
      const termin = action.payload;
      const newArray = termin.map((termin) => termin);
      state.terminIndividual = newArray;
      state.status = "loaded";
    },
    [fetchTerminAndPrice.rejected]: (state) => {
      state.terminIndividual = [];
      state.status = "loading";
    },
    // sizes ind
    [fetchSizesAndPrice.pending]: (state) => {
      state.sizesIndividual = [];
      state.status = "loading";
    },
    [fetchSizesAndPrice.fulfilled]: (state, action) => {
      const { sizes, sizesPrice, sizesQuantity } = action.payload;
      const newArray = sizes.map((size, index) => ({
        size,
        price: sizesPrice[index],
        quantity: sizesQuantity[index],
      }));

      state.sizesIndividual = newArray;
      state.status = "loaded";
    },
    [fetchSizesAndPrice.rejected]: (state) => {
      state.sizesIndividual = [];
      state.status = "loading";
    },
    // sizes remote
    [fetchSizesAndPriceRemote.pending]: (state) => {
      state.sizesRemote = [];
      state.status = "loading";
    },
    [fetchSizesAndPriceRemote.fulfilled]: (state, action) => {
      const { sizes, sizesPrice } = action.payload;
      const newArray = sizes.map((size, index) => ({
        size,
        price: sizesPrice[index],
      }));

      state.sizesRemote = newArray;
      state.status = "loaded";
    },
    [fetchSizesAndPriceRemote.rejected]: (state) => {
      state.sizesRemote = [];
      state.status = "loading";
    },
    // sizes storage
    [fetchSizesAndPriceStorage.pending]: (state) => {
      state.sizesStorage = [];
      state.status = "loading";
    },
    [fetchSizesAndPriceStorage.fulfilled]: (state, action) => {
      const { sizes, sizesPrice } = action.payload;
      const newArray = sizes.map((size, index) => ({
        size,
        price: sizesPrice[index],
      }));

      state.sizesStorage = newArray;
      state.status = "loaded";
    },
    [fetchSizesAndPriceStorage.rejected]: (state) => {
      state.sizesStorage = [];
      state.status = "loading";
    },
    [fetchIsActive.pending]: (state) => {
      state.isActiveIndividual = true;
      state.isActiveRemote = true;
      state.isActiveStorage = true;
    },
    [fetchIsActive.fulfilled]: (state, action) => {
      const { active_individual, active_remote, active_storage } =
        action.payload;
      state.isActiveIndividual = active_individual;
      state.isActiveRemote = active_remote;
      state.isActiveStorage = active_storage;
    },
    [fetchIsActive.rejected]: (state) => {
      state.isActiveIndividual = true;
      state.isActiveRemote = true;
      state.isActiveStorage = true;
    },
  },
});

export const calcReducer = calcSlice.reducer;
