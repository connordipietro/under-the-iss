import { combineReducers } from "redux";
import IssReducer from "./iss-reducer";

const rootReducer = combineReducers({
  posts: IssReducer,
});

export default rootReducer;
