import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, loading }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSearch(city.trim());
        }
    };

    const handleQuickSearch = (cityName) => {
        setCity(cityName);
        onSearch(cityName);
    };

    return (
        <div className="search-section">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        className="search-input-field"
                        placeholder="Search for a city..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        className="search-submit-btn"
                        disabled={loading || !city.trim()}
                    >
                        {loading ? (
                            <span className="loading-spinner-small"></span>
                        ) : (
                            'Search'
                        )}
                    </button>
                </div>
            </form>

            <div className="quick-search">
                <p className="quick-search-label">Quick Search:</p>
                <div className="quick-search-buttons">
                    <button
                        onClick={() => handleQuickSearch('Toronto')}
                        className="quick-btn"
                        disabled={loading}
                    >
                        🍁 Toronto
                    </button>
                    <button
                        onClick={() => handleQuickSearch('New York')}
                        className="quick-btn"
                        disabled={loading}
                    >
                        🗽 New York
                    </button>
                    <button
                        onClick={() => handleQuickSearch('London')}
                        className="quick-btn"
                        disabled={loading}
                    >
                        🇬🇧 London
                    </button>
                    <button
                        onClick={() => handleQuickSearch('Tokyo')}
                        className="quick-btn"
                        disabled={loading}
                    >
                        🗾 Tokyo
                    </button>
                    <button
                        onClick={() => handleQuickSearch('Paris')}
                        className="quick-btn"
                        disabled={loading}
                    >
                        🗼 Paris
                    </button>
                    <button
                        onClick={() => handleQuickSearch('Mumbai')}
                        className="quick-btn"
                        disabled={loading}
                    >
                        🇮🇳 Mumbai
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
