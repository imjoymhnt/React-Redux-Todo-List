import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todolist = () => {
  const todoList = useSelector((store) => store);

  const todoItems = todoList.todoList.map((todo) => (
    <TodoItem key={todo} todo={todo} />
  ));

  return <div>{todoItems}</div>;
};

export default Todolist;
