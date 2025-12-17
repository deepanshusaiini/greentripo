import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

import Autocomplete from "react-google-autocomplete";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { PlacesAutocomplete } from "./demo";
import SearchBar from "./SearchBar";

interface BootstrapURLKeys {
  key: string;
}

interface MapCenter {
  lat: number;
  lng: number;
}

interface MapData {
  center: MapCenter;
  zoom: number;
}

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker: React.FC<MarkerProps> = () => (
  <div
    style={{
      background: "red",
      height: 60,
      width: 60,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontWeight: "bold",
    }}
  >
    Marker
  </div>
);

const MapTypeScript = () => {
  const [mapData, setMapData] = useState<MapData>({
    center: { lat: 30.0198, lng: 77.3985 },
    zoom: 11,
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const mapsApiRef = useRef<typeof google.maps | null>(null);

  const mapKey: BootstrapURLKeys = {
    key: "AIzaSyAGXn3x-iNBW8Bpfw34zxFZBnifBtV4PWE",
  };

  // When mapData.center changes, animate map
  useEffect(() => {
    animateToLocation();
  }, [mapData.center]);

  const handleApiLoaded = ({
    map,
    maps,
  }: {
    map: google.maps.Map;
    maps: typeof google.maps;
  }) => {
    mapRef.current = map;
    mapsApiRef.current = maps;
  };

  const animateToLocation = () => {
    const map = mapRef.current;
    const maps = mapsApiRef.current;

    if (!map || !maps) return;

    const newLocation = new maps.LatLng(mapData.center.lat, mapData.center.lng);

    map.panTo(newLocation);

    const marker = new maps.Marker({
      position: newLocation,
      map,
    });

    const infoWindow = new maps.InfoWindow();

    marker.addListener("mouseover", () => {
      infoWindow.setContent(
        `Lat: ${newLocation.lat().toFixed(5)}, Lng: ${newLocation
          .lng()
          .toFixed(5)}`
      );
      infoWindow.open(map, marker);
    });

    marker.addListener("mouseout", () => {
      infoWindow.close();
    });
  };

  return (
    <div className="map-container" style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={mapKey}
        defaultCenter={mapData.center}
        defaultZoom={mapData.zoom}
        onGoogleApiLoaded={handleApiLoaded}
        yesIWantToUseGoogleMapApiInternals
        // options={{ disableDefaultUI: true }}
      >
        {/* <Marker lat={mapData.center.lat} lng={mapData.center.lng} /> */}
      </GoogleMapReact>
    </div>
  );
};
export default MapTypeScript;
