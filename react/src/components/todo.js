import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import todoAtom from "../recoil/todo";

let id = 0;
function getId() {
  return id++;
}

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoAtom);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default Todo;
