import axios from "axios";

export const FETCH_ISS = "FETCH_ISS";
export const FETCH_LOCATION = "FETCH_LOCATION";

export function fetchISSCoords(city) {
  return axios.get(`http://api.open-notify.org/iss-now.json`)
  .then(response => {
    return {
      type: FETCH_ISS,
      payload: response
    };
  })
  .catch(error => {
    alert('Error');
  });
};

export function fetchLocationInfo(lat, lang) {
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?key=f53139d6d0184e51919c421f20fa4b9a&q=${lat}%2C+${lang}&pretty=1&no_annotations=1`)
  .then(response => {
    return {
      type: FETCH_LOCATION,
      payload: response
    };
  })
  .catch(error => {
    alert('Error');
  });
};
