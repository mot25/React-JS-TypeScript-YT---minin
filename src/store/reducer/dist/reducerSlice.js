"use strict";
exports.__esModule = true;
exports.reducerSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {};
exports.reducerSlice = toolkit_1.createSlice({
    name: "reducer",
    initialState: initialState,
    reducers: {}
});
exports["default"] = exports.reducerSlice.reducer;
