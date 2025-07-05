'use client'

import { Users, Bed, Building, Martini, Shirt, UtensilsCrossed, Coffee, CalendarCheck, Clock, Star, MapPin } from "lucide-react";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const CategoryGrid = () => {
  const router = useRouter();

  const categories = [
    { icon: Users, label: "Restrooms", comingSoon: false },
    { icon: Bed, label: "Hotelrooms", comingSoon: true },
    { icon: UtensilsCrossed, label: "Dine-in", comingSoon: true },
    { icon: Martini, label: "Nightlife", comingSoon: true },
    { icon: Shirt, label: "Clockrooms", comingSoon: true },
    { icon: Coffee, label: "Waiting Tables", comingSoon: true }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
      {categories.map((category, index) => {
        const IconComponent = category.icon;
        return (
          <div
            key={index}
            onClick={() => {
              if (!category.comingSoon && category.label === "Restrooms") {
                router.push('/restrooms');
              } else {
                router.push('/coming-soon');
              }
            }}
            className={
              !category.comingSoon && category.label === "Restrooms"
                ? `flex flex-col items-center justify-center py-4 px-6 rounded-3xl cursor-pointer bg-gradient-to-br from-blue-600 via-emerald-400 to-green-400 text-white shadow-xl relative overflow-hidden transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl shine-effect`
                : `flex flex-col items-center justify-center py-4 px-6 rounded-3xl cursor-pointer bg-gradient-to-br from-gray-100 via-emerald-50 to-blue-50 text-gray-500 border border-dashed border-gray-200 shadow-md relative overflow-hidden transition-transform duration-300 ease-out hover:scale-102 shine-effect`
            }
            style={{ minHeight: 90, minWidth: 140 }}
          >
            <IconComponent 
              size={40} 
              className={'mb-2'} 
            />
            <span className={
              !category.comingSoon && category.label === "Restrooms"
                ? 'text-lg font-semibold text-center'
                : 'text-lg font-medium text-center'
            }>
              {category.label}
            </span>
            {category.comingSoon && (
              <span className="mt-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-sm">Coming Soon</span>
            )}
            {/* Shine overlay */}
            <span className="shine-anim" />
          </div>
        );
      })}
      <style jsx global>{`
        .shine-effect {
          position: relative;
        }
        .shine-anim {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          background: linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.10) 100%);
          opacity: 0.7;
          transform: translateX(-100%) skewX(-20deg);
          animation: shine-move 2.5s infinite linear;
        }
        @keyframes shine-move {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(100%) skewX(-20deg); }
        }
      `}</style>
    </div>
  );
};

export default CategoryGrid;
