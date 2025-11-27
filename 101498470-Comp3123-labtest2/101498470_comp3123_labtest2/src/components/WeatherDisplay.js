import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    name,
    sys,
    main,
    weather,
    wind,
    clouds,
    dt,
  } = weatherData;

  // Format date
  const date = new Date(dt * 1000);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

  // Get weather icon
  const iconCode = weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;

  // Convert temperature to Celsius
  const tempCelsius = Math.round(main.temp);
  const feelsLikeCelsius = Math.round(main.feels_like);
  const tempMin = Math.round(main.temp_min);
  const tempMax = Math.round(main.temp_max);

  // Calculate UV Index (simulated based on cloud cover)
  const uvIndex = clouds.all < 30 ? 'High' : clouds.all < 60 ? 'Moderate' : 'Low';
  const uvValue = clouds.all < 30 ? 8 : clouds.all < 60 ? 5 : 2;

  return (
    <div className="weather-display">
      <div className="weather-grid">
        {/* Main Weather Card - Left Side */}
        <div className="main-weather-card glass-dark">
          <div className="current-day">
            <h3>{dayOfWeek}</h3>
            <p className="current-date">{formattedDate}</p>
            <p className="location-name">{name} - {sys.country}</p>
          </div>

          <div className="weather-icon-large">
            <img src={iconUrl} alt={weather[0].description} />
          </div>

          <div className="main-temperature">
            <h1>{tempCelsius}°C</h1>
            <p className="weather-condition">{weather[0].main}</p>
            <p className="weather-description">{weather[0].description}</p>
          </div>
        </div>

        {/* Weather Details Card - Right Side */}
        <div className="details-weather-card glass-light">
          <div className="location-header">
            <h3>{name} - {sys.country}</h3>
          </div>

          {/* Temperature Range */}
          <div className="temp-range">
            <div className="temp-item">
              <span className="temp-icon">🌡️</span>
              <span className="temp-label">High</span>
              <span className="temp-value">{tempMax}°C</span>
            </div>
            <div className="temp-item">
              <span className="temp-icon">❄️</span>
              <span className="temp-label">Low</span>
              <span className="temp-value">{tempMin}°C</span>
            </div>
          </div>

          {/* Weather Metrics */}
          <div className="weather-metrics">
            <div className="metric-row">
              <span className="metric-label">UV INDEX</span>
              <span className="metric-value">{uvValue} ({uvIndex})</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">HUMIDITY</span>
              <span className="metric-value">{main.humidity}%</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">WIND</span>
              <span className="metric-value">{wind.speed} km/h</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">PRESSURE</span>
              <span className="metric-value">{main.pressure} mb</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">FEELS LIKE</span>
              <span className="metric-value">{feelsLikeCelsius}°C</span>
            </div>
            <div className="metric-row">
              <span className="metric-label">CLOUDINESS</span>
              <span className="metric-value">{clouds.all}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info Bar */}
      <div className="info-bar glass-light">
        <div className="info-item">
          <span className="info-icon">🌅</span>
          <div className="info-content">
            <span className="info-label">Sunrise</span>
            <span className="info-value">
              {new Date(sys.sunrise * 1000).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">🌇</span>
          <div className="info-content">
            <span className="info-label">Sunset</span>
            <span className="info-value">
              {new Date(sys.sunset * 1000).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>
        <div className="info-item">
          <span className="info-icon">👁️</span>
          <div className="info-content">
            <span className="info-label">Visibility</span>
            <span className="info-value">
              {weatherData.visibility ? `${(weatherData.visibility / 1000).toFixed(1)} km` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
