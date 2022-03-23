"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Navbar_1 = require("./components/Navbar");
var AboutPage_1 = require("./pages/AboutPage");
var TodoPage_1 = require("./pages/TodoPage");
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Navbar_1["default"], null),
        React.createElement("div", { className: "container" },
            React.createElement(react_router_dom_1.Routes, null,
                React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(TodoPage_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/todos', element: React.createElement(TodoPage_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '/about', element: React.createElement(AboutPage_1["default"], null) }),
                React.createElement(react_router_dom_1.Route, { path: '*', element: React.createElement(TodoPage_1["default"], null) })))));
}
exports["default"] = App;
