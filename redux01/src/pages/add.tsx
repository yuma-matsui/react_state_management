import type { NextPage } from "next";
import { ComponentProps } from "react";
import { useDispatch } from "react-redux";
import addTodo from "src/actions/addTodo";

const Add: NextPage = () => {
  const dispatch = useDispatch()
  const handleSubmit: ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    const text = e.currentTarget.text.value;
    dispatch(addTodo.action(text))
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
