import { fetchWeather } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import Moment from 'react-moment';

const Weather = () => {
  const data = useSelector(state => state.data);
  const weather = useSelector(state => state.weather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather(data.coords.lat, data.coords.lon))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [fetchWeather]);

  const renderWeather = () => { 
    if (weather.result !== false){
      return (
        //all this needs to be put into state and then called there, this is just to see the data being returned for now
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">Sunrise: <Moment unix format="hh:mm:ss a">{weather.result.data.sys.sunrise}</Moment></div>
              <div className="col-sm">Sunset: <Moment unix format="hh:mm:ss a">{weather.result.data.sys.sunset}</Moment></div>
              <div className="col-sm">TimeZone: {weather.result.data.timezone}</div>
            </div>
            <div className="row">
              <div className="col-sm">Temperature: {weather.result.data.main.temp}</div>
              <div className="col-sm">Humidity: {weather.result.data.main.humidity}</div>
              <div className="col-sm">Pressure: {weather.result.data.main.pressure}</div>
            </div>
          </div>
      </div>
      )
    }
    return (
      <div></div>
    )
  }
  return (
    <div>{renderWeather()}</div>
    )
}

export default Weather;
