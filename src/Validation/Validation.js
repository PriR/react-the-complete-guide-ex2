import React from "react";

export const Validation = ({ length }) => (
  <p>{length <= 5 ? "Text too short" : "Text long enough"}</p>
);
