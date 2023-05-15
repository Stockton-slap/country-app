import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "../pages/Main";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Routes>
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
      </Route>
    </Routes>
  );
}

export default App;
