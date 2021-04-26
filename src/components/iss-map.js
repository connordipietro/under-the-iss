import { /* useDispatch, */ useSelector } from 'react-redux';

const MapISS = () => {
  const data = useSelector(state => state.data);
  console.log(data)
  //map logic here

  return <div>Map here</div>
}

export default MapISS;
