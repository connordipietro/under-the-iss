import axios from "axios";

export const FETCH_ISS = "FETCH_ISS";
export const FETCH_LOCATION = "FETCH_LOCATION";
export const FETCH_WEATHER = "FETCH_WEATHER"

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

export function fetchLocationInfo(lat, lon) {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyCwB-2_AckUG3hMtx4P2X2kUTcXt2wenRc`)
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

export function fetchWeather(lat, lon) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1fc1127bc926b88b171314897133dde9&units=imperial`)
  .then(response => {
    return {
      type: FETCH_WEATHER,
      payload: response
    };
  })
  .catch(error => {
    alert('Bad input, try again');
  });
};
