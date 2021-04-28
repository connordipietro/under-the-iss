import { FETCH_CLOSEAPPROACH } from "../actions";

const DEFAULT_STATE = {
  result: {}
}

const CloseApproachReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_CLOSEAPPROACH:
    return {
          result: {
            des: action.payload.data.data[0][0],
            orbit_id: action.payload.data.data[0][1],
            jd: action.payload.data.data[0][2],
            cd: action.payload.data.data[0][3],
            dist: action.payload.data.data[0][4],
            dist_min: action.payload.data.data[0][5],
            dist_max: action.payload.data.data[0][6],
            v_rel: action.payload.data.data[0][7],
            v_inf: action.payload.data.data[0][8],
            t_sigma_f: action.payload.data.data[0][9],
            h: action.payload.data.data[0][10], 
            diameter: action.payload.data.data[0][11]
          }
        }
    default:
      return state;
  }
  };

export default CloseApproachReducer;


