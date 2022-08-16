import React from "react";
import "./Weather.css";

export default function WeaterTemperature(props) {
  return (
    <div className="WeaterTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
