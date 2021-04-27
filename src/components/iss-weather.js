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
            <table class="table table-striped table-sm text-left">
              <thead class="thead">
               <tr>
                  <th scope="col">Atmosphere</th>
                  <th scope="col">Astronomy</th>
                </tr>
              </thead>
              <tbody>
               <tr>
                <td>Temperature: {weather.result.data.main.temp}</td>
                <td>Sunset: <Moment unix format="hh:mm:ss a">{weather.result.data.sys.sunset}</Moment></td>
               </tr>
               <tr>
                <td>Humidity: {weather.result.data.main.humidity}</td>
                <td>Sunrise: <Moment unix format="hh:mm:ss a">{weather.result.data.sys.sunrise}</Moment></td>
               </tr>
               <tr>
                <td> Pressure: {weather.result.data.main.pressure}</td>
                <td>TimeZone: {weather.result.data.timezone}</td>
               </tr>
              </tbody>
            </table>
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


