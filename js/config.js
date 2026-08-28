/**
 * Meer Holidays Travels — Configuration
 * Central configuration for API endpoints and constants
 */
const CONFIG = {
    // Proxy server (for flight & hotel APIs that need keys)
    PROXY_BASE_URL: 'https://meer-travels-proxy.onrender.com',

    // Direct APIs (free, CORS-enabled, no key needed)
    DB_TRANSPORT_URL: 'https://v5.db.transport.rest',
    OPEN_METEO_URL: 'https://api.open-meteo.com/v1',
    GEOCODING_URL: 'https://geocoding-api.open-meteo.com/v1',
    REST_COUNTRIES_URL: 'https://restcountries.com/v3.1',

    // UI Constants
    RESULTS_PER_PAGE: 10,
    DEBOUNCE_MS: 300,
    AUTOCOMPLETE_MIN_CHARS: 2,
    MAX_AUTOCOMPLETE_RESULTS: 8,

    // Weather codes → emoji + description (WMO standard)
    WEATHER_CODES: {
        0: { icon: '☀️', desc: 'Clear sky' },
        1: { icon: '🌤️', desc: 'Mainly clear' },
        2: { icon: '⛅', desc: 'Partly cloudy' },
        3: { icon: '☁️', desc: 'Overcast' },
        45: { icon: '🌫️', desc: 'Foggy' },
        48: { icon: '🌫️', desc: 'Rime fog' },
        51: { icon: '🌦️', desc: 'Light drizzle' },
        53: { icon: '🌦️', desc: 'Moderate drizzle' },
        55: { icon: '🌧️', desc: 'Dense drizzle' },
        61: { icon: '🌧️', desc: 'Slight rain' },
        63: { icon: '🌧️', desc: 'Moderate rain' },
        65: { icon: '🌧️', desc: 'Heavy rain' },
        71: { icon: '🌨️', desc: 'Slight snow' },
        73: { icon: '🌨️', desc: 'Moderate snow' },
        75: { icon: '❄️', desc: 'Heavy snow' },
        77: { icon: '🌨️', desc: 'Snow grains' },
        80: { icon: '🌦️', desc: 'Rain showers' },
        81: { icon: '🌧️', desc: 'Moderate rain showers' },
        82: { icon: '⛈️', desc: 'Violent rain showers' },
        85: { icon: '🌨️', desc: 'Snow showers' },
        86: { icon: '🌨️', desc: 'Heavy snow showers' },
        95: { icon: '⛈️', desc: 'Thunderstorm' },
        96: { icon: '⛈️', desc: 'Thunderstorm with hail' },
        99: { icon: '⛈️', desc: 'Severe thunderstorm' },
    },

    // Popular destinations for weather & homepage cards
    POPULAR_DESTINATIONS: [
        { name: 'Paris', country: 'France', lat: 48.8566, lon: 2.3522, emoji: '🇫🇷' },
        { name: 'London', country: 'UK', lat: 51.5074, lon: -0.1278, emoji: '🇬🇧' },
        { name: 'Berlin', country: 'Germany', lat: 52.5200, lon: 13.4050, emoji: '🇩🇪' },
        { name: 'Rome', country: 'Italy', lat: 41.9028, lon: 12.4964, emoji: '🇮🇹' },
        { name: 'Barcelona', country: 'Spain', lat: 41.3851, lon: 2.1734, emoji: '🇪🇸' },
        { name: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lon: 4.9041, emoji: '🇳🇱' },
        { name: 'Vienna', country: 'Austria', lat: 48.2082, lon: 16.3738, emoji: '🇦🇹' },
        { name: 'Prague', country: 'Czech Republic', lat: 50.0755, lon: 14.4378, emoji: '🇨🇿' },
    ],
};
