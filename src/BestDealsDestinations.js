import React from "react";
import { trips } from "./assets/constants/places";
import { useNavigate } from "react-router-dom";

export default function BestDealsDestinations({ callback }) {
    const navigate = useNavigate()

    const handleClick = () => {
        callback(trips[0])
        navigate('/ViewDetail')
        // console.log('item is ', trips[0])
    }





    return (
        <div className="bestdestination-container">
            <div className="hp-container">
                <h2>BEST DEALS</h2>
                <p>Awesome Destinations with Us</p>
            </div>

            <div className="card-container">
                {trips.map((trip) => (
                    <div className="card">
                        <img src={trip.image} className="card-img"></img>
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
                            <h2 className="trip-m">{trip.price}<span style={{ color: 'gray', fontSize: '15px' }}>{trip.prices}</span></h2>
                        </div>


                        <button onClick={() => handleClick()} className="details-btn">VIEW DETAILS</button>
                    </div>
                ))}
            </div>
        </div>
    );
}