import React, { useState } from "react";
import { places } from "./assets/constants/places";

export default function ({ onAddressSelect }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [city, setCity] = useState('')


  const handleSelect = (address) => {
    console.log('handleselect', address)
    const { city, lat, lng } = address
    onAddressSelect({ center: { lat: lat, lng: lng, }, zoom: 14 })
    setValue(city)
    setCity(city)
    setFocused(false)
  }

  const newPlaces = places.filter((place) => (
    place.city.toLowerCase().includes(value.toLowerCase())
  ))

  console.log({ city, focused })
  return (

    <div className="input-container">
      <div className="search-box">
        <input
          className=""
          type="text"
          placeholder="Search...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => value ? setFocused(true) : setFocused(false)}
        ></input>

        {value && focused && (
          <div className="pop-up">
            <ul>
              {value.length > 0 &&
                newPlaces.map((place, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(place)}
                  >{place.city}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
