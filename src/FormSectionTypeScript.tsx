import React, { useState } from "react";
import { tours } from "./ToursData";

interface TourItem {
  image: string;
  title: string;
  discount: string;
}

const FormSectionTypeScript = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="form-section">
      <div className="left-section">
        <p className="sub-text">🌟 Let’s Get You Flying </p>
        <h1>
          Your Perfect Flight,
          <br /> Just A Click Away
        </h1>
        <button className="book-btn">BOOK NOW</button>
      </div>

      <div className="right-section">
        {tours.map((tour: TourItem, index: number) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img
              className={
                activeIndex === index
                  ? "right-section-orange"
                  : "right-section-white"
              }
              src={tour.image}
              alt={tour.title}
            />

            <h3
              className={
                activeIndex === index ? "heading-orange" : "heading-white"
              }
            >
              {tour.title}
            </h3>

            <p>{tour.discount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormSectionTypeScript;
