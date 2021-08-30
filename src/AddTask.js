import React, { useState } from "react";
import { Button, Input, Card } from "antd";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");

  const Addtask = () => {
    dispatch({ type: "ADD_TODO", payload: task });
  };
  return (
    <Card>
      <div>
        <h1>Add Task</h1>
        <div className="add_todo">
          <Input
            required={true}
            value={task}
            placeholder="Add Todo"
            onChange={(e) => setTask(e.target.value)}
          />
          <Button type="primary" htmlType="submit" onClick={Addtask}>
            Add Task
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AddTask;

{
  /* <Row>
        <Col md={16} lg={16} xl={16} sm={24}>
          <Input required={true} />
        </Col>
        <Col md={4} lg={4} xl={4} sm={10}>
          <Button type="primary" htmlType="submit">
            Add Task
          </Button>
        </Col>
      </Row> */
}
