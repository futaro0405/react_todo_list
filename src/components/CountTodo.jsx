import React from 'react';
import { css } from '@emotion/react';

const wrapper = css`
  display: flex;
  flex-direction: row;
  gap: 24px;
  background-color: #9ad0c2;
  color: #fff;
  font-weight: bold;
  padding: 16px 8px;
  border-radius: 60px;
  margin-bottom: 32px;
  justify-content: center;
`;

export const CountTodo = ({ todos }) => {
  return (
    <div css={wrapper}>
      <p>全て: {todos.length}</p>
      <p>Completed: {todos.filter((todo) => todo.completed).length}</p>
      <p>Incompleted: {todos.filter((todo) => !todo.completed).length}</p>
    </div>
  );
};
