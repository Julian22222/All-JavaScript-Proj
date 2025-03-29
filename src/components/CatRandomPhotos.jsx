import React from "react";
import { useState } from "react";

function CatRandomPhotos() {
  const [image, setImage] = useState(null);

  const hadleClick = () => {
    fetcHandler();
    // setImage();
    // console.log(data);
  };

  async function fetcHandler() {
    try {
      // async request to the server
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      //  data -> parsing response
      const data = await response.json();

      setImage(data[0].url);

      console.log(data[0]);
    } catch (err) {
      console.log(err);
    }
    // return data;
  }

  //   fetcHandler();

  return (
    <div class="cat-container">
      <h2>Colourful cats</h2>
      {image !== null ? (
        <div className="cat-img-cont">
          <div class="cat-card">
            <img
              src={image}
              alt="Cat"
              className="cat-img"
              // width={600}
            ></img>
          </div>
        </div>
      ) : null}

      <button onClick={hadleClick} class="cat-btn" type="button">
        Random Cat
      </button>
    </div>
  );
}

export default CatRandomPhotos;
