import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { instanceAuth } from "./register";

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.post(
      "https://connections-api.herokuapp.com/users/logout"
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export default logout;
