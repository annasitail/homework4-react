import React, { useState } from "react";
import axios from "axios";

// import "./Weather.css";

export default function Weather() {
    const [city, setCity] = useState("Kyiv");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});

    function displayWeather(response) {
        setLoaded(true);
        setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${
            response.data.weather[0].icon
        }@2x.png`,
        description: response.data.weather[0].description
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = "094780c710fa4efd669f0df8c3991927";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    // let form = (
    //     <div>
    //         <h1>Forecast</h1>
    //         <form onSubmit={handleSubmit}>
    //             <input type="search" placeholder="Enter a city.." onChange={updateCity} />
    //         <button type="Submit">Search</button>
    //         </form>
    //     </div>
    // );

    // if (loaded) {
        return (
        <div>
            <div className="header">
                <h1 className="header-title">
                    Forecast 🌡
                </h1>
                <hr />
                <div className="row search">
                    <form type="submit" onSubmit={handleSubmit} className="row col-10 search-form" id="search-form">
                        <div className="col search-button">
                            <button className="btn btn-info" id="search-button">
                                Search
                            </button>
                        </div>
                        <div className="col-10 search-field">
                            <input
                            type="search"
                            id="city-input"
                            className="search-line"
                            placeholder="Type in your city"
                            onChange={updateCity}
                            />
                        </div>
                    </form>
                    <div className="col current-location-button">
                        <button className="btn btn-info" id="current-location-button">
                            Current location
                        </button>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="row forecast-of-today">
                    <div className="col location">
                        <h1 className="city" id="city-name">{city}</h1>
                    </div>
                    <div className="col weather">
                        <p className="date" id="current-date">
                        </p>
                        <p className="sun-status" id="sun-status">
                            <img className="weather-icon" id="weather-icon" src={weather.icon} alt={weather.description} /><span id="weather-description">{weather.description}</span>
                        </p>
                        <p className="temperature" id="current-temperature">
                            <span id="degrees">{Math.round(weather.temperature)}</span><a href="#" id="unit-of-measurement">°C</a>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <hr className="division" />
                <br />
                <br />
                <div className="row forecasts" id="forecasts">
                </div>
            </div>
            <div className="footer">
                <h6 className="created-by">
                    Created by Anna Sitailo <i className="col fa fa-github" id="github" aria-hidden="true"></i>: <a href="https://github.com/annasitail/homework4-react" target="_blank">github.com/annasitail</a>
                </h6>
            </div>
        </div>
        );
    // } else {
    //     return form;
    // }
}
