import React from "react";
import { useState } from "react";
import CatRandomPhotos from "./CatRandomPhotos";

function Cat() {
  const [colourName, setColourName] = useState("#fff222");

  const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const handleClick = () => {
    let hexColor = generateHex();
    // access body backgroundColor
    document.body.style.backgroundColor = hexColor;

    setColourName(hexColor);
  };

  function generateHex() {
    // return random code conating # + random hex elements(6 times)
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }
    return hexColor;
  }

  function getRandomNumber() {
    // gives a random number from 0 - 15
    return Math.floor(Math.random() * hex.length);
  }

  return (
    <div className="color-block">
      <header>
        <CatRandomPhotos />
        <div class="cat-container">
          <h2>
            Background color:
            <span class="color">{colourName}</span>
          </h2>
          <button id="btn" class="cat-btn" onClick={handleClick}>
            Change colour
          </button>
        </div>
      </header>
    </div>
  );
}

export default Cat;
