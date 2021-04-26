import { /* useDispatch, */ useSelector } from 'react-redux';

const MapISS = () => {
  const data = useSelector(state => state.data.coords);
  console.log(data)
  //map logic here

  return (
    <iframe
    title="ISS-LOCATION"
  width="450"
  height="250"
  frameborder="0" 
  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD9reTsOYE-u-m03_Vr_nR49R2f13iNeSQ&q=${data.lang},${data.lat}&center=${data.lang},${data.lat}&zoom=0`} allowfullscreen>
</iframe>
  )
}

export default MapISS;


