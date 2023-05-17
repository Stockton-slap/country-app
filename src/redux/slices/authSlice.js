import { createSlice } from "@reduxjs/toolkit";

import register from "../operations/register";
import login from "../operations/login";

const initialState = {
  user: { name: "", email: "", password: "" },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  // isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.pending](state, action) {
      state.isLoading = true;
    },
    [register.rejected](state, action) {
      state.isLoading = false;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.rejected](state, action) {
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
