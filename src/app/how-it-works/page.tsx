"use client";
import React from "react";
import Header from "@/components/Header";
import { Users, CheckCircle, Shield, MapPin } from "lucide-react";

const steps = [
  {
    icon: <MapPin size={32} className="text-blue-600" />,
    title: "Find Nearby Facilities",
    desc: "Instantly locate restrooms, hotels, and rest areas within 2km using our smart search.",
  },
  {
    icon: <CheckCircle size={32} className="text-emerald-600" />,
    title: "Verified & Trusted",
    desc: "All listings are verified for quality, safety, and reliability by our team.",
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-yellow-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.24 1.18-6.88L2 9.76l6.92-1.01L12 2.5l3.08 6.25L22 9.76l-5.02 4.85 1.18 6.88z" /></svg>
      </span>
    ),
    title: "Community Reviews",
    desc: "Read real reviews from users and share your own experiences to help others.",
  },
  {
    icon: <Shield size={32} className="text-indigo-600" />,
    title: "Seamless Experience",
    desc: "Enjoy a fast, secure, and user-friendly platform on any device, anywhere.",
  },
];

const features = [
  {
    icon: <CheckCircle size={36} className="text-white" />,
    title: "Verified Quality",
    desc: "All locations are personally verified by our team",
    gradient: "from-blue-500 to-emerald-400",
  },
  {
    icon: <Users size={36} className="text-white" />,
    title: "Community Driven",
    desc: "Real reviews from verified users like you",
    gradient: "from-green-500 to-blue-400",
  },
  {
    icon: <Shield size={36} className="text-white" />,
    title: "Always Reliable",
    desc: "Consistent, trustworthy information you can count on",
    gradient: "from-indigo-500 to-green-400",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
            How RestFree Works
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover, review, and trust the best facilities around you—quickly and securely.
          </p>
        </div>
        {/* Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center bg-gradient-to-br from-blue-100 via-emerald-50 to-white rounded-2xl p-6 md:p-8 text-center relative shadow-lg animate-fade-in-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-emerald-400 shine-effect`}
              style={{
                boxShadow: "0 0 0 4px rgba(16,185,129,0.10)",
                animationDelay: `${idx * 120}ms`,
                animationFillMode: 'both',
              }}
            >
              <span className="shine-anim" />
              <div className="relative z-10 mb-3 transition-transform duration-300 group-hover:scale-110 w-12 h-12 flex items-center justify-center">
                {step.icon}
              </div>
              <h2 className="relative z-10 text-lg md:text-xl font-bold mb-2 text-gray-800">{step.title}</h2>
              <p className="relative z-10 text-base md:text-lg text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        {/* Why Choose Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose RestFree?</h2>
          <p className="text-lg text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            We're committed to providing the most reliable and comprehensive platform for your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group flex flex-col items-center p-8 rounded-2xl shadow-md bg-gradient-to-br ${feature.gradient} text-white animate-fade-in-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-white shine-effect`}
                style={{
                  animationDelay: `${idx * 150 + 400}ms`,
                  animationFillMode: 'both',
                }}
              >
                <span className="shine-anim" />
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-base text-center opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action Section */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-100 via-emerald-50 to-white p-10 text-center mb-8 shadow-lg animate-fade-in-up" style={{animationDelay: '900ms', animationFillMode: 'both'}}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">Ready to Start Exploring?</h2>
          <p className="text-lg text-gray-600 mb-6">Join thousands of users who trust RestFree for finding quality facilities</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold text-lg shadow-md hover:scale-105 transition-all">Start Searching Now</a>
            <a href="/features" className="inline-block px-8 py-3 rounded-full bg-white text-blue-700 font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all">Learn More</a>
          </div>
        </div>
      </main>
      <footer className="bg-green-600 text-white py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Restfree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
