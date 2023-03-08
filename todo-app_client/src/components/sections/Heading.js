import React from "react";

export default function Heading(props) {
  const { title, name, desc } = props;
  return (
    <div>
      <h3>{`Here is ${title} Page! I'm ${name}. ${desc} `}</h3>
    </div>
  );
}
