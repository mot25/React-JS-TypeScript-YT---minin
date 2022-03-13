import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

declare var confirm: (placeholder: string) => boolean;

export interface INewTodo {
  title: string;
  id: number;
  completed: boolean;
}

function TodoPage() {
  const [todos, setTodos] = useState<INewTodo[]>([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") || "[]") as INewTodo[]);
  }, []);
  useEffect(
    () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  const addHadler = (title: string) => {
    const newTodo: INewTodo = {
      title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleHendler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteHendler = (id: number) => {
    const confirmDelete = confirm("You sure delete task");
    if (confirmDelete) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return (
    <div>
      <TodoForm addHadler={addHadler} />

      {todos.length > 0
        ? <TodoList
            toggleHendler={toggleHendler}
            deleteHendler={deleteHendler}
            todos={todos}
          />
        : <h1>todos empty</h1>}
    </div>
  );
}

export default TodoPage;
