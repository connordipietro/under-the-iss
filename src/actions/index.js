import axios from "axios";

export const FETCH_ISS = "FETCH_ISS";
export const FETCH_LOCATION = "FETCH_LOCATION";


export function fetchISSCoords() {
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
  
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lang}&key=AIzaSyCwB-2_AckUG3hMtx4P2X2kUTcXt2wenRc`)
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
