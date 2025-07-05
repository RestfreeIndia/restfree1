'use client';

import React, { useState } from "react";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import RestroomFilters from "@/components/RestroomFilters";
import MapSection from "@/components/MapSection";

const restrooms = [
  { name: "Green Garden Bistro", rating: 4.5, reviews: 125, location: "Downtown Plaza", cuisine: "Organic", price: "$$$", openHours: "Open until 11:00 PM", amenities: ["wheelchair", "baby-friendly", "wifi"], hasRestroom: true, restroomRating: 4.3 },
  { name: "Urban Spice Kitchen", rating: 4.8, reviews: 235, location: "Market Street", cuisine: "Asian Fusion", price: "$$", openHours: "Open until 10:30 PM", amenities: ["gender-neutral", "wifi"], hasRestroom: true, restroomRating: 4.7 },
  { name: "Coastal Seafood House", rating: 4.2, reviews: 188, location: "Harbor District", cuisine: "Seafood", price: "$$$$", openHours: "Open until 9:00 PM", amenities: ["wheelchair", "parking"], hasRestroom: true, restroomRating: 4.0 },
  { name: "Artisan Coffee & Deli", rating: 4.6, reviews: 312, location: "Arts Quarter", cuisine: "Cafe", price: "$", openHours: "Open until 8:00 PM", amenities: ["baby-friendly", "wifi"], hasRestroom: true, restroomRating: 4.4 },
  { name: "Mediterranean Delights", rating: 4.4, reviews: 156, location: "Old Town", cuisine: "Mediterranean", price: "$$", openHours: "Open until 10:00 PM", amenities: ["wheelchair", "gender-neutral", "wifi"], hasRestroom: true, restroomRating: 4.2 },
  { name: "Local Burger Joint", rating: 4.3, reviews: 289, location: "Food District", cuisine: "American", price: "$$", openHours: "Open until 11:30 PM", amenities: ["parking", "wifi"], hasRestroom: true, restroomRating: 3.9 }
];

export default function RestroomsPage() {
  const [filters, setFilters] = useState({});

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
    // Filtering logic can be added here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Find Clean Restrooms Near You
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Discover, filter, and rate public restrooms in your area. Hygiene, accessibility, and comfort—always nearby.
          </p>
        </div>
        {/* Filters */}
        <div className="mb-8">
          <RestroomFilters onFiltersChange={handleFiltersChange} />
        </div>
        {/* Restroom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {restrooms.map((restroom, index) => (
            <div key={index} style={{ animationDelay: `${index * 100}ms`, animation: 'fade-in 0.6s ease-out forwards' }}>
              <RestaurantCard {...restroom} />
            </div>
          ))}
        </div>
        {/* Map Section */}
        <div className="mb-12">
          <MapSection />
        </div>
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