import { FETCH_ASTRONOMY } from "../actions";

const DEFAULT_STATE = {
  data: {
    moon_altitude: null,
    moon_azimuth: null,
    moon_astronomy: null,
    moon_parallactic_angle: null,
    moonrise: null,
    moonset: null,
    solar_noon: null,
    sun_altitude: null,
    sun_azimuth: null,
    sun_astronomy: null,
    sunrise: null,
    sunset: null,
  }
}

const DistanceRecuder = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FETCH_ASTRONOMY:
      console.log(action.payload)
      return {
            data: {
              moon_altitude: action.payload.data.moon_altitude,
              moon_azimuth: action.payload.data.moon_azimuth,
              moon_astronomy: action.payload.data.moon_astronomy,
              moon_parallactic_angle: action.payload.data.moon_parallactic_angle,
              moonrise: action.payload.data.moonrise,
              moonset: action.payload.data.moonset,
              solar_noon: action.payload.data.solar_noon,
              sun_altitude: action.payload.data.sun_altitude,
              sun_azimuth: action.payload.data.sun_azimuth,
              sun_astronomy: action.payload.data.sun_astronomy,
              sunrise: action.payload.data.sunrise,
              sunset: action.payload.data.sunset,
            }
        }
    default:
      return state;
  };
};

export default DistanceRecuder;

