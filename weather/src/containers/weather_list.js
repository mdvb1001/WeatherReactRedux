import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
  // 'weather' is used because it's what we used in the reducer

// ES5 version of this function...
// function mapStateToProps(state) {
//   return { weather: state.weather };
// }
// BECAUSE
// const weather = state.weather;
// { weather } ===> { weather : weather }
