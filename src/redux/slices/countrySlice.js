import { createSlice } from "@reduxjs/toolkit";
import getCountries from "../operations/getCountries";

const initialState = {
  countries: [],
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: {
    [getCountries.fulfilled](state, action) {
      state.countries = action.payload;
    },
    [getCountries.pending](state, action) {},
    [getCountries.rejected](state, action) {},
  },
});

export const countryReducer = countrySlice.reducer;
