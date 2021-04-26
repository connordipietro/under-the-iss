import { FETCH_WEATHER } from "../actions";

const DEFAULT_STATE = {
  result: false
}

const WeatherReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.payload) {
        return {
          result: action.payload
        }
      }
      return {
        result: null
      };
    default:
      return state;
  };
};

export default WeatherReducer;