import { CHANGE_LAYER } from "../actions";

const DEFAULT_STATE = {
  layerURL: null
}

const mapLayerReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CHANGE_LAYER:
        return {
          layerURL: action.payload
        }
        default:
          return state;
      }
  };

export default mapLayerReducer;
