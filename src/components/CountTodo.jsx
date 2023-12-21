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
  const allCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const notCompletedCount = allCount - completedCount;
  return (
    <div css={wrapper}>
      <p>全て: {allCount}</p>
      <p>Completed: {completedCount}</p>
      <p>Incompleted: {notCompletedCount}</p>
    </div>
  );
};
