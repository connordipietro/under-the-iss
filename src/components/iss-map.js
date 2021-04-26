import { /* useDispatch, */ useSelector } from 'react-redux';

const MapISS = () => {
  const data = useSelector(state => state.data);
  console.log(data)
  //map logic here

  return (
    <iframe
    title="ISS-LOCATION"
  width="450"
  height="250"
  frameborder="0" 
  src="https://www.google.com/maps/embed/v1/view?key=AIzaSyD9reTsOYE-u-m03_Vr_nR49R2f13iNeSQ&center= -33.8569,151.2152&zoom=18" allowfullscreen>
</iframe>
  )
}

export default MapISS;


