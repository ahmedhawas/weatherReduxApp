import axios from 'axios';

const API_KEY = '02098eaf9944d72be3e613e993b2267d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const REMOVE_WEATHER = 'REMOVE_WEATHER';

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function removeWeather(weatherData) {
  return {
    type: REMOVE_WEATHER,
    payload: weatherData
  }
}
