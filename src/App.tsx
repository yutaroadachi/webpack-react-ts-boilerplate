import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Counter } from "./Counter";

export const App = () => (
  <div style={{ textAlign: "center" }}>
    <h1>React + TS + webpackボイラープレート</h1>
    <HelloWorld last_name="NAMONAI" first_name="P" />
    <Counter />
  </div>
);
