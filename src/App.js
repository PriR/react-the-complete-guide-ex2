import React, { useState } from "react";
import "./App.css";
import { Validation } from "./Validation/Validation";
import { Char } from "./Char/Char";

function App() {
  const [myText, setMyText] = useState("");

  const onChangeHandler = (event) => {
    setMyText(event.target.value);
  };

  const onClickCharHandler = (index) => {
    const myNewText = [...myText];
    myNewText.splice(index, 1);
    setMyText(myNewText.join(""));
  };

  return (
    <div className="App">
      <input
        type="text"
        value={myText}
        onChange={(event) => onChangeHandler(event)}
      />
      <p>{myText.length}</p>
      <Validation length={myText.length} />

      {myText.split("").map((char, index) => (
        <Char
          key={index}
          char={char}
          onClickCharHandler={() => onClickCharHandler(index)}
          index={index}
        />
      ))}
    </div>
  );
}

export default App;
