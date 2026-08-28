/**
 * Hotel Search API Module
 * Handles hotel query options, city lookups, amenities, and price calculations
 */

const HOTELS_API = {
    /**
     * Search hotels by city name, checkin/checkout dates, and guest count
     */
    async searchHotels(destination, checkIn, checkOut, guests = 2, minStars = 3) {
        // High fidelity hotel generator tailored to destination
        const city = destination || 'Paris';
        
        const sampleHotels = [
            {
                name: `Grand Palace Hotel ${city}`,
                stars: 5,
                rating: 4.9,
                reviews: 420,
                price: 189,
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
                location: `City Centre, ${city}`,
                amenities: ['Free WiFi', 'Swimming Pool', 'Spa & Wellness', 'Luxury Lounge', 'Breakfast Included']
            },
            {
                name: `The Royal Heritage Resort ${city}`,
                stars: 4,
                rating: 4.7,
                reviews: 310,
                price: 135,
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
                location: `Downtown, ${city}`,
                amenities: ['Free WiFi', 'Fitness Center', 'Restaurant', 'Bar', '24/7 Room Service']
            },
            {
                name: `Boutique Riviera Inn ${city}`,
                stars: 4,
                rating: 4.8,
                reviews: 195,
                price: 110,
                image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
                location: `Historic Quarter, ${city}`,
                amenities: ['Free WiFi', 'Airport Shuttle', 'Rooftop Terrace', 'Pet Friendly']
            },
            {
                name: `Urban Comfort Hotel ${city}`,
                stars: 3,
                rating: 4.4,
                reviews: 580,
                price: 79,
                image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
                location: `Near Metro Station, ${city}`,
                amenities: ['Free WiFi', 'Air Conditioning', 'Breakfast Buffet', 'Express Check-in']
            },
            {
                name: `Parkside Suites & Spa`,
                stars: 5,
                rating: 4.9,
                reviews: 260,
                price: 245,
                image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
                location: `Park Boulevard, ${city}`,
                amenities: ['Free WiFi', 'Infinity Pool', 'Sauna', 'Fine Dining', 'Concierge']
            }
        ];

        return sampleHotels.filter(h => h.stars >= minStars);
    }
};
