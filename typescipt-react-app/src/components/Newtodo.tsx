import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContex } from "../store/toto-contex";
const Newtodo: React.FC = () => {
  const todoCtx = useContext(TodoContex);
  let inputtext = useRef<HTMLInputElement>(null);

  const submitHadler = (event: React.FormEvent) => {
    event.preventDefault();

    const enterdtext = inputtext.current!.value;

    if (enterdtext.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enterdtext);
  };

  return (
    <form onSubmit={submitHadler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputtext}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default Newtodo;
