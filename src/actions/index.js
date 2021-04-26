import axios from "axios";

export const FETCH_ISS = "FETCH_ISS";

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
