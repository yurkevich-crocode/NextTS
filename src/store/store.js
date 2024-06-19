import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducik from "@/features/cartSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  cart: cartReducik,
});

const persistConfig = {
  key: "redux_app",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
