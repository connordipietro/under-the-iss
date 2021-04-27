import { fetchISSCoords } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';
import LocationInfo from './location-info'
//import MapISS from './iss-map'
import WeatherISS from './iss-weather'
import APOD from './apod'
import LeafletMap from './iss-map-2'

const ISSIndex = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const handleClick = () => {
     setInterval(() => {
      dispatch(fetchISSCoords())
  }, 1000 );
  }
  
  function renderApod () {
    if (_.isEmpty(data.IssInfo)) {
      return <APOD></APOD>
    }
  }

  function renderBody () {
    if (!_.isEmpty(data.IssInfo)) {
      return <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">ISS Coordinates: Lat: {data.coords.lat} Lon: {data.coords.lon}</div>
              <div className="col-sm"><Moment unix>{data.IssInfo[0].timestamp}</Moment></div>
            </div>
            <div className="row">
              <div className="col-sm"><LocationInfo></LocationInfo></div>
            </div>
          </div>      
     {/*    <MapISS /> */}
        <LeafletMap></LeafletMap>
        <WeatherISS></WeatherISS>
        </div>
    }
  }
  return (
    <div>
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container">
          <h1 className="display-4">Under The ISS</h1>
          <p className="lead">What's going on underneath the International Space Station, right now?</p>
          <hr></hr>
          <button type="button" className="btn btn-primary btn-secondary" onClick={() => handleClick()}>Find Out</button>
        </div>
      </div>
      <div>{renderApod()}</div>
      <div className="container col-md-8 text-center">
        <div>{renderBody()}</div>
      </div>
    </div>
  )
}

export default ISSIndex;