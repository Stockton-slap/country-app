import { useEffect, useState, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import getCurrentUser from "../redux/operations/getCurrentUser";

import SharedLayout from "./SharedLayout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Register = lazy(() => import("../pages/Register"));
const Login = lazy(() => import("../pages/Login"));
const Main = lazy(() => import("../pages/Main"));
const Details = lazy(() => import("../pages/Details"));
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const NotFound = lazy(() => import("../pages/NotFound"));

function App() {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUser()).then(() => setIsReady(true));
  }, [dispatch]);

  if (!isReady) {
    return;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute restricted>
            <Home />
          </PublicRoute>
        }
      />

      <Route path="/" element={<SharedLayout />}>
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
