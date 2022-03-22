"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var TodoForm_1 = require("../components/TodoForm");
var TodoList_1 = require("../components/TodoList");
function TodoPage() {
    var _a = react_1.useState([]), todos = _a[0], setTodos = _a[1];
    react_1.useEffect(function () {
        setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
    }, []);
    react_1.useEffect(function () {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    var addHadler = function (title) {
        var newTodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        setTodos(function (prev) { return __spreadArrays([newTodo], prev); });
    };
    var toggleHendler = function (id) {
        setTodos(function (prev) {
            return prev.map(function (todo) {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        });
    };
    var deleteHendler = function (id) {
        var confirmDelete = confirm("You sure delete task");
        if (confirmDelete) {
            setTodos(function (prev) { return prev.filter(function (todo) { return todo.id !== id; }); });
        }
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(TodoForm_1["default"], { addHadler: addHadler }),
        todos.length > 0
            ? react_1["default"].createElement(TodoList_1["default"], { toggleHendler: toggleHendler, deleteHendler: deleteHendler, todos: todos })
            : react_1["default"].createElement("h1", null, "todos empty")));
}
exports["default"] = TodoPage;
