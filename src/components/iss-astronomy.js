import { fetchDistances } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

const Distances = () => {
  const data = useSelector(state => state.data.coords);
  const distances = useSelector(state => state.distances.data)
  const lat = data.lat
  const lon = data.lon

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDistances(lat, lon))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [fetchDistances]);

const renderDistances = () => {
  return (
    <div className="container">
    <ul className="list-group list-group-flush text-left">
      <li className="list-group-item">Moon Altitude: {distances.moon_altitude}</li>
      <li className="list-group-item">Moon Azumith: {distances.moon_azimuth}</li>
      <li className="list-group-item">Moon Distant: {distances.moon_distance}</li>
      <li className="list-group-item">Moon Parallactic Angel {distances.moon_parallactic_angle}</li>
      <li className="list-group-item">Moonrise {distances.moonrise}</li>
      <li className="list-group-item">Moonset {distances.moonset}</li>
      <li className="list-group-item">Solar Noon{distances.solar_noon}</li>
      <li className="list-group-item">Sun Altitude {distances.sun_altitude}</li>
      <li className="list-group-item">Sun Azimuth {distances.sun_azimuth}</li>
      <li className="list-group-item">Sun Distance {distances.sun_distance}</li>
      <li className="list-group-item">Sunrise {distances.sunrise}</li>
      <li className="list-group-item">Sunset {distances.sunset}</li>
    </ul>
  </div>

  )
}

return (
  <div>{renderDistances()}</div>
)
}

export default Distances















     