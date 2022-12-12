import React, { useContext } from "react";
import Todolist from "./Todolist";
import clasess from "./Todos.module.css";
import { TodoContex } from "../store/toto-contex";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContex);

  return (
    <ul className={clasess.todos}>
      {todoCtx.items.map((item) => (
        <Todolist
          key={item.id}
          text={item.text}
          remove={todoCtx.removeTodo.bind(null, item.id)}
        ></Todolist>
      ))}
    </ul>
  );
};

export default Todos;
