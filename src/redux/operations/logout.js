import { createAsyncThunk } from "@reduxjs/toolkit";
import { instanceAuth } from "../../utils/axiosConfig";

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await instanceAuth.post("/users/logout");

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export default logout;
