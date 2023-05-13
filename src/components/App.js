import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
