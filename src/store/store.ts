import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  reducerSlice  from "./reducer/reducerSlice";

export const rootReducer = combineReducers({
  first: reducerSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
