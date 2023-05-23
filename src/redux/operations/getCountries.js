import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instanceCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (_, thunkAPI) => {
    try {
      const response = await instanceCountries.get(
        "/all?fields=name,borders,capital,continents,currencies,flags,languages,population,area"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default getCountries;
