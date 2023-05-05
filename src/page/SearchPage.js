import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback, useEffect } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import NaviBar from "../components/Navbar";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const MAPBOX_TOKEN = "pk.eyJ1IjoiZWxkb2RvNjQxIiwiYSI6ImNrdndna3hnaDN2ajgzMG8wbjh3NG44YzUifQ.vXDXCjgnSb--p576SCputQ";

export default function Maps() {
  const [viewport, setViewport] = useState({
    latitude: -8.67356,
    longitude: 115.20362,
    zoom: 10,
  });
  const mapRef = useRef();

  const handleViewportChange = useCallback((newViewport) => {
    setViewport(newViewport);
  }, []);

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <div>
      <NaviBar />
      <div style={{ height: "70vh", width: "100%" }}>
        <MapGL ref={mapRef} {...viewport} width="100%" height="100%" onViewportChange={handleViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} mapStyle="mapbox://styles/mapbox/streets-v11">
          <Geocoder mapRef={mapRef} onViewportChange={handleGeocoderViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} position="top-left" />
        </MapGL>
      </div>
    </div>
  );
}
