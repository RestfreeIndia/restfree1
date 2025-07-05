
'use client'

import { Star, MapPin, Clock, Heart, Phone, Navigation, Bath, Accessibility, Baby, Wifi, AlertCircle } from "lucide-react";
import { useState } from "react";

interface RestaurantCardProps {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  image?: string;
  cuisine?: string;
  price?: string;
  openHours?: string;
  amenities?: string[];
  hasRestroom?: boolean;
  restroomRating?: number;
}

const RestaurantCard = ({ 
  name, 
  rating, 
  reviews, 
  location, 
  image,
  cuisine = "International",
  price = "$$",
  openHours = "Open until 10:00 PM",
  amenities = [],
  hasRestroom = true,
  restroomRating = 4.0
}: RestaurantCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true); // Start with true so images show immediately

  // Dummy restaurant images from Unsplash
  const dummyImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=400&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop&crop=center"
  ];

  const getRandomImage = () => {
    return image || dummyImages[Math.floor(Math.random() * dummyImages.length)];
  };

  const getAmenityIcon = (amenity: string) => {
    switch(amenity) {
      case "wheelchair": return <Accessibility size={16} className="text-blue-500" />;
      case "baby-friendly": return <Baby size={16} className="text-pink-500" />;
      case "gender-neutral": return <Bath size={16} className="text-purple-500" />;
      case "wifi": return <Wifi size={16} className="text-green-500" />;
      case "parking": return <MapPin size={16} className="text-gray-500" />;
      default: return null;
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    console.log(`${isLiked ? 'Unliked' : 'Liked'}: ${name}`);
  };

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
    console.log(`${isExpanded ? 'Collapsed' : 'Expanded'}: ${name}`);
  };

  const handleGetDirections = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Getting directions to: ${name}`);
    window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`, '_blank');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Calling: ${name}`);
    alert(`Calling ${name}...`);
  };

  const handleReportIssue = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Reporting issue for: ${name}`);
    alert(`Report submitted for ${name}. We'll review it shortly.`);
  };

  const handleCheckIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Checking in at: ${name}`);
    alert(`Checked in at ${name}! Enjoy your visit.`);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 dark:border-gray-700 group"
    >      {/* Restaurant Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gray-200 dark:bg-gray-700">
        <img
          src={getRandomImage()}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center";
          }}
        />
        
        {/* Loading Placeholder - only show while loading */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-gray-100 to-emerald-100 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 dark:text-gray-300 text-sm">Loading...</div>
          </div>
        )}

        {/* Price Badge - Top Left */}
        <div className="absolute top-3 left-3 bg-teal-600 dark:bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          {price}
        </div>

        {/* Heart icon - Top Right */}
        <button
          onClick={handleLike}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-lg ${
            isLiked 
              ? 'bg-red-500 text-white' 
              : 'bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700'
          }`}
        >
          <Heart 
            size={16} 
            className={`transition-all duration-300 ${
              isLiked ? 'fill-current animate-pulse' : 'hover:text-red-400'
            }`} 
          />
        </button>

        {/* Restroom Available Badge - Bottom Left */}
        {hasRestroom && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-blue-700 to-emerald-600 dark:from-blue-600 dark:to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-lg">
            <Bath size={14} className="mr-1" />
            Restroom
          </div>
        )}

        {/* Rating Badge - Bottom Right */}
        <div className="absolute bottom-3 right-3 bg-orange-500 dark:bg-orange-400 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star size={14} className="fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Restaurant Name */}
        <h3 className="font-bold text-xl text-gray-800 dark:text-white">
          {name}
        </h3>
        
        {/* Cuisine Type */}
        <p className="text-gray-600 dark:text-gray-300">{cuisine}</p>
        
        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-current mr-1" />
            <span className="font-medium text-gray-800 dark:text-white">{rating}</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">({reviews} reviews)</span>
          <div className="flex text-emerald-600 dark:text-emerald-400 font-medium">
            {price}
          </div>
        </div>
        
        {/* Location */}
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <MapPin size={16} className="mr-1" />
          <span>{location}</span>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="flex items-center gap-2">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                {getAmenityIcon(amenity)}
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button 
            onClick={handleGetDirections}
            className="flex-1 bg-gradient-to-r from-blue-700 to-emerald-600 dark:from-blue-600 dark:to-emerald-500 text-white py-2.5 px-4 rounded-lg hover:from-blue-800 hover:to-emerald-700 dark:hover:from-blue-700 dark:hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium shadow-lg"
          >
            <Navigation size={16} />
            Directions
          </button>
          <button 
            onClick={handleCheckIn}
            className="flex-1 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 py-2.5 px-4 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-medium"
          >
            Check In
          </button>
        </div>

        {/* Opening Hours and Report */}
        <div className="flex items-center justify-between pt-2 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock size={14} className="mr-1" />
            <span>{openHours}</span>
          </div>
          <button 
            onClick={handleReportIssue}
            className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors duration-300 font-medium"
          >
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
