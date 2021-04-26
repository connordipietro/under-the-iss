import { combineReducers } from "redux";
import IssReducer from "./iss-reducer";

const rootReducer = combineReducers({
  data: IssReducer,
});

export default rootReducer;
