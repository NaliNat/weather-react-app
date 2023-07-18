import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [flag, setFlag] = useState(false);

  function searchWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62bc298785543e137bc6756e514eb1c3&units=metric`;
    axios
      .get(url)
      .then(updateWeather)
      .catch((err) => {
        console.log("Error");
      });
  }

  function updateWeather(response) {
    setFlag(true);
    setWeather({
      name: response.data.name,
      temp_min: Math.round(response.data.main.temp_min),
      temp_max: Math.round(response.data.main.temp_max),
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (flag) {
    return (
      <div className="SearchEngine container">
        <form className="form-inline" onSubmit={searchWeather}>
          <div className="row">
            <div clasName="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  onChange={updateCity}
                  className="search form-control city-input-box"
                  placeholder="Enter a city"
                  autocomplete="on"
                />
                <button
                  className="btn btn-outline-secondary search search-btn"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>

        <ul>
          <li>
            <div className="row">
              <div className="col-6">
                <h2 id="city-name">{weather.name}</h2>
              </div>
            </div>
          </li>

          <li>
            <div className="row">
              <div className="col-6 d-flex">
                <h1 className="current-temp">
                  <li>
                    <img src={weather.icon} alt="weather icon" />
                  </li>
                  <li id="temperature">{weather.temperature}°C</li>
                </h1>
              </div>
              <div className="col-6 more-info">
                <h4 className="more-info-first">
                  <li id="weather">{weather.description}</li>
                  <li>Wind: {weather.wind} km/h</li>
                  <li>Humidity: {weather.humidity}%</li>
                </h4>

                <h3>
                  <span className="max-temp" id="current-max-temp">
                    {weather.temp_max}°
                  </span>

                  <span className="min-temp" id="current-min-temp">
                    {weather.temp_min}°
                  </span>
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="SearchEngine container">
        <form className="form-inline" onSubmit={searchWeather}>
          <div className="row">
            <div clasName="col">
              <div className="input-group mb-3">
                <input
                  type="text"
                  onChange={updateCity}
                  className="search form-control city-input-box"
                  placeholder="Enter a city"
                  autocomplete="on"
                />
                <button
                  className="btn btn-outline-secondary search search-btn"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
