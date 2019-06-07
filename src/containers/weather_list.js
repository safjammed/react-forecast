import React, {Component} from 'react';
import {connect} from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component{
    renderWeather(cityData){
        // console.log("weatherdata", cityData);
        //npm install --save react-sparklines
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        // console.info(temps, humidities, pressures);
        const {lon, lat} = cityData.city.coord;
        // const lat = cityData.city.coord.lat;
        console.log({ lon, lat });
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={temps} color={"orange"} unit="K"/>
                </td>
                <td>
                    <Chart data={pressures} color={"blue"} unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color={"green"} unit="%"/>
                </td>
            </tr>
        );
    }
    render() {
        // console.log(this.props.weather);
        if (this.props.weather && this.props.weather.length == 0){
            return "Type in something to search";
        }

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}

function mapStateToProps({weather}) { // state
    return { weather }; // {weather:state.weather}
}

export default connect(mapStateToProps)(WeatherList);