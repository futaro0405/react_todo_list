import { useState } from 'react';

export const useTodo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    const newTodo = {
      value: text,
      id: new Date().getTime(),
      completed: false,
      editable: true
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setText('');
  };

  const handleEdit = (id, value) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, value };
        }
        return todo;
      });

      return newTodos;
    });
  };

  const handleDeleted = (index) => {
    const result = window.confirm('本当に削除してもよろしいですか？');

    if (result) {
      setTodos((todos) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        return newTodos;
      });
    }
  };

  const handleCheck = (id, completed) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });

      return newTodos;
    });
  };

  const handleTodoText = (id, editable) => {
    setTodos((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, editable };
        }
        return todo;
      });

      return newTodos;
    });
  };

  return [
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
  ];
};
