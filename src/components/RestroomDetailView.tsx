
'use client'

import { Star, MapPin, Clock, Phone, Navigation, Bath, Camera, Flag, CheckCircle, X, Accessibility, Baby, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface RestroomDetailViewProps {
  isOpen: boolean;
  onClose: () => void;
  restroomData: {
    name: string;
    rating: number;
    restroomRating: number;
    location: string;
    image: string;
    amenities: string[];
    hours: string;
    phone?: string;
    verified: boolean;
  };
}

const RestroomDetailView = ({ isOpen, onClose, restroomData }: RestroomDetailViewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!isOpen) return null;

  const restroomImages = [
    restroomData.image,
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop"
  ];

  const getAmenityIcon = (amenity: string) => {
    switch(amenity) {
      case "wheelchair": return <Accessibility size={20} className="text-blue-500" />;
      case "baby-friendly": return <Baby size={20} className="text-pink-500" />;
      case "gender-neutral": return <Bath size={20} className="text-purple-500" />;
      case "wifi": return <Wifi size={20} className="text-green-500" />;
      default: return null;
    }
  };

  const getAmenityLabel = (amenity: string) => {
    switch(amenity) {
      case "wheelchair": return "Wheelchair Accessible";
      case "baby-friendly": return "Baby Changing Station";
      case "gender-neutral": return "Gender Neutral";
      case "wifi": return "WiFi Available";
      default: return amenity;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Restroom Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img
                src={restroomImages[currentImageIndex]}
                alt="Restroom"
                className="w-full h-full object-cover"
              />
            </div>
            
            {restroomImages.length > 1 && (
              <div className="flex gap-2 mt-3">
                {restroomImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index ? 'border-green-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Basic Info */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-gray-800">{restroomData.name}</h3>
              {restroomData.verified && (
                <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  <CheckCircle size={14} />
                  Verified
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current" size={18} />
                <span className="font-medium">{restroomData.rating}</span>
                <span className="text-gray-500 text-sm">(Overall)</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="text-blue-500" size={18} />
                <span className="font-medium">{restroomData.restroomRating}</span>
                <span className="text-gray-500 text-sm">(Restroom)</span>
              </div>
            </div>

            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={16} className="mr-2 text-green-600" />
              <span>{restroomData.location}</span>
            </div>

            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2 text-blue-500" />
              <span>{restroomData.hours}</span>
            </div>
          </div>

          {/* Amenities */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800 mb-3">Available Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {restroomData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    {getAmenityIcon(amenity)}
                    <span className="text-sm font-medium">{getAmenityLabel(amenity)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cleanliness Info */}
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800 mb-3">Cleanliness & Maintenance</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Last cleaned:</span>
                  <span className="text-sm font-medium">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Supplies available:</span>
                  <span className="text-sm font-medium text-green-600">✓ All stocked</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Next maintenance:</span>
                  <span className="text-sm font-medium">In 4 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
              onClick={() => {
                window.open(`https://maps.google.com/?q=${encodeURIComponent(restroomData.location)}`, '_blank');
              }}
            >
              <Navigation size={16} />
              Get Directions
            </Button>
            
            {restroomData.phone && (
              <Button 
                variant="outline" 
                className="flex items-center justify-center gap-2"
                onClick={() => window.open(`tel:${restroomData.phone}`, '_self')}
              >
                <Phone size={16} />
                Call
              </Button>
            )}
          </div>

          {/* Report Issue */}
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center gap-2 text-red-600 border-red-300 hover:bg-red-50"
            onClick={() => {
              alert('Report submitted. Thank you for helping us maintain quality!');
            }}
          >
            <Flag size={16} />
            Report Issue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestroomDetailView;
