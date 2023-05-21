import { createSlice } from "@reduxjs/toolkit";

const initialState = { filter: "", isFilterVisible: true };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },

    showFilter(state, action) {
      state.isFilterVisible = action.payload;
    },
  },
});

export const { updateFilter, showFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
