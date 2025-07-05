
'use client'

import { MapPin, Navigation, Zap, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const MapSection = () => {
  const [selectedPin, setSelectedPin] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'nearby' | 'rated'>('nearby');
  const [mapCenter, setMapCenter] = useState({ lat: 40.7128, lng: -74.0060 });
  const [zoom, setZoom] = useState(13);
  const mapRef = useRef<HTMLDivElement>(null);

  const mapPins = [
    { id: 1, lat: 40.7128, lng: -74.0060, name: 'Green Cafe', rating: 4.5, type: 'restaurant', distance: '0.2 km' },
    { id: 2, lat: 40.7180, lng: -74.0020, name: 'Rest Stop', rating: 4.2, type: 'restroom', distance: '0.5 km' },
    { id: 3, lat: 40.7090, lng: -74.0100, name: 'Hotel Plaza', rating: 4.8, type: 'hotel', distance: '0.8 km' },
    { id: 4, lat: 40.7150, lng: -73.9950, name: 'Food Court', rating: 4.1, type: 'restaurant', distance: '1.2 km' },
    { id: 5, lat: 40.7200, lng: -74.0080, name: 'Quick Rest', rating: 4.3, type: 'restroom', distance: '0.9 km' }
  ];

  const handlePinClick = (pinId: number) => {
    setSelectedPin(pinId === selectedPin ? null : pinId);
    const pin = mapPins.find(p => p.id === pinId);
    if (pin) {
      setMapCenter({ lat: pin.lat, lng: pin.lng });
      console.log(`Selected location: ${pin.name}`);
    }
  };

  const handleViewModeChange = (mode: 'nearby' | 'rated') => {
    setViewMode(mode);
    console.log(`View mode changed to: ${mode}`);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 1, 18));
    console.log('Zoomed in');
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 1, 1));
    console.log('Zoomed out');
  };

  const handleMyLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMapCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        setZoom(15);
        console.log('Located current position');
      },
      (error) => {
        console.log('Location access denied');
        alert('Please enable location access to use this feature');
      }
    );
  };

  // Convert lat/lng to pixel position for demo purposes
  const getPixelPosition = (lat: number, lng: number) => {
    const centerLat = mapCenter.lat;
    const centerLng = mapCenter.lng;
    const scale = Math.pow(2, zoom - 13);
    
    const x = ((lng - centerLng) * 1000 * scale) + 50;
    const y = ((centerLat - lat) * 1000 * scale) + 50;
    
    return {
      left: `${Math.max(5, Math.min(95, x))}%`,
      top: `${Math.max(5, Math.min(95, y))}%`
    };
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 mb-8 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Find Locations Near You
          </h3>
          <p className="text-gray-600">
            Interactive map with real-time locations
          </p>
        </div>
        
        {/* View Mode Buttons - Positioned like in your design */}
        <div className="flex gap-2">
          <button 
            onClick={() => handleViewModeChange('nearby')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              viewMode === 'nearby'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Navigation className="inline mr-1" size={14} />
            Nearby
          </button>
          <button 
            onClick={() => handleViewModeChange('rated')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
              viewMode === 'rated'
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Zap className="inline mr-1" size={14} />
            Most Rated
          </button>
        </div>
      </div>
      
      {/* Map Container */}
      <div ref={mapRef} className="relative w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl shadow-inner overflow-hidden border-2 border-white">
        {/* Map Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-gray-300/50"></div>
            ))}
          </div>
        </div>
        
        {/* Street lines */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-0.5 bg-gray-400/30 top-1/4"></div>
          <div className="absolute w-full h-0.5 bg-gray-400/30 top-2/4"></div>
          <div className="absolute w-full h-0.5 bg-gray-400/30 top-3/4"></div>
          <div className="absolute h-full w-0.5 bg-gray-400/30 left-1/4"></div>
          <div className="absolute h-full w-0.5 bg-gray-400/30 left-2/4"></div>
          <div className="absolute h-full w-0.5 bg-gray-400/30 left-3/4"></div>
        </div>
        
        {/* Map Pins */}
        {mapPins.map((pin) => {
          const position = getPixelPosition(pin.lat, pin.lng);
          return (
            <div key={pin.id} className="absolute group" style={position}>
              <div
                className={`transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 hover:scale-125 ${
                  selectedPin === pin.id ? 'scale-150 z-20' : 'hover:z-10'
                }`}
                onClick={() => handlePinClick(pin.id)}
              >
                <MapPin 
                  size={selectedPin === pin.id ? 32 : 24} 
                  className={`drop-shadow-lg transition-all duration-300 ${
                    selectedPin === pin.id 
                      ? 'text-red-500 animate-bounce' 
                      : 'text-green-600 hover:text-red-400'
                  }`}
                />
                
                {/* Enhanced Tooltip */}
                <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white rounded-lg shadow-xl border transition-all duration-300 min-w-max ${
                  selectedPin === pin.id 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0'
                }`}>
                  <div className="text-sm font-semibold text-gray-800">{pin.name}</div>
                  <div className="text-xs text-gray-600">★ {pin.rating} • {pin.distance}</div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Ripple effect for selected pin */}
        {selectedPin && (
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={getPixelPosition(
              mapPins.find(p => p.id === selectedPin)?.lat || 0,
              mapPins.find(p => p.id === selectedPin)?.lng || 0
            )}
          >
            <div className="w-16 h-16 bg-green-400 rounded-full opacity-30 animate-ping"></div>
          </div>
        )}
        
        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button 
            onClick={handleZoomIn}
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <Plus size={16} className="text-gray-600" />
          </button>
          <button 
            onClick={handleZoomOut}
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <Minus size={16} className="text-gray-600" />
          </button>
          <button 
            onClick={handleMyLocation}
            className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <Navigation size={16} className="text-gray-600" />
          </button>
        </div>
        
        {/* Current location indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
