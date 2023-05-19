import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToken } from "../../utils/axiosConfig";
import { instanceAuth } from "../../utils/axiosConfig";

const getCurrentUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  try {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    await setToken(persistedToken);

    const response = await instanceAuth.get(
      "https://connections-api.herokuapp.com/users/current"
    );

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export default getCurrentUser;
