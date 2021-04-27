import { combineReducers } from "redux";
import IssReducer from "./iss-reducer";
import LocationReducer from "./location-reducer";
import WeatherReducer from "./weather-reducer";
import ApodReducer from "./apod-reducer";
import IconPopupReducer from "./popup-reducer"


const rootReducer = combineReducers({
  data: IssReducer,
  location: LocationReducer,
  weather: WeatherReducer,
  apod: ApodReducer,
  iconpopup: IconPopupReducer
});

export default rootReducer;
