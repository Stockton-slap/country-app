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
      toast.error("Oops, something went wrong.");
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
      toast.error("Oops, something went wrong.");
    },

    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [getCurrentUser.pending](state, action) {},
    [getCurrentUser.rejected](state, action) {
      state.isLoggedIn = false;
    },

    [logout.fulfilled](state, action) {
      state.user.name = "";
      state.user.email = "";
      state.user.password = "";
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logout.pending](state, action) {
      state.isLoading = true;
    },
    [logout.rejected](state, action) {
      state.isLoading = false;
      toast.error("Oops, something went wrong.");
    },
  },
});

export const authReducer = authSlice.reducer;
