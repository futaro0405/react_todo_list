import { useState } from 'react';

import { InputTodo } from './components/InputTodo';
import { CountTodo } from './components/CountTodo';
import { ListTodo } from './components/ListTodo';

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <InputTodo
        text={text}
        setText={setText}
        todos={todos}
        setTodos={setTodos}
      />
      <CountTodo todos={todos} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
};
