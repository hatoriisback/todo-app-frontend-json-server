import React from "react";
import { NavLink } from "react-router-dom";

// Sections
import Heading from "../sections/Heading";

export default function About() {
  return (
    <div className="wrapper wrapper-about">
      <Heading title="About Me" name="Hendy" desc="Let's make something!" />
      <div className="aboutme">
        <h1>About Me</h1>
        <hr style={{ backgroundColor: "orange" }} />
      </div>
      <br />
      <NavLink className="btn-back" to="/">
        Back
      </NavLink>
    </div>
  );
}
