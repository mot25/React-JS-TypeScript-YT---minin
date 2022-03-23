import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import  reducerSlice  from "./reducer/reducerSlice";
import { todosApi } from "./rtkQuery/fetchTodos";

export const rootReducer = combineReducers({
  first: reducerSlice,
  [todosApi.reducerPath]: todosApi.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(todosApi.middleware)
    }
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
