import { createAsyncThunk } from "@reduxjs/toolkit";

import { setToken } from "../../utils/setToken";

import { instanceAuth } from "./register";

const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await instanceAuth.post("/users/login", credentials);

    const { token } = response.data;

    setToken(token);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default login;
