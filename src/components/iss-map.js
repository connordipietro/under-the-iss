import { useSelector } from 'react-redux';

const MapISS = () => {
  const data = useSelector(state => state.data.coords);

  return (
    <iframe
    title="ISS-LOCATION"
  width="650"
  height="450"
  frameBorder="0" 
  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD9reTsOYE-u-m03_Vr_nR49R2f13iNeSQ&q=${data.lat},${data.lang}&center=${data.lat},${data.lang}&zoom=2`} allowFullScreen>
</iframe>
  )
}

export default MapISS;


