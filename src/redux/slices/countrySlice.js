import { createSlice } from "@reduxjs/toolkit";
import getCountries from "../operations/getCountries";
import getCountryDetails from "../operations/getCountryDetails";

const initialState = {
  countries: [],
  currentCountry: "",
  isLoading: false,
  // isError: false,
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: {
    [getCountries.fulfilled](state, action) {
      state.countries = action.payload;
      state.isLoading = false;
    },
    [getCountries.pending](state, action) {
      state.isLoading = true;
    },
    [getCountries.rejected](state, action) {
      state.isLoading = false;
    },

    [getCountryDetails.fulfilled](state, action) {
      state.currentCountry = action.payload;
      state.isLoading = false;
    },
    [getCountryDetails.pending](state, action) {
      state.isLoading = true;
    },
    [getCountryDetails.rejected](state, action) {
      state.isLoading = false;
    },
  },
});

export const countryReducer = countrySlice.reducer;
