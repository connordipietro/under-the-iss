import { FETCH_APOD } from "../actions";

const DEFAULT_STATE = {
  url: false
}

const ApodRecuder = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_APOD:
      return {
            url: action.payload.data.hdurl
        }
    default:
      return state;
  };
};

export default ApodRecuder;