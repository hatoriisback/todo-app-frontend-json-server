import React, { useEffect, useState } from "react";

// Dependencies
import axios from "axios";

export default function AppTable(props) {
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

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="app-TableTask">
      <h2>Todo List</h2>
      <table className="app-table" style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th className="col-3">ID</th>
            <th className="col-5">Task</th>
            <th className="col-5">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping Todo */}
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <th className="col-2">{todo.id}</th>
                <td className="col-5">{todo.task}</td>
                <td className="col-5">{todo.status ? "Done" : "In Progress"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
