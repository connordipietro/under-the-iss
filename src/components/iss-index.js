import { fetchISSCoords } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import Moment from 'react-moment';
import LocationInfo from './location-info'
import WeatherISS from './iss-weather'
import Astronomy from './iss-astronomy'
/* import APOD from './apod' */
import CloseApproach from './close-approach'
import LeafletMap from './iss-map-2'
import LiveFeed from './live-iss-feed'
import LayerButtons from './map-layer-buttons'
import { useEffect } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


const ISSIndex = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
    dispatch(fetchISSCoords())
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, 1000)}, [fetchISSCoords])

function renderBody () {
  if (!_.isEmpty(data.IssInfo)) {
    return <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col-sm">
                <div>
                  <h3><u>Location</u></h3>
                    <LocationInfo></LocationInfo>
                  </div>
                </div>
              </div>
                <div className="row">
                  <div className="col-sm">
                    <p className="lead">Lat: {data.coords.lat} Lon: {data.coords.lon} at <Moment unix format="hh:mm:ss" >{data.IssInfo[0].timestamp}</Moment> on <Moment unix format="MM/DD/YYYY" >{data.IssInfo[0].timestamp}</Moment></p>
                  </div>
                </div>
              <div className="row">
                <div className="col-sm">
                  <LeafletMap></LeafletMap>
                </div>
              </div>
            </div>
              <div className="col-sm">  {/* column 2  */}
                <div className="row">
                  <div className="col-sm">
                    <h3><u>Information</u></h3>
                  </div>
                </div>
              <div className="row">
                <div className="col-sm">
                  <Tabs defaultActiveKey="weather" id="uncontrolled-tab-example">
                    <Tab eventKey="weather" title="Weather">
                      <WeatherISS></WeatherISS>
                      <LayerButtons></LayerButtons>
                    </Tab>
                    <Tab eventKey="astronomys" title="Astronomy">
                    <Astronomy></Astronomy>
                    </Tab>
                  {/* <Tab eventKey="crewInfo" title="Crew Information">
                    Crew Information Here
                  </Tab> */}
                  <Tab eventKey="LOEInfo" title="Next Meteor Approach">
                    <CloseApproach></CloseApproach>
                  </Tab>
                  <Tab eventKey="Live-Feed" title="Live ISS Feed">
                    <LiveFeed />
                  </Tab>
                </Tabs>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
  }
}
return (
  <div>
    <div className="jumbotron jumbotron-fluid mb-0 head-img mb-3">
      <div className="container">
        <h1 className="display-4 text-white">Under The ISS</h1>
        <p className="lead text-white">What's going on underneath the International Space Station, right now?</p>
        <hr></hr>
      </div>
    </div>
    <div className="container-fluid text-center">
      <div>{renderBody()}</div>
    </div>
</div>
  )
}

export default ISSIndex;