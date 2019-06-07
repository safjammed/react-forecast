import {FETCH_WEATHER} from './../actions/index';

export default function (state = [], action) {
    console.log("Action Received", "reducer_weather.js", action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]); // the data received through the promise middleware of redux-promise
            return [action.payload.data, ...state];


    }
    return state;
    
}