import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useSelector } from 'react-redux'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import IconPopup from './icon-popup'

var ISSIcon = L.icon({
  iconUrl: 'iss_icon6.png',
  iconSize: [70, 70],
  popupAnchor: [50, 25],
  shadowAnchor: [1, 1]
});

const LeafletMap = (props) => {
  const data = useSelector(state => state.data.coords);
  const position = [data.lat, data.lon]
  const stateLayer = useSelector(state => state.layer.layerURL);

  function renderMap() {
      let url = `https://tile.openweathermap.org/map/${stateLayer}/{z}/{x}/{y}.png?appid=1fc1127bc926b88b171314897133dde9`
      return (
        <MapContainer className="map" center={position} zoom="2.5" key={stateLayer}>
          <TileLayer attribution='&amp;copy <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"/>
          <TileLayer attribution='&amp;copy <a href=https://www.osm.org/copyright">OpenStreetMap</a> contributors'url={url}/>
          <Marker position={position} icon={ISSIcon}>
            <Popup>
               <IconPopup/>
              </Popup>
          </Marker>
       </MapContainer>
      )
    }
    return (
      <div>{renderMap()}</div>
    )
  }
export default LeafletMap
