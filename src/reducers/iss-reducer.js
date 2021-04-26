import { FETCH_ISS } from "../actions";

const DEFAULT_STATE = {
  IssInfo: [],
  coords: {
    lat: null,
    lon: null 
  }
}

const IssReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_ISS:
      return {
        IssInfo: [action.payload.data],
        coords: {
          lat: action.payload.data.iss_position.latitude,
          lon: action.payload.data.iss_position.longitude
        }
      };
    default:
      return state;
  };
};

export default IssReducer;