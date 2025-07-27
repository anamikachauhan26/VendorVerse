import React, { useState, useEffect, useRef } from 'react';
import { Search, Navigation, Phone, MapPin, Star, Utensils, User, Loader, AlertCircle } from 'lucide-react';

const MapComponent = ({ userType = 'vendor', currentUser = { name: 'Test User', address: 'Mumbai, Maharashtra' } }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState({ lat: 19.0760, lng: 72.8777 });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [error, setError] = useState(null);

  // Mock data for demonstration - in real app, this would come from Google Places API
  const mockPlaces = [
    {
      id: '1',
      name: 'Trishna Restaurant',
      type: 'restaurant',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.5,
      address: 'Fort, Mumbai',
      phone: '+91 22 2270 3213',
      openNow: true,
      photos: []
    },
    {
      id: '2',
      name: 'Leopold Cafe',
      type: 'restaurant',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.2,
      address: 'Colaba, Mumbai',
      phone: '+91 22 2202 0131',
      openNow: true,
      photos: []
    },
    {
      id: '3',
      name: 'Street Food Corner',
      type: 'vendor',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.0,
      address: 'Mohammed Ali Road, Mumbai',
      phone: '+91 98765 43210',
      openNow: true,
      photos: []
    },
    {
      id: '4',
      name: 'Cafe Mocha',
      type: 'restaurant',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.3,
      address: 'Bandra West, Mumbai',
      phone: '+91 22 2640 9595',
      openNow: false,
      photos: []
    },
    {
      id: '5',
      name: 'Pav Bhaji Stall',
      type: 'vendor',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.1,
      address: 'Juhu Beach, Mumbai',
      phone: '+91 99874 56123',
      openNow: true,
      photos: []
    },
    {
      id: '6',
      name: 'The Table',
      type: 'restaurant',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.6,
      address: 'Colaba, Mumbai',
      phone: '+91 22 6665 5552',
      openNow: true,
      photos: []
    },
    {
      id: '7',
      name: 'Dosa King',
      type: 'vendor',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.4,
      address: 'Matunga, Mumbai',
      phone: '+91 98123 45678',
      openNow: true,
      photos: []
    },
    {
      id: '8',
      name: 'Britannia & Co',
      type: 'restaurant',
      lat: 19.0760 + (Math.random() - 0.5) * 0.02,
      lng: 72.8777 + (Math.random() - 0.5) * 0.02,
      rating: 4.3,
      address: 'Fort, Mumbai',
      phone: '+91 22 2261 5264',
      openNow: false,
      photos: []
    }
  ];

  // Initialize map with Leaflet (as fallback) or mock Google Maps
  useEffect(() => {
    const initializeMap = async () => {
      try {
        setIsLoading(true);
        
        // Simulate map loading
        await new Promise(resolve => setTimeout(resolve, 1000));

        // For demo purposes, we'll use a mock map
        const mockMap = {
          center: userLocation,
          zoom: 14,
          setCenter: (center) => console.log('Setting center to:', center),
          setZoom: (zoom) => console.log('Setting zoom to:', zoom),
          fitBounds: (bounds) => console.log('Fitting bounds:', bounds)
        };

        setMap(mockMap);
        setMapReady(true);
        setIsLoading(false);

        // Load initial nearby places
        await loadNearbyPlaces();

      } catch (error) {
        console.error('Error initializing map:', error);
        setError('Failed to load map. Please refresh the page.');
        setIsLoading(false);
      }
    };

    initializeMap();
  }, []);

  // Load nearby places (fast mock implementation)
  const loadNearbyPlaces = async () => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setNearbyPlaces(mockPlaces);
      console.log('Loaded', mockPlaces.length, 'nearby places');
      
    } catch (error) {
      console.error('Error loading nearby places:', error);
      setError('Failed to load nearby places');
    }
  };

  // Fast search implementation
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert('Please enter a search term');
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      // Simulate search delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // Filter places based on search query
      const filteredPlaces = mockPlaces.filter(place => 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.type.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Add some dynamic results based on search
      const additionalResults = [
        {
          id: `search-${Date.now()}-1`,
          name: `${searchQuery} Restaurant`,
          type: 'restaurant',
          lat: 19.0760 + (Math.random() - 0.5) * 0.02,
          lng: 72.8777 + (Math.random() - 0.5) * 0.02,
          rating: 4.0 + Math.random(),
          address: 'Search Result Area, Mumbai',
          phone: '+91 98000 12345',
          openNow: Math.random() > 0.3,
          photos: []
        },
        {
          id: `search-${Date.now()}-2`,
          name: `Best ${searchQuery} Place`,
          type: Math.random() > 0.5 ? 'restaurant' : 'vendor',
          lat: 19.0760 + (Math.random() - 0.5) * 0.02,
          lng: 72.8777 + (Math.random() - 0.5) * 0.02,
          rating: 4.0 + Math.random(),
          address: 'Popular Area, Mumbai',
          phone: '+91 97000 54321',
          openNow: Math.random() > 0.2,
          photos: []
        }
      ];

      const searchResults = [...filteredPlaces, ...additionalResults];
      setNearbyPlaces(searchResults);
      
      console.log(`Found ${searchResults.length} results for "${searchQuery}"`);

    } catch (error) {
      console.error('Search error:', error);
      setError('Search failed. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isSearching) {
      handleSearch();
    }
  };

  // Contact Modal Component
  const ContactModal = ({ place, onClose }) => {
    const handleCall = () => {
      if (place.phone && place.phone !== 'N/A') {
        window.open(`tel:${place.phone}`, '_self');
      } else {
        alert('Phone number not available');
      }
    };

    const handleDirections = () => {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`, '_blank');
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Contact {place.name}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                {place.type === 'restaurant' ? <Utensils className="w-6 h-6 text-white" /> : <User className="w-6 h-6 text-white" />}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{place.name}</h4>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{place.rating.toFixed(1)}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ml-2 ${
                    place.openNow ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {place.openNow ? 'Open' : 'Closed'}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">{place.address}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{place.phone}</span>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCall}
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call
              </button>
              <button
                onClick={handleDirections}
                className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Directions 
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">
          Find Nearby {userType === 'vendor' ? 'Restaurants' : 'Vendors & Restaurants'}
        </h1>
        <p className="text-gray-600">Discover and connect with local food businesses in your area</p>
        {currentUser?.address && (
          <p className="text-sm text-orange-600 mt-1">📍 {currentUser.address}</p>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Search for restaurants, cafes, food places..."
              disabled={isSearching}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isSearching || !searchQuery.trim()}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSearching ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Searching...
              </>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 md:h-[500px] relative">
              {isLoading ? (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-2"></div>
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                    <p className="text-gray-600">Map showing {nearbyPlaces.length} nearby places</p>
                  </div>
                  
                  {/* Simulated map markers */}
                  {nearbyPlaces.slice(0, 6).map((place, index) => (
                    <div
                      key={place.id}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer transform hover:scale-110 transition-transform ${
                        place.type === 'restaurant' ? 'bg-orange-500' : 'bg-green-500'
                      }`}
                      style={{
                        left: `${20 + (index % 3) * 30}%`,
                        top: `${20 + Math.floor(index / 3) * 40}%`
                      }}
                      onClick={() => setSelectedLocation(place)}
                    >
                      {place.type === 'restaurant' ? 'R' : 'V'}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Places List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            Nearby Places ({nearbyPlaces.length})
            {isSearching && (
              <Loader className="w-4 h-4 animate-spin" />
            )}
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {nearbyPlaces.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all cursor-pointer border border-gray-100"
                onClick={() => setSelectedLocation(place)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{place.name}</h4>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{place.rating.toFixed(1)}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ml-2 ${
                        place.openNow ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {place.openNow ? 'Open' : 'Closed'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{place.address}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    place.type === 'restaurant' ? 'bg-orange-500' : 'bg-green-500'
                  }`}>
                    {place.type === 'restaurant' ? 'R' : 'V'}
                  </div>
                </div>
              </div>
            ))}
            
            {nearbyPlaces.length === 0 && !isLoading && !isSearching && (
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">🔍</div>
                <p>No places found. Try searching for something specific.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {selectedLocation && (
        <ContactModal 
          place={selectedLocation} 
          onClose={() => setSelectedLocation(null)} 
        />
      )}
    </div>
  );
};

export default MapComponent;