import { combineReducers } from "redux";
import IssReducer from "./iss-reducer";
import LocationReducer from "./location-reducer";

const rootReducer = combineReducers({
  data: IssReducer,
  location: LocationReducer
});

export default rootReducer;
