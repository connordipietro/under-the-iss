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
       <span><h5>ISS Coordinates: Lat: {data.coords.lat} Lon: {data.coords.lon}</h5></span>
        <h5>TimeStamp: <Moment unix>{data.IssInfo[0].timestamp}</Moment></h5>
        <LocationInfo></LocationInfo>
        <MapISS />
        <WeatherISS></WeatherISS>
        </div>
    }
  }
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Under The ISS</h1>
    <p className="lead">What's going on underneath the International Space Station, right now?</p>
    <hr></hr>
    <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleClick()}>Find Out</button>
  </div>
  </div>
  <div className="container col-md-8 text-center">
  <div>{renderCoords()}</div>
  </div>
     
    </div>
  )
}

export default ISSIndex;