import { fetchAstronomy } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

const Astronomy = () => {
  const data = useSelector(state => state.data.coords);
  const astronomys = useSelector(state => state.astronomys.data)
  const lat = data.lat
  const lon = data.lon

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAstronomy(lat, lon))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [fetchAstronomy]);

const renderAstronomy = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="list-group list-group-flush text-left">
            <li className="list-group-item">Moon Altitude: {astronomys.moon_altitude}</li>
            <li className="list-group-item">Moon Azumith: {astronomys.moon_azimuth}</li>
            <li className="list-group-item">Moon Distance: {astronomys.moon_distance}</li>
            <li className="list-group-item">Moon Parallactic Angel {astronomys.moon_parallactic_angle}</li>
            <li className="list-group-item">Moonrise {astronomys.moonrise}</li>
            <li className="list-group-item">Moonset {astronomys.moonset}</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-group list-group-flush text-left">
            <li className="list-group-item">Solar Noon {astronomys.solar_noon}</li>
            <li className="list-group-item">Sun Altitude {astronomys.sun_altitude}</li>
            <li className="list-group-item">Sun Azimuth {astronomys.sun_azimuth}</li>
            <li className="list-group-item">Sun Distance {astronomys.sun_distance}</li>
            <li className="list-group-item">Sunrise {astronomys.sunrise}</li>
            <li className="list-group-item">Sunset {astronomys.sunset}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

return (
  <div>{renderAstronomy()}</div>
)
}

export default Astronomy











     