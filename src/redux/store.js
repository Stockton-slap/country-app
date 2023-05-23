import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./slices/authSlice";
import { countryReducer } from "./slices/countrySlice";
import { filterReducer } from "./slices/filterSlice";
import { cartReducer } from "./slices/cartSlice";

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistCartConfig = {
  key: "cart",
  storage,
  whitelist: ["item", "countries"],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
  countries: countryReducer,
  filter: filterReducer,
  cart: persistReducer(persistCartConfig, cartReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
