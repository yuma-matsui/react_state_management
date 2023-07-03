import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useTodosDispatchContext } from "src/hooks";

const Add: NextPage = () => {
  const { addTodo } = useTodosDispatchContext()
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    addTodo(e.currentTarget.text.value);
    e.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
}

export default Add;
