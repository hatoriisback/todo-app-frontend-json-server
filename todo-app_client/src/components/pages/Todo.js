import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Dependencies
import axios from "axios";

// Sections
import Heading from "../sections/Heading";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  function getTodos() {
    axios({
      method: "GET",
      url: "http://localhost:3000/todoList",
    })
      .then((result) => {
        setTodos(() => {
          return result.data;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="wrapper wrapper-todoapp">
      <Heading title="Todo App" name="Hendy" desc="Let's make something!" />
      <div className="todoapp">
        <h1>Todo App</h1>
        <hr style={{ backgroundColor: "orange" }} />
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="input-group-text" id="inputGroup-sizing-default">
              Add Task
            </button>
          </div>
          <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>

        <div className="row">
          <div className="col-12">
            <button onClick={() => getTodos()}>Fetch Data</button>
          </div>
          <br />
          <br />
        </div>

        <div className="wrapper-task">
          <h2>Todo List</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping Todo */}
              {todos.map((todo) => {
                return (
                  <>
                    <tr style={{ textAlign: "left" }}>
                      <th key={todo.id} scope="row">
                        {todo.id}
                      </th>
                      <td>{todo.task}</td>
                      <td>{JSON.stringify(todo.status)}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <NavLink className="btn-back" to="/">
        Back
      </NavLink>
    </div>
  );
}
