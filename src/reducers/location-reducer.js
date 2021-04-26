import { FETCH_LOCATION } from "../actions";

const DEFAULT_STATE = {
  result: null
}

const LocationReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        result: action.payload.data.results[0].formatted_address || 'Error',
      };
    default:
      return state;
  };
};

export default LocationReducer;