import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import getCurrentUser from "../redux/operations/getCurrentUser";

import SharedLayout from "./SharedLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Loader from "./Loader/Loader";
import { Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setIsReady(true));
  }, [dispatch]);

  if (!isReady) {
    return (
      <Box sx={{ height: "100vh" }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute restricted>
              <Home />
            </PublicRoute>
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="countries"
          element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }
        />

        <Route
          path="countries/:countryId"
          element={
            <PrivateRoute>
              <Details />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
