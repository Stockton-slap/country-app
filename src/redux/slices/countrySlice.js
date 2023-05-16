import { createSlice } from "@reduxjs/toolkit";
import getCountries from "../operations/getCountries";
import getCountryDetails from "../operations/getCountryDetails";

const initialState = {
  countries: [],
  currentCountry: "",
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

    [getCountryDetails.fulfilled](state, action) {
      state.currentCountry = action.payload;
    },
    [getCountryDetails.pending](state, action) {},
    [getCountryDetails.rejected](state, action) {},
  },
});

export const countryReducer = countrySlice.reducer;
