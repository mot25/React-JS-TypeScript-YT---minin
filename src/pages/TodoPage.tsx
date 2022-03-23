import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { todosApi } from "../store/rtkQuery/fetchTodos";

declare var confirm: (placeholder: string) => boolean;

export interface INewTodo {
  title: string;
  id: number;
  completed: boolean;
}

function TodoPage() {
  const { data, isLoading, error } = todosApi.useFetchUsersQuery("");

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

  return (
    <div>
      {/* <TodoForm addHadler={addHadler} /> */}

      {!isLoading
        ? <TodoList
          // toggleHendler={toggleHendler}
          // deleteHendler={deleteHendler}
          />
        : <h1>todos empty</h1>}
    </div>
  );
}

export default TodoPage;
