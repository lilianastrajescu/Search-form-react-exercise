import React, { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let apiKey = "ed55b36e362d8733f7d859247cedeaf2";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(url).then(showWeather);
  };

  function showWeather(response) {
    setWeather(response.data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div>
        {weather && (
          <div>
            <ul>
              <li>Weather in {weather.name}</li>
              <li>Temperature: {Math.round(weather.main.temp)}°C</li>
              <li>Humidity: {weather.main.humidity}%</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
