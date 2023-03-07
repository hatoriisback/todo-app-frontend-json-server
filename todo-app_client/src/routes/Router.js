import React from "react";
import { Route, Routes } from "react-router-dom";

// Components Pages
import Dashboard from "../components/";
import Home from "../components/pages/Home";
import Todo from "../components/pages/Todo";
import About from "../components/pages/About";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/todo-app" element={<Todo />} />
      <Route path="/about-me" element={<About />} />
    </Routes>
  );
}
