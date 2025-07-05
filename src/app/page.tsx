'use client'

import React, { useState } from "react";
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import SearchBar from "@/components/SearchBar";
import MapSection from "@/components/MapSection";
import RestaurantCard from "@/components/RestaurantCard";
import TrendingDeals from "@/components/TrendingDeals";
import HotelByNight from "@/components/HotelByNight";
import NightlifeSection from "@/components/NightlifeSection";
import RestroomFilters from "@/components/RestroomFilters";
import RestroomDetailView from "@/components/RestroomDetailView";
import { Clock, MapPin, Star, Wifi, Car, Coffee } from "lucide-react";

export default function Home() {
  const [filters, setFilters] = useState({});
  const [selectedRestroom, setSelectedRestroom] = useState<any>(null);
  const [showRestroomDetail, setShowRestroomDetail] = useState(false);

  const restaurants = [
    { 
      name: "Green Garden Bistro", 
      rating: 4.5, 
      reviews: 125, 
      location: "Downtown Plaza", 
      cuisine: "Organic",
      price: "$$$",
      openHours: "Open until 11:00 PM",
      amenities: ["wheelchair", "baby-friendly", "wifi"],
      hasRestroom: true,
      restroomRating: 4.3
    },
    { 
      name: "Urban Spice Kitchen", 
      rating: 4.8, 
      reviews: 235, 
      location: "Market Street", 
      cuisine: "Asian Fusion",
      price: "$$",
      openHours: "Open until 10:30 PM",
      amenities: ["gender-neutral", "wifi"],
      hasRestroom: true,
      restroomRating: 4.7
    },
    { 
      name: "Coastal Seafood House", 
      rating: 4.2, 
      reviews: 188, 
      location: "Harbor District", 
      cuisine: "Seafood",
      price: "$$$$",
      openHours: "Open until 9:00 PM",
      amenities: ["wheelchair", "parking"],
      hasRestroom: true,
      restroomRating: 4.0
    },
    { 
      name: "Artisan Coffee & Deli", 
      rating: 4.6, 
      reviews: 312, 
      location: "Arts Quarter", 
      cuisine: "Cafe",
      price: "$",
      openHours: "Open until 8:00 PM",
      amenities: ["baby-friendly", "wifi"],
      hasRestroom: true,
      restroomRating: 4.4
    },
    { 
      name: "Mediterranean Delights", 
      rating: 4.4, 
      reviews: 156, 
      location: "Old Town", 
      cuisine: "Mediterranean",
      price: "$$",
      openHours: "Open until 10:00 PM",
      amenities: ["wheelchair", "gender-neutral", "wifi"],
      hasRestroom: true,
      restroomRating: 4.2
    },
    { 
      name: "Local Burger Joint", 
      rating: 4.3, 
      reviews: 289, 
      location: "Food District", 
      cuisine: "American",
      price: "$$",
      openHours: "Open until 11:30 PM",
      amenities: ["parking", "wifi"],
      hasRestroom: true,
      restroomRating: 3.9
    }
  ];

  const handleRestroomClick = (restaurant: any) => {
    setSelectedRestroom(restaurant);
    setShowRestroomDetail(true);
  };

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    console.log('Filters updated:', newFilters);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Find Rest, Anywhere.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover restrooms, hotels, dining, and nightlife with ease within 2km
          </p>
        </div>

        {/* Category Grid */}
        <CategoryGrid />

        {/* Search Bar */}
        <SearchBar />

        {/* Map Section */}
        <MapSection />

        {/* Restroom Discovery Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Nearby Restrooms</h2>
            <button className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300">
              View All
            </button>
          </div>
          {/* Filters */}
          <RestroomFilters onFiltersChange={handleFiltersChange} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
                onClick={() => handleRestroomClick(restaurant)}
              >
                <RestaurantCard {...restaurant} />
              </div>
            ))}
          </div>
        </div>

        {/* Trending Deals */}
        <TrendingDeals />

        {/* Stats Section */}
        <div className="bg-green-50 rounded-2xl p-8 mb-8 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Restfree by Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <p className="text-gray-600">Partner Locations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10k+</div>
              <p className="text-gray-600">Monthly Users</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.8</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2km</div>
              <p className="text-gray-600">Search Radius</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Restfree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
