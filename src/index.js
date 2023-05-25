import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App";
import { GlobalStyle } from "./utils/GlobalStyles";

import store, { persistor } from "./redux/store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
          <ToastContainer position="top-center" theme="colored" />
        </Provider>
        <GlobalStyle />
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
