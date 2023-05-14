import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "../../utils/setToken";

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", credentials);
    const { token } = response.data;

    setToken(token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default login;
