import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const taskObj = useSelector((store) => store);

  return (
    <div>
      <h1>Redux TodoList - Total Task Remained: {taskObj.todoList.length} </h1>
    </div>
  );
};

export default Navbar;
