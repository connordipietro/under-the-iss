import { combineReducers } from "redux";
import IssReducer from "./iss-reducer";
import LocationReducer from "./location-reducer";
import WeatherReducer from "./weather-reducer";
import ApodReducer from "./apod-reducer";
import DistanceReducer from "./astronomy-reducer"
import CloseApproachReducer from "./close-approach"

const rootReducer = combineReducers({
  data: IssReducer,
  location: LocationReducer,
  weather: WeatherReducer,
  apod: ApodReducer,
  astronomys: DistanceReducer,
  closeApproach: CloseApproachReducer
});

export default rootReducer;
