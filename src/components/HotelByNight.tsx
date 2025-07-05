
'use client'

import { Moon, Clock, Luggage, Coffee, Bed, MapPin, Star, Wifi, Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HotelByNight = () => {
  const [activeTab, setActiveTab] = useState("night");

  const hotelTypes = [
    { key: "night", label: "Hotel by Night", icon: Moon },
    { key: "hour", label: "Hotel by Hour", icon: Clock },
    { key: "waiting", label: "Waiting Areas", icon: Coffee },
    { key: "clockrooms", label: "Cloak Rooms", icon: Luggage },
    { key: "rest", label: "Rest Areas", icon: Bed }
  ];

  const nightHotels = [
    {
      name: "Moonlight Suites",
      rating: 4.6,
      reviews: 234,
      location: "Downtown - 1.2km",
      nightRate: "₹2,500/night",
      checkIn: "6:00 PM",
      checkOut: "12:00 PM",
      amenities: ["wifi", "parking", "restroom", "24hr-service"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      availability: "Available Tonight"
    },
    {
      name: "Starlight Lodge",
      rating: 4.4,
      reviews: 189,
      location: "City Center - 0.8km",
      nightRate: "₹1,800/night",
      checkIn: "7:00 PM",
      checkOut: "11:00 AM",
      amenities: ["wifi", "restroom", "breakfast"],
      image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
      availability: "3 rooms left"
    },
    {
      name: "Night Haven Hotel",
      rating: 4.8,
      reviews: 312,
      location: "Business District - 1.5km",
      nightRate: "₹3,200/night",
      checkIn: "5:00 PM",
      checkOut: "1:00 PM",
      amenities: ["wifi", "parking", "restroom", "gym", "spa"],
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      availability: "Available Tonight"
    }
  ];

  const waitingAreas = [
    {
      name: "Central Station Lounge",
      rating: 4.2,
      reviews: 156,
      location: "Railway Station - 0.2km",
      hourlyRate: "₹100/hr",
      amenities: ["wifi", "restroom", "charging"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      availability: "Open 24/7"
    },
    {
      name: "Airport Rest Zone",
      rating: 4.5,
      reviews: 298,
      location: "Airport Terminal - 0.1km",
      hourlyRate: "₹150/hr",
      amenities: ["wifi", "restroom", "charging", "food"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop",
      availability: "Available Now"
    }
  ];

  const cloakRooms = [
    {
      name: "SecureStore Central",
      rating: 4.7,
      reviews: 445,
      location: "Shopping Mall - 0.5km",
      hourlyRate: "₹50/bag/day",
      amenities: ["security", "24hr-access", "insurance"],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
      availability: "Available"
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch(amenity) {
      case "wifi": return <Wifi size={16} className="text-blue-500" />;
      case "parking": return <Car size={16} className="text-green-500" />;
      case "restroom": return <Coffee size={16} className="text-purple-500" />;
      case "24hr-service": return <Clock size={16} className="text-orange-500" />;
      case "charging": return <Clock size={16} className="text-yellow-500" />;
      case "security": return <Luggage size={16} className="text-red-500" />;
      default: return null;
    }
  };

  const getCurrentData = () => {
    switch(activeTab) {
      case "night": return nightHotels;
      case "waiting": return waitingAreas;
      case "clockrooms": return cloakRooms;
      case "rest": return waitingAreas;
      default: return nightHotels;
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Accommodation Services</h2>
          <p className="text-gray-600 text-sm">Find the perfect stay or service for your needs</p>
        </div>
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
          View All Options
        </Button>
      </div>

      {/* Responsive Tab Navigation */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-2">
          {hotelTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Button
                key={type.key}
                variant={activeTab === type.key ? "default" : "outline"}
                onClick={() => setActiveTab(type.key)}
                className={`flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm px-3 py-2 ${
                  activeTab === type.key 
                    ? "bg-green-600 hover:bg-green-700 text-white" 
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{type.label}</span>
                <span className="sm:hidden">{type.label.split(' ')[0]}</span>
              </Button>
            );
          })}
        </div>
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {getCurrentData().map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                {activeTab === "night" ? (
                  <Moon size={12} className="inline mr-1" />
                ) : (
                  <Clock size={12} className="inline mr-1" />
                )}
                {activeTab === "night" ? 
                  // @ts-ignore - Type safety handled by conditional rendering
                  item.nightRate : 
                  // @ts-ignore - Type safety handled by conditional rendering
                  item.hourlyRate
                }
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                {item.availability}
              </div>
            </div>
            
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-gray-500 ml-1 text-xs">({item.reviews})</span>
                </div>
                {activeTab === "night" && 'checkIn' in item && 'checkOut' in item && (
                  <span className="text-xs text-gray-500">
                    {item.checkIn} - {item.checkOut}
                  </span>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <MapPin size={14} className="mr-1 text-green-600" />
                <span>{item.location}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {item.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center">
                    {getAmenityIcon(amenity)}
                  </div>
                ))}
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-sm">
                {activeTab === "clockrooms" ? "Reserve Storage" : "Book Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HotelByNight;
