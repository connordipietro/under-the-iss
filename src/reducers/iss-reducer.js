import { FETCH_ISS } from "../actions";

const DEFAULT_STATE = {
  coords: []
}

const IssReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_ISS:
      return {
        coords: [action.payload.data],
      };
    default:
      return state;
  };
};

export default IssReducer;