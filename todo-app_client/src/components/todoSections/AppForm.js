import React, { useState } from "react";

// Dependencies
import axios from "axios";

export default function AppForm() {
  const [task, setTask] = useState("");

  const submitHandler = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/todoList",
      data: {
        task,
        status: false,
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app-FormTask">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button onClick={() => submitHandler()} className="input-group-text" id="inputGroup-sizing-default">
            Add Task
          </button>
        </div>

        <input onChange={(e) => setTask(e.target.value)} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
      </div>

      {/* Button Fetch Manual */}
      {/* <div className="row">
        <div className="col-12">
          <button>Fetch Data</button>
        </div>
      </div> */}
    </div>
  );
}
