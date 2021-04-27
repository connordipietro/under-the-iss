import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux'
import L from "leaflet";
import "leaflet/dist/leaflet.css";

var ISSIcon = L.icon({
  iconUrl: '956251-200.png',
  iconSize: [75, 75],
  iconAnchor: [25, 15],
  popupAnchor: [50, 25],
  //shadowUrl: '956251-200.png',
  shadowSize: [60, 40],
  shadowAnchor: [30, 15]
});

const LeafletMap = (props) => {
  const data = useSelector(state => state.data.coords);
  const position = [data.lat, data.lon]

  function renderMap() {
    return (
      <MapContainer className="map" center={position} zoom="2.5">
        <TileLayer attribution='&amp;copy <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={position} icon={ISSIcon}>
            {/* <Popup>
                 <span>Info here</span>
              </Popup> */}
          </Marker>
      </MapContainer>
    )
  }
  
  return (
    <div>{renderMap()}</div>
  )
};

export default LeafletMap
