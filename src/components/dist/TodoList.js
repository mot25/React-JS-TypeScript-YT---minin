"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var fetchTodos_1 = require("../store/rtkQuery/fetchTodos");
var TodoList = function () {
    var _a = fetchTodos_1.todosApi.useFetchUsersQuery(""), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    console.log(data);
    var handleDelete = function (event, id) {
        event.preventDefault();
        // deleteHendler(id);
    };
    return (react_1["default"].createElement("ul", null, data &&
        data.map(function (todo) {
            return (react_1["default"].createElement("li", { key: todo.id, className: classnames_1["default"]("todo", {
                    completed: todo.completed
                }) },
                react_1["default"].createElement("label", null,
                    react_1["default"].createElement("input", { type: "checkbox", 
                        // onChange={toggleHendler.bind(null, todo.id)}
                        checked: todo.completed }),
                    react_1["default"].createElement("span", null, todo.title),
                    react_1["default"].createElement("i", { onClick: function (e) { return handleDelete(e, todo.id); }, className: "material-icons red-text" }, "delete"))));
        })));
};
exports["default"] = TodoList;
