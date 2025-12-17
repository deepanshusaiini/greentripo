import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import Autocomplete from "react-google-autocomplete";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { PlacesAutocomplete } from "../src/demo";
import SearchBar from "./SearchBar";

export default function Map() {
  const [mapData, setMapData] = useState({
    center: {
      lat: 30.0198,
      lng: 77.3985
    },
    zoom: 11,
  });

  const mapKey = "AIzaSyAGXn3x-iNBW8Bpfw34zxFZBnifBtV4PWE";

  const AnyReactComponent = ({ }) => (

    <div
      style={{
        background: "red",
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h3>Marker</h3>
    </div>
  );

  const onAddressSelect = (address) => {
    setMapData(address);
  };

  const mapRef = useRef(null); // store the map instance
  const mapsApiRef = useRef(null);// store the google  maps api reference

  useEffect(() => {
    if (mapData) {
      animateToLocation();//animate map to new location 
    }
  }, [mapData.center]);// when address value will update this useeffect will call every time

  const handleApiLoaded = ({ map, maps }) => {
    mapRef.current = map; // put map instance to mapref
    mapsApiRef.current = maps; //put map api instance to mapApiRef
  };

  const animateToLocation = () => {
    const map = mapRef.current
    const maps = mapsApiRef.current;

    if (map && maps) {
      const newLocation = new maps.LatLng(  //set new lat lng to map 
        mapData.center.lat,
        mapData.center.lng
      ) //set selected location to map

      map.panTo(newLocation)
      // use panto method to animate map to new location

      const marker = new maps.Marker({
        position: newLocation,
        map: map,
      })

      const infoWindow = new maps.InfoWindow()

      marker.addListener('mouseover', () => {
        infoWindow.setContent(
          `Lat:${newLocation.lat().toFixed(5)},Lng:${newLocation.lng().toFixed(5)}`
        );
        infoWindow.open(map, marker)
      });
      marker.addListener('mouseout', () => {
        infoWindow.close();
      });
    }
  }

  return (
    <div className="map-container">
      {/* <SearchBar onAddressSelect={onAddressSelect}></SearchBar> */}

      <GoogleMapReact
        key={mapData}
        ref={mapRef}
        bootstrapURLKeys={{ key: mapKey }}
        defaultCenter={mapData.center}
        defaultZoom={mapData.zoom}
        onGoogleApiLoaded={handleApiLoaded}
        options={{
          disableDefaultUI: true,
        }}
      >
        <AnyReactComponent lat={mapData.center.lat} lng={mapData.center.lng} text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
