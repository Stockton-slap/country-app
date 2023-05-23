import { createSlice } from "@reduxjs/toolkit";

const initialState = { item: 0, countries: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCount(state, action) {
      state.item = action.payload;
    },

    addCountry(state, action) {
      state.countries.push(action.payload);
    },
  },
});

export const { addCount, addCountry } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
