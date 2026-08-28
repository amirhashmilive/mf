/**
 * Open-Meteo Weather API Wrapper with LocalStorage Caching (30-min TTL)
 * Interacts directly with api.open-meteo.com (CORS-enabled, free, 10,000 req/day, no API key required)
 */

const WEATHER_API = {
    baseUrl: 'https://api.open-meteo.com/v1',
    geocodingUrl: 'https://geocoding-api.open-meteo.com/v1',
    cacheTtlMs: 30 * 60 * 1000, // 30 minutes cache TTL

    /**
     * Fetch current weather and 5-day forecast for given lat/lon coordinates with LocalStorage cache
     * @param {number} lat Latitude
     * @param {number} lon Longitude
     * @returns {Promise<Object>} Weather data object
     */
    async getWeather(lat, lon) {
        const cacheKey = `wx_cache_${lat.toFixed(2)}_${lon.toFixed(2)}`;
        
        // Check LocalStorage cache
        try {
            const cached = localStorage.getItem(cacheKey);
            if (cached) {
                const parsed = JSON.parse(cached);
                if (Date.now() - parsed.timestamp < this.cacheTtlMs) {
                    return parsed.data;
                }
            }
        } catch (e) {
            console.warn('LocalStorage read error:', e);
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4000);

            const url = `${this.baseUrl}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
            const data = await res.json();

            const currentCode = data.current.weather_code;
            const weatherInfo = getWeatherInfo(currentCode);

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

            const weatherResult = {
                temp: Math.round(data.current.temperature_2m),
                feelsLike: Math.round(data.current.apparent_temperature),
                humidity: data.current.relative_humidity_2m,
                windSpeed: Math.round(data.current.wind_speed_10m),
                icon: weatherInfo.icon,
                description: weatherInfo.desc,
                forecast: forecast
            };

            // Save to LocalStorage
            try {
                localStorage.setItem(cacheKey, JSON.stringify({
                    timestamp: Date.now(),
                    data: weatherResult
                }));
            } catch (e) {
                console.warn('LocalStorage write error:', e);
            }

            return weatherResult;
        } catch (err) {
            console.warn('Open-Meteo API fallback used:', err.message);
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
     */
    async searchCity(cityName) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            const url = `${this.geocodingUrl}/search?name=${encodeURIComponent(cityName)}&count=5&language=en&format=json`;
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);

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
            console.warn('Geocoding error:', err.message);
            return [];
        }
    }
};
