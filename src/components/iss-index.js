import { fetchISSCoords } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';
import LocationInfo from './location-info'
import MapISS from './iss-map'
import WeatherISS from './iss-weather'

const ISSIndex = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchISSCoords())
  }

  function renderCoords () {
    if (!_.isEmpty(data.IssInfo)) {
      return <div>
        <h5>ISS Coords</h5>
        <h5>Lat: {data.coords.lat}</h5>
        <h5>Lan: {data.coords.lon}</h5>
        <h5>TimeStamp: <Moment unix>{data.IssInfo[0].timestamp}</Moment></h5>
        <LocationInfo></LocationInfo>
        <MapISS />
        <WeatherISS></WeatherISS>
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