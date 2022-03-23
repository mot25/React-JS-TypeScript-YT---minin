"use strict";
exports.__esModule = true;
exports.todosApi = void 0;
var react_1 = require("@reduxjs/toolkit/dist/query/react");
exports.todosApi = react_1.createApi({
    reducerPath: "todosApi",
    baseQuery: react_1.fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    tagTypes: ["todos"],
    endpoints: function (build) { return ({
        fetchUsers: build.query({
            query: function () { return ({
                url: "/todos"
            }); },
            providesTags: function (result) { return ["todos"]; }
        })
    }); }
});
