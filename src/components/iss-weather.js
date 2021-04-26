import { fetchWeather } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

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
      console.log(weather);
      return (
        //all this needs to be put into state and then called there, this is just to see the data being returned for now
        <div>
        <h5>Temp: {weather.result.data.main.temp}</h5>
        <h5>Humidity: {weather.result.data.main.humidity}</h5>
        <h5>Pressure: {weather.result.data.main.pressure}</h5>
        <h5>Name: {weather.result.data.name}</h5>
        <h5>Sunrise: {weather.result.data.sys.sunrise}</h5>
        <h5>Sunset: {weather.result.data.sys.sunset}</h5>
        <h5>TimeZone: {weather.result.data.timezone}</h5>
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
