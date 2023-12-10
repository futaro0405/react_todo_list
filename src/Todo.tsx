import { useState } from "react";

import { TodoCreate } from "./components/TodoCreate";
import { TodoCount } from "./components/TodoCount";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos: string[] = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  return (
    <>
      <h1>TODO LIST</h1>
      <TodoCreate
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <TodoCount />
    </>
  );
};
