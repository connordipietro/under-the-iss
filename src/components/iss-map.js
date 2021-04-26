import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react'
import {useState} from 'react'

const AnyReactComponent = () => <div>text</div>;

const MapISS = () => {
  const data = useSelector(state => state.data.coords);
   
  const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  return (
      
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyD9reTsOYE-u-m03_Vr_nR49R2f13iNeSQ' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={11.0169}
            lng={76.9558}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
//   <iframe
//   title="ISS-LOCATION"
// width="650"
// height="450"
// frameBorder="0" 
// src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD9reTsOYE-u-m03_Vr_nR49R2f13iNeSQ&q=${data.lat},${data.lang}&center=${data.lat},${data.lang}&zoom=2`} allowFullScreen>
// </iframe>
 
  
 )
}

export default MapISS;



  