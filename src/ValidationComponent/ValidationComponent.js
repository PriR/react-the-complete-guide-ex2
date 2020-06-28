import React from "react";

export const ValidationComponent = ({ length }) => (
  <p>{length <= 5 ? "Text too short" : "Text long enough"}</p>
);
