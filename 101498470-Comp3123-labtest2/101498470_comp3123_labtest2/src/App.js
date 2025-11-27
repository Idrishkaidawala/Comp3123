import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';

// OpenWeatherMap API Configuration
const API_KEY = '28a825b9b160db200f3ffc6c83b5b27a';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Fetch weather data on component mount for default city (Toronto)
  useEffect(() => {
    fetchWeatherData('Toronto');
  }, []);

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await axios.get(API_BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });

      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching weather data:', err);

      if (err.response) {
        // The request was made and the server responded with a status code
        if (err.response.status === 404) {
          setError(`City "${city}" not found. Please try another city.`);
        } else if (err.response.status === 401) {
          setError('Invalid API key. Please check your OpenWeatherMap API key.');
        } else {
          setError('Failed to fetch weather data. Please try again.');
        }
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your internet connection.');
      } else {
        // Something happened in setting up the request
        setError('An error occurred. Please try again.');
      }

      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeatherData(city);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <h1 className="app-title">Weather Forecast</h1>
        <p className="app-subtitle">Get real-time weather information for any city</p>
      </header>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} loading={loading} />

      {/* Content Area */}
      <div className="content-area">
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p className="loading-text">Fetching weather data...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <p className="error-message">{error}</p>
          </div>
        )}

        {!loading && !error && weatherData && (
          <WeatherDisplay weatherData={weatherData} />
        )}

        {!loading && !error && !weatherData && !hasSearched && (
          <div className="welcome-container">
            <div className="welcome-icon">🌤️</div>
            <h2 className="welcome-title">Welcome to Weather Forecast</h2>
            <p className="welcome-text">
              Search for any city to get current weather information including temperature,
              humidity, wind speed, and more. Try searching for your city or use one of the
              quick search buttons above!
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Weather data provided by{' '}
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenWeatherMap
          </a>
          {' '} | Created for COMP 3123 Lab Test 2
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
          Student ID: 101498470 | Full Stack Development I
        </p>
      </footer>
    </div>
  );
}

export default App;
