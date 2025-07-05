
'use client'

import { ShoppingBag, Clock, Users } from "lucide-react";
import { useState } from "react";

const TrendingDeals = () => {
  const [selectedDeal, setSelectedDeal] = useState<number | null>(null);

  const deals = [
    { 
      id: 1, 
      discount: "20%", 
      emoji: "🍝",
      title: "Pasta Special",
      description: "Delicious pasta with fresh ingredients",
      originalPrice: "$25",
      discountedPrice: "$20",
      timeLeft: "2 hours",
      claimed: 45
    },
    { 
      id: 2, 
      discount: "30%", 
      emoji: "🍕",
      title: "Pizza Deal",
      description: "Large pizza with 3 toppings",
      originalPrice: "$30",
      discountedPrice: "$21",
      timeLeft: "5 hours",
      claimed: 32
    },
    { 
      id: 3, 
      discount: "25%", 
      emoji: "🍔",
      title: "Burger Combo",
      description: "Burger, fries and drink included",
      originalPrice: "$18",
      discountedPrice: "$13.50",
      timeLeft: "1 hour",
      claimed: 67
    }
  ];

  const handleDealClick = (dealId: number) => {
    setSelectedDeal(dealId === selectedDeal ? null : dealId);
    console.log(`Deal ${dealId === selectedDeal ? 'deselected' : 'selected'}: ${deals.find(d => d.id === dealId)?.title}`);
  };

  const handleClaimDeal = (dealId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const deal = deals.find(d => d.id === dealId);
    console.log(`Claiming deal: ${deal?.title}`);
    alert(`Deal claimed: ${deal?.title} for ${deal?.discountedPrice}!`);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 animate-slide-in-from-left">
          Trending Deals 🔥
        </h2>
        <button className="text-green-600 hover:text-green-700 transition-colors duration-300 hover:underline">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {deals.map((deal, index) => (
          <div
            key={deal.id}
            onClick={() => handleDealClick(deal.id)}
            className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${
              selectedDeal === deal.id ? 'scale-105 shadow-2xl ring-2 ring-green-500' : ''
            }`}
            style={{
              animationDelay: `${index * 150}ms`,
              animation: 'scale-in 0.8s ease-out forwards'
            }}
          >
            {/* Deal badge */}
            <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse shadow-lg">
              HOT DEAL
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1 animate-bounce">
                  {deal.discount}
                </div>
                <div className="text-2xl font-bold text-green-600">
                  OFF
                </div>
              </div>
              <div className="text-6xl transform hover:scale-110 transition-transform duration-300 hover:rotate-12">
                {deal.emoji}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg text-gray-800">{deal.title}</h3>
              <p className="text-gray-600 text-sm">{deal.description}</p>
              
              {/* Price section */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-green-600">{deal.discountedPrice}</span>
                <span className="text-sm text-gray-400 line-through">{deal.originalPrice}</span>
              </div>

              {/* Deal stats */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock size={14} className="mr-1 text-red-500" />
                  <span>{deal.timeLeft} left</span>
                </div>
                <div className="flex items-center">
                  <Users size={14} className="mr-1 text-blue-500" />
                  <span>{deal.claimed} claimed</span>
                </div>
              </div>

              {/* Expanded content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                selectedDeal === deal.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <button 
                  onClick={(e) => handleClaimDeal(deal.id, e)}
                  className="w-full mt-4 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold"
                >
                  <ShoppingBag className="inline mr-2" size={16} />
                  Claim Deal Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDeals;
