import { createSlice } from "@reduxjs/toolkit";

const initialState = { item: 0, countries: [], buttonSwap: true };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCount(state, action) {
      state.item = action.payload;
    },

    favoriteCountry(state, action) {
      state.countries.push(action.payload);
    },

    switchButton(state, action) {
      state.buttonSwap = action.payload;
    },
  },
});

export const { addCount, favoriteCountry, switchButton } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
