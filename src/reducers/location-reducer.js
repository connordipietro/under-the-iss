import { FETCH_LOCATION } from "../actions";

const DEFAULT_STATE = {
  result: null
}

const LocationReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_LOCATION:
      if (action.payload.data.results[0] !== undefined) {
        return {
          result: action.payload.data.results[0].formatted_address
        }
      }
      return {
        result: null
      };
    default:
      return state;
  };
};

export default LocationReducer;