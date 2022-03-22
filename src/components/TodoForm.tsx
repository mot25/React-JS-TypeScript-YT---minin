import React, {  FC, KeyboardEvent, useRef } from "react";

interface ITodoFormProps {
  addHadler: (title: string) => void;
}

const TodoForm: FC<ITodoFormProps> = ({ addHadler }) => {
  const ref = useRef<HTMLInputElement>(null);


  const keyPressHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addHadler(ref.current!.value);
      ref.current!.value = ''
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
