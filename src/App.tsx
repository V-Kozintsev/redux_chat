// src/App.tsx
import React from "react";
import "./main.css";
import { Form } from "./components/Form";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(11);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Hello React!</h1>
        <p>count:{count}</p>
        <Form />
        <button onClick={handleClick}>clik1 btn</button>
      </div>
    </div>
  );
}
