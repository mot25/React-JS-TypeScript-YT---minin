"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TodoList_1 = require("../components/TodoList");
var fetchTodos_1 = require("../store/rtkQuery/fetchTodos");
function TodoPage() {
    var _a = fetchTodos_1.todosApi.useFetchUsersQuery(""), data = _a.data, isLoading = _a.isLoading, error = _a.error;
    // const addHadler = (title: string) => {
    //   const newTodo: INewTodo = {
    //     title,
    //     id: Date.now(),
    //     completed: false
    //   };
    //   setTodos(prev => [newTodo, ...prev]);
    // };
    // const toggleHendler = (id: number) => {
    //   setTodos(prev =>
    //     prev.map(todo => {
    //       if (todo.id === id) {
    //         todo.completed = !todo.completed;
    //       }
    //       return todo;
    //     })
    //   );
    // };
    // const deleteHendler = (id: number) => {
    //   const confirmDelete = confirm("You sure delete task");
    //   if (confirmDelete) {
    //     setTodos(prev => prev.filter(todo => todo.id !== id));
    //   }
    // };
    return (react_1["default"].createElement("div", null, !isLoading
        ? react_1["default"].createElement(TodoList_1["default"]
        // toggleHendler={toggleHendler}
        // deleteHendler={deleteHendler}
        , null)
        : react_1["default"].createElement("h1", null, "todos empty")));
}
exports["default"] = TodoPage;
