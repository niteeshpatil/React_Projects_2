import React, { useState } from "react";
import Todo from "../models/todo";

type todoContexttype = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContex = React.createContext<todoContexttype>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const TodoContextPeovider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todo, settodo] = useState<Todo[]>([]);

  const addtodoHadler = (todotext: string) => {
    const newtodo = new Todo(todotext);
    settodo((prestate) => {
      return prestate.concat(newtodo);
    });
  };

  const removehadler = (id: string) => {
    settodo((prestate) => {
      return prestate.filter((todo) => todo.id !== id);
    });
  };

  const contextValues: todoContexttype = {
    items: todo,
    addTodo: addtodoHadler,
    removeTodo: removehadler,
  };

  return (
    <TodoContex.Provider value={contextValues}>
      {props.children}
    </TodoContex.Provider>
  );
};

export default TodoContextPeovider;
