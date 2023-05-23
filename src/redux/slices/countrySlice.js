import { createSlice } from "@reduxjs/toolkit";
import getCountries from "../operations/getCountries";
import getCountryDetails from "../operations/getCountryDetails";
import { toast } from "react-toastify";

const initialState = {
  countries: [],
  currentCountry: "",
  isLoading: false,
  isError: false,
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
  toast.error("Oops, something went wrong.");
};

const handlePending = (state) => {
  state.isLoading = true;
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  extraReducers: {
    [getCountries.fulfilled](state, action) {
      state.countries = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getCountryDetails.fulfilled](state, action) {
      state.currentCountry = action.payload;
      state.isLoading = false;
      state.isError = false;
    },

    [getCountries.pending]: handlePending,
    [getCountryDetails.pending]: handlePending,

    [getCountries.rejected]: handleError,
    [getCountryDetails.rejected]: handleError,
  },
});

export const countryReducer = countrySlice.reducer;
