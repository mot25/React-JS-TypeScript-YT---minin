"use strict";
exports.__esModule = true;
exports.setupStore = exports.rootReducer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var redux_1 = require("redux");
var reducerSlice_1 = require("./reducer/reducerSlice");
exports.rootReducer = redux_1.combineReducers({
    first: reducerSlice_1["default"]
});
exports.setupStore = function () {
    return toolkit_1.configureStore({
        reducer: exports.rootReducer
    });
};
