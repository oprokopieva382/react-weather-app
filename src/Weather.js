import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
        <h1>Hew York</h1>
        <ul>
          <li>Wednesday 7:00</li>
          <li>Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
            ></img>
            6°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}