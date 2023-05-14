import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../../utils/setToken";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      const { token } = response.data;

      setToken(token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default register;
