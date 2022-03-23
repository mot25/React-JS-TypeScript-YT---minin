import React, { FC, MouseEvent } from "react";
import cn from "classnames";
import { INewTodo } from "../pages/TodoPage";
import { todosApi } from "../store/rtkQuery/fetchTodos";

const TodoList: FC = () => {
  const { data, isLoading, error } = todosApi.useFetchUsersQuery("");
  const [toggleHendler, {}] = todosApi.useToggleHendlerMutation();
  const [deleteHendler, {}] = todosApi.useDeleteHendlerMutation();
  console.log(data);

  const handleDelete = (event: MouseEvent, id: number) => {
    event.preventDefault();
    deleteHendler(id);
  };

  const toggleCompleted = (todo: INewTodo) => {
    toggleHendler({ ...todo, completed: !todo.completed });
  };

  return (
    <ul>
      {data &&
        data.map(todo => {
          return (
            <li
              key={todo.id}
              className={cn("todo", {
                completed: todo.completed
              })}
            >
              <label>
                <input
                  type="checkbox"
                  onChange={() => toggleCompleted(todo)}
                  checked={todo.completed}
                />
                <span>
                  {todo.title}
                </span>
                <i
                  onClick={e => handleDelete(e, todo.id)}
                  className="material-icons red-text"
                >
                  delete
                </i>
              </label>
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
