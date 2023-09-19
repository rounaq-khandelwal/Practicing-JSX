import React from "react";
import ReactDOM from "react-dom";
const year = new Date().getFullYear();
const name = "Rounaq";
ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
