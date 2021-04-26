import { FETCH_ISS } from "../actions";

const DEFAULT_STATE = {
  IssInfo: [],
  coords: {
    lat: null,
    lang: null 
  }
}

const IssReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_ISS:
      return {
        IssInfo: [action.payload.data],
        coords: {
          lat: action.payload.data.iss_position.latitude,
          lang: action.payload.data.iss_position.longitude
        }
      };
    default:
      return state;
  };
};

export default IssReducer;