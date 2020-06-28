import React from "react";

export const CharComponent = ({ char, onClickCharHandler, index }) => (
  <p
    style={{
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
    }}
    onClick={() => onClickCharHandler(index)}
  >
    {char}
  </p>
);
