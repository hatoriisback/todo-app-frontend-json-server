import React from "react";
import { NavLink } from "react-router-dom";

// Sections
import Heading from "../sections/Heading";

export default function Todo() {
  return (
    <div className="wrapper wrapper-todoapp">
      <Heading title="Todo App" name="Hendy" desc="Let's make something!" />
      <div className="todoapp">
        <h1>Todo App</h1>
      </div>
      <NavLink className="btn-back" to="/">
        Back
      </NavLink>
    </div>
  );
}
