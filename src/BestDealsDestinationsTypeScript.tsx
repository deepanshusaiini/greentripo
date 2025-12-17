import React, { useState } from "react";
import { trips } from "./assets/constants/places";
import { useNavigate } from "react-router-dom";

interface DestinationProps {
  callback: (tripData: Trip) => void;
}

interface Trip {
  image: string;
  title: string;
  icon: string;
  location: string;
  clock: string;
  days: string;
  money: string;
  price: string;
  prices: string;
  button: string;
}

const BestDealsDestinationsTypeScript: React.FC<DestinationProps> = ({
  callback,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    callback(trips[0]);
    navigate("/ViewDetailTypeScript");
    // console.log('item is ', trips[0])
  };

  const [index, setIndex] = useState<number>();

  return (
    <div className="bestdestination-container">
      <div className="hp-container">
        <h2>BEST DEALS</h2>
        <p>Awesome Destinations with Us</p>
      </div>

      <div className="card-container">
        {trips.map((trip: Trip) => (
          <div className="card">
            <img src={trip?.image} className="card-img"></img>
            <h3 className="card-title">{trip.title}</h3>
            <div className="card-info">
              <img src={trip.icon} className="location-img"></img>
              <p className="trip-p"> {trip.location}</p>
            </div>

            <div className="card-info-one">
              <img src={trip.clock} className="clock-img"></img>
              <p className="trip-c">{trip.days}</p>
            </div>
            <div className="card-info-two">
              <img src={trip.money} className="money-img"></img>
              <h2 className="trip-m">
                {trip.price}
                <span style={{ color: "gray", fontSize: "15px" }}>
                  {trip.prices}
                </span>
              </h2>
            </div>

            <button onClick={() => handleClick()} className="details-btn">
              VIEW DETAILS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDealsDestinationsTypeScript;
