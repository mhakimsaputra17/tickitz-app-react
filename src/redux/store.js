import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localstorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localstorage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
