
'use client'

import Image from 'next/image';
import { Clock, MapPin, Star, Wifi, Car, Coffee, Bath } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HotelByHour = () => {
  const hourlyHotels = [
    {
      name: "Quick Stay Express",
      rating: 4.3,
      reviews: 89,
      location: "City Center - 0.8km",
      hourlyRate: "₹300/hr",
      minHours: 2,
      amenities: ["wifi", "parking", "restroom"],
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      availability: "Available Now"
    },
    {
      name: "Budget Rest Inn",
      rating: 4.1,
      reviews: 156,
      location: "Railway Station - 1.2km", 
      hourlyRate: "₹250/hr",
      minHours: 1,
      amenities: ["wifi", "restroom"],
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop",
      availability: "2 rooms left"
    },
    {
      name: "Premium Suites",
      rating: 4.7,
      reviews: 234,
      location: "Business District - 1.5km",
      hourlyRate: "₹500/hr", 
      minHours: 3,
      amenities: ["wifi", "parking", "coffee", "restroom"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      availability: "Available Now"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch(amenity) {
      case "wifi": return <Wifi size={16} className="text-blue-500" />;
      case "parking": return <Car size={16} className="text-green-500" />;
      case "coffee": return <Coffee size={16} className="text-brown-500" />;
      case "restroom": return <Bath size={16} className="text-purple-500" />;
      default: return null;
    }
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Hotels by Hour</h2>
          <p className="text-gray-600 text-sm">Microstay bookings starting from 1 hour</p>
        </div>
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
          View All Hotels
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hourlyHotels.map((hotel, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                <Clock size={12} className="inline mr-1" />
                {hotel.hourlyRate}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                {hotel.availability}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{hotel.name}</CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{hotel.rating}</span>
                  <span className="text-gray-500 ml-1 text-xs">({hotel.reviews})</span>
                </div>
                <span className="text-xs text-gray-500">Min {hotel.minHours}hr</span>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <MapPin size={14} className="mr-1 text-green-600" />
                <span>{hotel.location}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                {hotel.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center">
                    {getAmenityIcon(amenity)}
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HotelByHour;
