import { combineReducers } from "redux";
import IssReducer from "./iss-reducer";
import LocationReducer from "./location-reducer";
import WeatherReducer from "./weather-reducer";

const rootReducer = combineReducers({
  data: IssReducer,
  location: LocationReducer,
  weather: WeatherReducer
});

export default rootReducer;
