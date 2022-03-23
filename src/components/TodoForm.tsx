import React, { FC, KeyboardEvent, useRef } from "react";
import { todosApi } from "../store/rtkQuery/fetchTodos";

const TodoForm: FC = () => {
  const [addHadler, {}] = todosApi.useAddHadlerMutation();
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      let newTodo = {
        id: Date.now(),
        title: ref.current!.value,
        completed: false
      };
      addHadler(newTodo);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field">
      <input
        ref={ref}
        type="text"
        className="title"
        id="title"
        placeholder="input name todo"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        input name todo
      </label>
    </div>
  );
};

export default TodoForm;
