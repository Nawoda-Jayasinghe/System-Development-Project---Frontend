import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import { combineReducers } from "@reduxjs/toolkit"; 
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const reducer = combineReducers({
    auth: authSlice.reducer
});

const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
  reducer: persistedReducer
});

export default store;
