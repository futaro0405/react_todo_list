import React from 'react';
import { css } from '@emotion/react';

const list = css`
  list-style: none;
  margin: 0 0 32px 0;
  padding: 32px;
  background-color: #ecf4d6;
  border-radius: 20px;
`;

const item = css`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 8px;
`;
const text = css`
  padding: 8px 4px;
  font-size: 1.2rem;
  border-radius: 6px;
  border: none;
  background-color: #fff;
  flex: 1 0 auto;
  &:disabled {
    background-color: #ecf4d6;
  }
`;
const button = css`
  padding: 8px 24px;
  font-size: 1.2rem;
  border-radius: 100px;
  border: none;
  background-color: #2d9596;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #265073;
  }
`;

export const ListTodo = ({ todos, setTodos }) => {
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

  return (
    <>
      <ul css={list}>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id} css={item}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCheck(todo.id, !todo.completed)}
              />
              <input
                css={text}
                type="text"
                disabled={todo.editable}
                value={todo.value}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
              />
              <button
                css={button}
                onClick={() => handleTodoText(todo.id, !todo.editable)}
              >
                {todo.editable ? '編集' : '保存'}
              </button>
              <button css={button} onClick={() => handleDeleted(index)}>
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
