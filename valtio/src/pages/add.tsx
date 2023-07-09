import type { NextPage } from "next";
import { ComponentProps } from "react";
import { addTodo } from "src/state/todos";

const Add: NextPage = () => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    addTodo(text);
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
};

export default Add;
