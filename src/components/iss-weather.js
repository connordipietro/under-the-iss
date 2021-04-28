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
      /* const iconURL = `http://openweathermap.org/img/wn/${weather.result.data.weather[0].icon}@4x.png` */
      return (
        //all this needs to be put into state and then called there, this is just to see the data being returned for now
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <ul className="list-group list-group-flush text-left">
                  <li className="list-group-item">Ground Level Pressure {weather.result.data.main.grnd_level} hPa</li>
                  <li className="list-group-item">Sea Level Pressure {weather.result.data.main.sea_level} hPa</li>
                  <li className="list-group-item">Main Temp {weather.result.data.main.temp} {'\u2109'}</li>
                  <li className="list-group-item">Max Temp {weather.result.data.main.temp_max} {'\u2109'}</li>
                  <li className="list-group-item">Min Temp {weather.result.data.main.temp_min} {'\u2109'}</li>
                </ul>
              </div>
              <div className="col">
                <ul className="list-group list-group-flush text-left">
                  <li className="list-group-item">{weather.result.data.weather[0].description}</li>
                  <li className="list-group-item">Wind Deg {weather.result.data.wind.deg}</li>
                  <li className="list-group-item">Wind Gust {weather.result.data.wind.gust}</li>
                  <li className="list-group-item">Wind Speed {weather.result.data.wind.speed}</li>
                  <li className="list-group-item">Visibility {weather.result.data.visibility}</li>
                </ul>
              </div>
            </div>
         {/*    <img src={iconURL} alt="..."></img> */}
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


