import { InputTodo } from './components/InputTodo';
import { CountTodo } from './components/CountTodo';
import { ListTodo } from './components/ListTodo';

import { useTodo } from './hooks/useTodo';

export const App = () => {
  const [
    text,
    todos,
    {
      handleChange,
      handleSubmit,
      handleEdit,
      handleDeleted,
      handleCheck,
      handleTodoText
    }
  ] = useTodo();

  return (
    <div className="App">
      <InputTodo
        text={text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <CountTodo todos={todos} />
      <ListTodo
        handleEdit={handleEdit}
        handleDeleted={handleDeleted}
        handleCheck={handleCheck}
        handleTodoText={handleTodoText}
        todos={todos}
      />
    </div>
  );
};
