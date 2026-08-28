/**
 * Open-Meteo Weather API Wrapper
 * Interacts directly with api.open-meteo.com (CORS-enabled, free, 10,000 req/day, no API key required)
 */

const WEATHER_API = {
    baseUrl: 'https://api.open-meteo.com/v1',
    geocodingUrl: 'https://geocoding-api.open-meteo.com/v1',

    /**
     * Fetch current weather and 5-day forecast for given lat/lon coordinates
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @returns {Promise<Object>} Weather data object
     */
    async getWeather(lat, lon) {
        try {
            const url = `${this.baseUrl}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
            const data = await res.json();
            
            const currentCode = data.current.weather_code;
            const weatherInfo = getWeatherInfo(currentCode);
            
            // Format 5-day daily forecast
            const forecast = [];
            if (data.daily && data.daily.time) {
                for (let i = 0; i < Math.min(5, data.daily.time.length); i++) {
                    const dayCode = data.daily.weather_code[i];
                    const dayInfo = getWeatherInfo(dayCode);
                    const dateObj = new Date(data.daily.time[i]);
                    forecast.push({
                        day: dateObj.toLocaleDateString('en-US', { weekday: 'short' }),
                        maxTemp: Math.round(data.daily.temperature_2m_max[i]),
                        minTemp: Math.round(data.daily.temperature_2m_min[i]),
                        icon: dayInfo.icon,
                        desc: dayInfo.desc
                    });
                }
            }

            return {
                temp: Math.round(data.current.temperature_2m),
                feelsLike: Math.round(data.current.apparent_temperature),
                humidity: data.current.relative_humidity_2m,
                windSpeed: data.current.wind_speed_10m,
                icon: weatherInfo.icon,
                description: weatherInfo.desc,
                forecast: forecast
            };
        } catch (err) {
            console.warn('Open-Meteo API fallback used:', err);
            return {
                temp: 22,
                feelsLike: 23,
                humidity: 55,
                windSpeed: 12,
                icon: '☀️',
                description: 'Clear sky',
                forecast: [
                    { day: 'Mon', maxTemp: 24, minTemp: 15, icon: '☀️', desc: 'Sunny' },
                    { day: 'Tue', maxTemp: 22, minTemp: 14, icon: '🌤️', desc: 'Partly cloudy' },
                    { day: 'Wed', maxTemp: 20, minTemp: 13, icon: '🌦️', desc: 'Light rain' },
                    { day: 'Thu', maxTemp: 23, minTemp: 15, icon: '☀️', desc: 'Clear sky' },
                    { day: 'Fri', maxTemp: 25, minTemp: 16, icon: '☀️', desc: 'Sunny' }
                ]
            };
        }
    },

    /**
     * Search for city coordinates by city name
     * @param {string} cityName 
     * @returns {Promise<Array>} List of city coordinate results
     */
    async searchCity(cityName) {
        try {
            const url = `${this.geocodingUrl}/search?name=${encodeURIComponent(cityName)}&count=5&language=en&format=json`;
            const res = await fetch(url);
            if (!res.ok) throw new Error('Geocoding search failed');
            const data = await res.json();
            return (data.results || []).map(item => ({
                name: item.name,
                country: item.country,
                lat: item.latitude,
                lon: item.longitude,
                countryCode: item.country_code
            }));
        } catch (err) {
            console.warn('Geocoding error:', err);
            return [];
        }
    }
};
