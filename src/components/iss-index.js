import { fetchISSCoords } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

const ISSIndex = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('click')
    dispatch(fetchISSCoords())
  }

  function renderCoords () {
    if (!_.isEmpty(data.IssInfo)) {
      console.log(data.coords);
      return <div>
        <h1>ISS Coords</h1>
        <h1>Lat: {data.coords.lat}</h1>
        <h1>Long: {data.coords.lang}</h1>
        <h1>TimeStamp: {data.IssInfo[0].timestamp}</h1>
        </div>
    }
  }
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => handleClick()}>Locate</button>
      <div>{renderCoords()}</div>
    </div>
  )
}

export default ISSIndex;