import React, { useState } from "react";
import "./App.css";
import { ValidationComponent } from "./ValidationComponent/ValidationComponent";
import { CharComponent } from "./CharComponent/CharComponent";

function App() {
  const [myText, setMyText] = useState("");

  const onChangeHandler = (event) => {
    console.log(event.target.value);
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
      <ValidationComponent length={myText.length} />

      {myText.split("").map((char, index) => (
        <CharComponent
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
