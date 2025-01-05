import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  PAUSE,
  REHYDRATE,
  REGISTER,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "../redux/contacts/slice";
import filtersReducer from "../redux/filters/slice";
import { authReducer } from "./auth/slice";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
