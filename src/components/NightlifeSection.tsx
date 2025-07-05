
'use client'

import { Calendar, Clock, MapPin, Star, Users, Music, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NightlifeSection = () => {
  const nightlifeVenues = [
    {
      name: "Pulse Nightclub",
      rating: 4.5,
      reviews: 312,
      location: "Downtown - 1.1km",
      eventTonight: "DJ Night with Live Performance",
      entryFee: "₹800",
      type: "Club",
      image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?w=400&h=300&fit=crop",
      verified: true,
      specialOffer: "Guest list entry - 50% off"
    },
    {
      name: "Brew & Bites Lounge", 
      rating: 4.2,
      reviews: 189,
      location: "Arts Quarter - 0.9km",
      eventTonight: "Live Jazz Night",
      entryFee: "₹500",
      type: "Lounge",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop",
      verified: true,
      specialOffer: "Free appetizer with drinks"
    },
    {
      name: "Skybar Rooftop",
      rating: 4.7,
      reviews: 267,
      location: "Business District - 1.3km", 
      eventTonight: "Saturday Night Party",
      entryFee: "₹1200",
      type: "Rooftop Bar",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
      verified: true,
      specialOffer: "Complimentary welcome drink"
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Tonight's Nightlife</h2>
          <p className="text-gray-600 text-sm">Discover verified venues with restroom access</p>
        </div>
        <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
          <Music size={16} className="mr-2" />
          All Events
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nightlifeVenues.map((venue, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Verified Badge */}
              {venue.verified && (
                <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                  <Zap size={12} className="mr-1" />
                  Verified
                </div>
              )}
              
              {/* Entry Fee */}
              <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                {venue.entryFee}
              </div>
              
              {/* Event Type */}
              <div className="absolute bottom-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
                {venue.type}
              </div>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{venue.name}</CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{venue.rating}</span>
                  <span className="text-gray-500 ml-1 text-xs">({venue.reviews})</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Users size={12} className="mr-1" />
                  Live
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0 space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin size={14} className="mr-1 text-purple-600" />
                <span>{venue.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar size={14} className="mr-1 text-blue-600" />
                <span>{venue.eventTonight}</span>
              </div>
              
              {venue.specialOffer && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-2">
                  <p className="text-xs text-orange-700 font-medium">🎉 {venue.specialOffer}</p>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  Join Event
                </Button>
                <Button variant="outline" size="sm" className="px-3">
                  <MapPin size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NightlifeSection;
