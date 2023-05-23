import { createSlice } from "@reduxjs/toolkit";

import register from "../operations/register";
import login from "../operations/login";
import getCurrentUser from "../operations/getCurrentUser";
import logout from "../operations/logout";
import { toast } from "react-toastify";

const initialState = {
  user: { name: "", email: "", password: "" },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
  toast.error("Oops, something went wrong.");
};

const handlePending = (state) => {
  state.isLoading = true;
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
      state.isError = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isError = false;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isError = false;
    },
    [logout.fulfilled](state) {
      state.user.name = "";
      state.user.email = "";
      state.user.password = "";
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = false;
    },

    [register.pending]: handlePending,
    [login.pending]: handlePending,
    [logout.pending]: handlePending,

    [register.rejected]: handleError,
    [login.rejected]: handleError,
    [logout.rejected]: handleError,
  },
});

export const authReducer = authSlice.reducer;
