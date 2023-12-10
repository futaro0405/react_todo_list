import React from "react";

type Props = {
  todoText: string;
  onChange: () => void;
  onClick: () => void;
};

export const TodoCreate: VFC<Props> = (props) => {
  const { todoText, onChange, onClick } = props;

  return (
    <>
      <form action="">
        <input type="text" placeholder="TASK" />
        <button>SAVE</button>
      </form>
    </>
  );
};
