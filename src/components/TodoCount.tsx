export const TodoCount = () => {
  return (
    <>
      <h2>Task Count</h2>

      <p>すべて {countAll}</p>
      <p>未完了 {countIncompleted}</p>
      <p>完了済み {countCompleted}</p>

      <ul></ul>
    </>
  );
};
