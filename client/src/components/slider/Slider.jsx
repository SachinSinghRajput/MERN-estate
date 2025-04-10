import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imgIndex, setImgIndex] = useState(null);

  function handleSlider(val) {
    if (val === "left" && imgIndex != 0) {
      setImgIndex((prev) => prev - 1);
    } else if (val === "right" && imgIndex != images.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else {
      if (imgIndex === 0) setImgIndex(images.length - 1);
      else setImgIndex(0);
    }
  }
  return (
    <div className="slider">
      {imgIndex != null && (
        <div className="fullslider">
          <div className="arrow">
            <img src="/arrow.png" alt="" onClick={() => handleSlider("left")} />
          </div>
          <div className="imgContainer">
            <img src={images[imgIndex]} alt="" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              alt=""
              onClick={() => handleSlider("right")}
            />
          </div>
          <div className="close" onClick={() => setImgIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImgIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} key={index} onClick={() => setImgIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
