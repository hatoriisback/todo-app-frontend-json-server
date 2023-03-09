import React from "react";
import { NavLink } from "react-router-dom";

// Sections
import Heading from "../sections/Heading";

// Todo Sections
import AppForm from "../todoSections/AppForm";
import AppTable from "../todoSections/AppTable";

export default function Todo() {
  return (
    <div className="wrapper wrapper-todoapp">
      <Heading title="Todo App" name="Hendy" desc="Let's make something!" />
      <div className="todoapp">
        <h1>Todo App</h1>
        <hr style={{ backgroundColor: "orange" }} />
        <AppForm />
        <AppTable />
      </div>
      <br />
      <NavLink className="btn-back" to="/">
        Back
      </NavLink>
    </div>
  );
}
