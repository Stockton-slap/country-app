import { useEffect, useState, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Box } from "@mui/material";

import getCurrentUser from "../redux/operations/getCurrentUser";

import SharedLayout from "./SharedLayout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Loader from "./Loader";
import NotFound from "../pages/NotFound";

const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Main = lazy(() => import("../pages/Main"));
const Details = lazy(() => import("../pages/Details"));
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));

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

        <Route
          path="cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFound />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
