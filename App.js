import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("h1", {id:"heading"}, "Hello World from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);