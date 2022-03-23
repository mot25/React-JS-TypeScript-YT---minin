"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var fetchTodos_1 = require("../store/rtkQuery/fetchTodos");
var TodoList = function () {
    var _a = fetchTodos_1.todosApi.useFetchUsersQuery(""), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    var _b = fetchTodos_1.todosApi.useToggleHendlerMutation(), toggleHendler = _b[0], _c = _b[1];
    var _d = fetchTodos_1.todosApi.useDeleteHendlerMutation(), deleteHendler = _d[0], _e = _d[1];
    console.log(data);
    var handleDelete = function (event, id) {
        event.preventDefault();
        deleteHendler(id);
    };
    var toggleCompleted = function (todo) {
        toggleHendler(__assign(__assign({}, todo), { completed: !todo.completed }));
    };
    return (react_1["default"].createElement("ul", null, data &&
        data.map(function (todo) {
            return (react_1["default"].createElement("li", { key: todo.id, className: classnames_1["default"]("todo", {
                    completed: todo.completed
                }) },
                react_1["default"].createElement("label", null,
                    react_1["default"].createElement("input", { type: "checkbox", onChange: function () { return toggleCompleted(todo); }, checked: todo.completed }),
                    react_1["default"].createElement("span", null, todo.title),
                    react_1["default"].createElement("i", { onClick: function (e) { return handleDelete(e, todo.id); }, className: "material-icons red-text" }, "delete"))));
        })));
};
exports["default"] = TodoList;
