"use strict";
var _a;
exports.__esModule = true;
exports.setupStore = exports.rootReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var redux_1 = require("redux");
var reducerSlice_1 = require("./reducer/reducerSlice");
var fetchTodos_1 = require("./rtkQuery/fetchTodos");
exports.rootReducer = redux_1.combineReducers((_a = {
        first: reducerSlice_1["default"]
    },
    _a[fetchTodos_1.todosApi.reducerPath] = fetchTodos_1.todosApi.reducer,
    _a));
exports.setupStore = function () {
    return toolkit_1.configureStore({
        reducer: exports.rootReducer,
        middleware: function (getDefaultMiddleware) {
            return getDefaultMiddleware().concat(fetchTodos_1.todosApi.middleware);
        }
    });
};
