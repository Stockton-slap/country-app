import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../../utils/setToken";
// import { instanceAuth } from "./register";
import axios from "axios";

const getCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  try {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    setToken(persistedToken);

    const response = await axios.get(
      "https://connections-api.herokuapp.com/users/current"
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export default getCurrentUser;
