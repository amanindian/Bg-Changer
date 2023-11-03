import React from "react";

export default function Button({ item, setBgColor }) {
  return (
    <div
      className="single-button"
      style={{ backgroundColor: item }}
      onClick={() => {
        setBgColor(item);
      }}
    >
      {item}
    </div>
  );
}