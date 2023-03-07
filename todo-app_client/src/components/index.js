import React from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="home-wrapper">
      <NavLink to="/home">
        <h1>Home</h1>
      </NavLink>
      <NavLink to="/about-me">
        <h1>About Me</h1>
      </NavLink>
      <NavLink to="/todo-app">
        <h1>Todo App</h1>
      </NavLink>
    </div>
  );
}
