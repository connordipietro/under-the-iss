import { FETCH_LOCATION } from "../actions";

const DEFAULT_STATE = {
  location: null
}

const LocationReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        location: [action.payload],
        formatted: action.payload.data.results[0].formatted,
      };
    default:
      return state;
  };
};

export default LocationReducer;