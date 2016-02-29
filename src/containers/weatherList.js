import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Chart from '../components/chart';
import GoogleMap from '../components/map';
import { removeWeather } from '../actions/index';

export default class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td>
          <Chart data={temps} color="blue" unit="K"/>
        </td>
        <td>
          <Chart data={pressures} color="green" unit="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color="black" unit="%"/>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.props.removeWeather(cityData) }}>
            Remove
          </button>
        </td>
      </tr>
    );
  }

  render() {
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

function mapStateToProps({weather}) {
  return { weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeWeather}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);
