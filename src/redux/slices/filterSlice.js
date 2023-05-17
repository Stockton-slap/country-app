import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter(state, action) {
      state = action.payload;

      return action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
