import React, { FC, MouseEvent } from "react";
import cn from "classnames";
import { INewTodo } from "../pages/TodoPage";

interface ITodoListProps {
  todos: INewTodo[];
  toggleHendler: (id: number) => void;
  deleteHendler: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = ({
  todos,
  toggleHendler,
  deleteHendler
}) => {
  const handleDelete = (event: MouseEvent, id: number) => {
    event.preventDefault();
    deleteHendler(id);
  };

  return (
    <ul>
      {todos.map(todo => {
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
                onChange={toggleHendler.bind(null, todo.id)}
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
