
'use client'

import { Filter, MapPin, Baby, Accessibility, Bath, Wifi, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const RestroomFilters = ({ onFiltersChange }: { onFiltersChange: (filters: any) => void }) => {
  const [activeFilters, setActiveFilters] = useState({
    distance: '2km',
    amenities: [] as string[],
    rating: 0,
    availability: 'all'
  });

  const [showFilters, setShowFilters] = useState(false);

  const toggleAmenity = (amenity: string) => {
    const newAmenities = activeFilters.amenities.includes(amenity)
      ? activeFilters.amenities.filter(a => a !== amenity)
      : [...activeFilters.amenities, amenity];
    
    const newFilters = { ...activeFilters, amenities: newAmenities };
    setActiveFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const amenityOptions = [
    { key: 'wheelchair', label: 'Wheelchair Accessible', icon: Accessibility },
    { key: 'baby-friendly', label: 'Baby Changing', icon: Baby },
    { key: 'gender-neutral', label: 'Gender Neutral', icon: Bath },
    { key: 'wifi', label: 'WiFi Available', icon: Wifi }
  ];

  return (
    <div className="mb-6">
      {/* Filter Toggle Button */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => setShowFilters(!showFilters)}
            variant="outline" 
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Filters
            {activeFilters.amenities.length > 0 && (
              <span className="bg-green-600 text-white rounded-full px-2 py-1 text-xs">
                {activeFilters.amenities.length}
              </span>
            )}
          </Button>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-500" />
            <span className="text-sm text-gray-600">Within {activeFilters.distance}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by name or area..."
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="space-y-4">
              {/* Distance Filter */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Distance</h4>
                <div className="flex gap-2">
                  {['500m', '1km', '2km', '5km'].map((distance) => (
                    <Button
                      key={distance}
                      size="sm"
                      variant={activeFilters.distance === distance ? "default" : "outline"}
                      onClick={() => {
                        const newFilters = { ...activeFilters, distance };
                        setActiveFilters(newFilters);
                        onFiltersChange(newFilters);
                      }}
                      className={activeFilters.distance === distance ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {distance}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Amenities Filter */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Amenities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {amenityOptions.map((amenity) => {
                    const Icon = amenity.icon;
                    const isActive = activeFilters.amenities.includes(amenity.key);
                    return (
                      <Button
                        key={amenity.key}
                        size="sm"
                        variant={isActive ? "default" : "outline"}
                        onClick={() => toggleAmenity(amenity.key)}
                        className={`flex items-center gap-2 justify-start ${
                          isActive ? "bg-green-600 hover:bg-green-700" : ""
                        }`}
                      >
                        <Icon size={14} />
                        {amenity.label}
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Minimum Rating</h4>
                <div className="flex gap-2">
                  {[0, 3, 4, 4.5].map((rating) => (
                    <Button
                      key={rating}
                      size="sm"
                      variant={activeFilters.rating === rating ? "default" : "outline"}
                      onClick={() => {
                        const newFilters = { ...activeFilters, rating };
                        setActiveFilters(newFilters);
                        onFiltersChange(newFilters);
                      }}
                      className={activeFilters.rating === rating ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {rating === 0 ? 'Any' : `${rating}+ ⭐`}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Availability</h4>
                <div className="flex gap-2">
                  {[
                    { key: 'all', label: 'All' },
                    { key: 'open', label: 'Open Now' },
                    { key: 'verified', label: 'Verified Only' }
                  ].map((option) => (
                    <Button
                      key={option.key}
                      size="sm"
                      variant={activeFilters.availability === option.key ? "default" : "outline"}
                      onClick={() => {
                        const newFilters = { ...activeFilters, availability: option.key };
                        setActiveFilters(newFilters);
                        onFiltersChange(newFilters);
                      }}
                      className={activeFilters.availability === option.key ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RestroomFilters;
