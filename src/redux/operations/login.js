import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../../utils/axiosConfig";
import { instanceAuth } from "../../utils/axiosConfig";

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await instanceAuth.post("/users/login", credentials);

    const { token } = response.data;

    setToken(token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export default login;
