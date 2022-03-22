"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TodoForm = function (_a) {
    var addHadler = _a.addHadler;
    var ref = react_1.useRef(null);
    var keyPressHandler = function (e) {
        if (e.key === "Enter") {
            addHadler(ref.current.value);
            ref.current.value = '';
        }
    };
    return (react_1["default"].createElement("div", { className: "input-field" },
        react_1["default"].createElement("input", { ref: ref, type: "text", className: "title", id: "title", placeholder: "input name todo", onKeyPress: keyPressHandler }),
        react_1["default"].createElement("label", { htmlFor: "title", className: "active" }, "input name todo")));
};
exports["default"] = TodoForm;
