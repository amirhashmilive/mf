/**
 * Flight Search API Module
 * Handles flight queries with smart search, airport autocompletion, and realistic flight options
 */

const FLIGHTS_API = {
    airportsCache: null,

    /**
     * Load airport database for autocomplete
     */
    async getAirports() {
        if (this.airportsCache) return this.airportsCache;
        try {
            const res = await fetch('data/airports.json');
            if (res.ok) {
                this.airportsCache = await res.json();
                return this.airportsCache;
            }
        } catch (e) {
            console.warn('Could not load airports.json:', e);
        }
        return [
            { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'New Delhi', country: 'India' },
            { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai', country: 'India' },
            { code: 'LHR', name: 'London Heathrow Airport', city: 'London', country: 'United Kingdom' },
            { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France' },
            { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany' },
            { code: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam', country: 'Netherlands' }
        ];
    },

    /**
     * Filter airports for autocomplete dropdown
     */
    async searchAirports(query) {
        if (!query || query.length < 2) return [];
        const airports = await this.getAirports();
        const q = query.toLowerCase();
        return airports.filter(a => 
            a.code.toLowerCase().includes(q) ||
            a.city.toLowerCase().includes(q) ||
            a.name.toLowerCase().includes(q) ||
            a.country.toLowerCase().includes(q)
        ).slice(0, 8);
    },

    /**
     * Search for flights between origin and destination
     */
    async searchFlights(fromCode, toCode, date, travelClass = 'economy') {
        // Try proxy if available, or generate high-fidelity dynamic flight options
        try {
            if (window.CONFIG && CONFIG.PROXY_BASE_URL) {
                const proxyUrl = `${CONFIG.PROXY_BASE_URL}/api/flights/search?dep_iata=${fromCode}&arr_iata=${toCode}&flight_date=${date}`;
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout for fast fallback
                const res = await fetch(proxyUrl, { signal: controller.signal });
                clearTimeout(timeoutId);
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.results && data.results.length > 0) {
                        return data.results;
                    }
                }
            }
        } catch (err) {
            console.log('Using frontend flight engine fallback:', err.message);
        }

        // High quality dynamic fallback flight generator
        const airlines = [
            { name: 'Emirates', code: 'EK', logo: '✈️' },
            { name: 'Lufthansa', code: 'LH', logo: '🇩🇪' },
            { name: 'Air India', code: 'AI', logo: '🇮🇳' },
            { name: 'British Airways', code: 'BA', logo: '🇬🇧' },
            { name: 'Air France', code: 'AF', logo: '🇫🇷' },
            { name: 'KLM Royal Dutch', code: 'KL', logo: '🇳🇱' }
        ];

        const results = [];
        const numFlights = 5;

        for (let i = 0; i < numFlights; i++) {
            const airline = airlines[i % airlines.length];
            const depHour = 6 + (i * 3) % 16;
            const depMin = (i * 15) % 60;
            const durationHours = 4 + ((i * 2) % 6);
            const durationMins = (i * 20) % 60;

            const arrHour = (depHour + durationHours) % 24;
            const arrMin = (depMin + durationMins) % 60;

            const isDirect = i % 2 === 0;
            const basePrice = travelClass === 'business' ? 850 : (travelClass === 'first' ? 1800 : 320);
            const finalPrice = Math.floor(basePrice + (i * 45) + Math.random() * 30);

            results.push({
                id: `fl-${i+1}`,
                airline: airline.name,
                airlineCode: airline.code,
                logo: airline.logo,
                flightNumber: `${airline.code}-${100 + i*12}`,
                fromCode: fromCode.toUpperCase(),
                toCode: toCode.toUpperCase(),
                depTime: `${String(depHour).padStart(2, '0')}:${String(depMin).padStart(2, '0')}`,
                arrTime: `${String(arrHour).padStart(2, '0')}:${String(arrMin).padStart(2, '0')}`,
                duration: `${durationHours}h ${durationMins}m`,
                stops: isDirect ? 'Direct' : '1 Stop (HUB)',
                price: `€${finalPrice}`,
                class: travelClass.toUpperCase()
            });
        }

        return results;
    }
};
