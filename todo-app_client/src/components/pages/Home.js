import React from "react";

// Sections
import Heading from "../sections/Heading";

export default function Home() {
  return (
    <div className="wrapper wrapper-home">
      <Heading title="Home" name="Hendy" desc="Let's make something!" />
      <div className="home">
        <h1>Home</h1>
      </div>
    </div>
  );
}
