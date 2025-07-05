'use client'

import { Shield, MapPin, Star, Clock, Package, Coffee, Bell, Globe, Phone } from "lucide-react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Verified Locations",
      description: "Only trusted businesses are listed on our platform",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: MapPin,
      title: "Map-Based Navigation", 
      description: "Quickly find places near you with our interactive map",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Star,
      title: "Ratings & Reviews",
      description: "Know the quality before you go with user reviews",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Clock,
      title: "Hourly Hotel Booking",
      description: "Save money by paying per hour instead of full nights",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Package,
      title: "Clockrooms",
      description: "Safely store luggage while exploring the city",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Coffee,
      title: "Waiting & Rest Areas",
      description: "Relax or freshen up during layovers and breaks",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "See availability status and live information",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Access the platform in your preferred language",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Powerful <span className="text-green-600">Features</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes restfree the perfect platform for finding restrooms, hotels, waiting areas, and more
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group flex flex-col items-center bg-gradient-to-br from-blue-100 via-emerald-50 to-white rounded-2xl p-6 md:p-8 text-center relative shadow-lg animate-fade-in-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-emerald-400 shine-effect cursor-pointer`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both',
              }}
            >
              <span className="shine-anim" />
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</div>
              <div className="text-gray-600 text-center">{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-green-50 rounded-lg p-8 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose restfree?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Quality",
                desc: "All locations are personally verified by our team",
                gradient: "from-blue-500 to-emerald-400",
                color: "text-white"
              },
              {
                icon: Star,
                title: "Community Driven",
                desc: "Real reviews from verified users like you",
                gradient: "from-green-500 to-blue-400",
                color: "text-white"
              },
              {
                icon: MapPin,
                title: "Always Reliable",
                desc: "Consistent, trustworthy information you can count on",
                gradient: "from-indigo-500 to-green-400",
                color: "text-white"
              }
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className={`group flex flex-col items-center p-8 rounded-2xl shadow-md bg-gradient-to-br ${feature.gradient} ${feature.color} animate-fade-in-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-white shine-effect`}
                style={{
                  animationDelay: `${idx * 150 + 400}ms`,
                  animationFillMode: 'both',
                }}
              >
                <span className="shine-anim" />
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-10 h-10" />
                </div>
                <div className="text-xl font-bold mb-2">{feature.title}</div>
                <div className="text-base text-center opacity-90">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Coming Soon</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["AI-Powered Recommendations", "Loyalty Program", "Group Bookings", "Mobile App"].map((feature, index) => (
              <span
                key={feature}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-green-100 hover:text-green-700 transition-all duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                {feature}
              </span>
            ))}
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
