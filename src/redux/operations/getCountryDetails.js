import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceCountries } from "./getCountries";

const getCountryDetails = createAsyncThunk(
  "countries/getCountryDetails",
  async (countryId, thunkAPI) => {
    try {
      const response = await instanceCountries.get(`/name/${countryId}`);

      return response.data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getCountryDetails;
