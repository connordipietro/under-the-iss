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
            <ul className="list-group list-group-flush text-left">
              <li class="list-group-item">Temperature: {weather.result.data.main.temp }{'\u2109'} </li>
              <li class="list-group-item">Humidity: {weather.result.data.main.humidity}%</li>
              <li class="list-group-item">Pressure: {weather.result.data.main.pressure}hPa</li>
              <li class="list-group-item">Sunset: <Moment unix format="hh:mm:ss a">{weather.result.data.sys.sunset}</Moment></li>
              <li class="list-group-item">Sunrise: <Moment unix format="hh:mm:ss a">{weather.result.data.sys.sunrise}</Moment></li>
              <li class="list-group-item">TimeZone: {weather.result.data.timezone}</li>
            </ul>
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


