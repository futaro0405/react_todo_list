import React from 'react';
import { css } from '@emotion/react';

const form = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  background-color: #9ad0c2;
  padding: 24px 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
const InputText = css`
  padding: 8px 4px;
  font-size: 1.2rem;
  border-radius: 6px;
  border: none;
  background-color: #fff;
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

export const InputTodo = ({ text, handleChange, handleSubmit }) => {
  return (
    <form css={form} onSubmit={(e) => handleSubmit(e)}>
      <input
        css={InputText}
        type="text"
        value={text}
        onChange={(e) => handleChange(e)}
      />
      <input css={button} type="submit" value="追加" />
    </form>
  );
};
