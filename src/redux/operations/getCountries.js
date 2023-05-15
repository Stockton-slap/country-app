import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instanceCountries = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (_, thunkAPI) => {
    try {
      const response = await instanceCountries.get("/all");

      console.log(response.data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default getCountries;
