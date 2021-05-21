import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
function AddingForm() {
  const [todoItem, setTodoItem] = useState({
    task: "",
    time: "",
    importance: "",
    duration: 0,
    itemPhoto: {},
  });
  const addNewTodo = (event) => {
    event.preventDefault();
    console.log(todoItem);
    const newTodoItem = new FormData();
    newTodoItem.append("task", todoItem.task);
    newTodoItem.append("time", todoItem.time);
    newTodoItem.append("importance", todoItem.importance);
    newTodoItem.append("duration", todoItem.duration);
    newTodoItem.append("itemPhoto", todoItem.itemPhoto);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8080/add", newTodoItem, config)
      .then((response) => console.log(response.data));
  };
  return (
    <Form className="addingForm" onSubmit={addNewTodo}>
      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          name="task"
          placeholder="Enter a new todo"
          onChange={(e) => {
            setTodoItem({ ...todoItem, task: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label>When it has to be done?</Form.Label>
        <Form.Control
          type="text"
          name="time"
          placeholder="24th, tomorrow etc. . ."
          onChange={(e) => {
            setTodoItem({ ...todoItem, time: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group controlId="formGridState" className="mt-2">
        <Form.Label>Importance</Form.Label>
        <Form.Control
          as="select"
          name="importance"
          defaultValue="Important"
          onChange={(e) => {
            setTodoItem({ ...todoItem, importance: e.target.value });
          }}
        >
          <option>Not Important</option>
          <option>Important</option>
          <option>Very Important</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Label>How long it takes? (Hour)</Form.Label>
        <Form.Control
          type="number"
          name="duration"
          placeholder=".. Hour/s"
          onChange={(e) => {
            setTodoItem({ ...todoItem, duration: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.File
          id="exampleFormControlFile1"
          label="Related Picture"
          name="itemPhoto"
          onChange={(e) => {
            setTodoItem({ ...todoItem, itemPhoto: e.target.files[0] });
          }}
        />
      </Form.Group>
      <Button className="mt-2" variant="primary" type="submit">
        Add The Task
      </Button>
    </Form>
  );
}

export default AddingForm;
