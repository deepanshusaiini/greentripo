import React, { useState } from "react";
import { tours } from "./ToursData";

function FormSection() {
    const [activeIndex, setActiveIndex] = useState();
    return (
        <div className="form-section">
            <div className="left-section">
                <p className="sub-text">🌟 Let’s Get You Flying </p>
                <h1> Your Perfect Flight,<br /> Just A Click Away </h1>
                <button className="book-btn">BOOK NOW</button>
                {/* <div className="trustpilot">Trustpilot</div> */}
            </div>
            <div className="right-section">
                {tours.map((tour, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <img
                            className={
                                activeIndex == index
                                    ? "right-section-orange"
                                    : "right-section-white"
                            }
                            src={tour.image}
                        />
                        <h3 className={activeIndex == index ? "heading-orange" : "heading-white"}>{tour.title}</h3>
                        <p >{tour.discount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default FormSection;



//rony - lat - value, lng - value
//search rony address - nakur road sarsawa  Location value=> lat - value, lng - value