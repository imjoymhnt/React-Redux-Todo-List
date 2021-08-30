import React, { useState } from "react";
import { Card, Button, Input } from "antd";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const [show, setShow] = useState("none");
  const [newText, setNewText] = useState("");
  const dispatch = useDispatch();

  const handleDelete = (todo) => {
    dispatch({ type: "DELETE_TODO", payload: todo });
  };

  const finalEdit = () => {
    setShow("block");
  };

  const editTask = (todo) => {
    dispatch({
      type: "EDIT_TODO",
      payload: { oldTodo: todo, newTodo: newText },
    });
    setShow("none");
  };

  return (
    <div className="TodoItem">
      <h1 style={{ padding: "0 2rem" }}>{todo}</h1>
      <Button type="primary" style={{ margin: "0 1rem" }} onClick={finalEdit}>
        Edit
      </Button>
      <Button type="primary" danger onClick={() => handleDelete(todo)}>
        Delete
      </Button>
      <Input
        placeholder="Edit"
        style={{ display: show }}
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <Button
        type="primary"
        style={{ display: show }}
        onClick={() => editTask(todo)}
      >
        Edit
      </Button>
    </div>
  );
};

export default TodoItem;
