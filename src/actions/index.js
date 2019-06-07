import axios from 'axios';

const API_KEY = 'aba1aa82597e5ab96cffc6bf167bc556';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export  const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, code) {
    console.log(city, code);
    const url  = `${ROOT_URL}&q=${city},${code}`;
    const request = axios.get(url);
    // console.info("Request", request);
    return {
        type: FETCH_WEATHER,
        payload:request
    }
}