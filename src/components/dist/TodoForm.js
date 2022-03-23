"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fetchTodos_1 = require("../store/rtkQuery/fetchTodos");
var TodoForm = function () {
    var _a = fetchTodos_1.todosApi.useAddHadlerMutation(), addHadler = _a[0], _b = _a[1];
    var ref = react_1.useRef(null);
    var keyPressHandler = function (e) {
        if (e.key === "Enter") {
            var newTodo = {
                id: Date.now(),
                title: ref.current.value,
                completed: false
            };
            addHadler(newTodo);
            ref.current.value = "";
        }
    };
    return (react_1["default"].createElement("div", { className: "input-field" },
        react_1["default"].createElement("input", { ref: ref, type: "text", className: "title", id: "title", placeholder: "input name todo", onKeyPress: keyPressHandler }),
        react_1["default"].createElement("label", { htmlFor: "title", className: "active" }, "input name todo")));
};
exports["default"] = TodoForm;
