import "./App.css";
import Button from "./Button";
import { React, useState } from "react";

function App() {
  const colors = [
    "White",
    "Red",
    "Green",
    "Blue",
    "Brown",
    "Yellow",
    "Deeppink",
  ];

  const [bgColor, setBgColor] = useState("red");

  return (
    <div className="main" style={{ backgroundColor: bgColor }}>
      <h1>Welcome to Bg - Changer by Aman</h1>
      <div className="buttons-group">
        {colors.map((item, index) => {
          return <Button item={item} key={index} setBgColor={setBgColor} />;
        })}
      </div>
    </div>
  );
}

export default App;
