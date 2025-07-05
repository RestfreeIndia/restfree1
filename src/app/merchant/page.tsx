'use client'

import { Store, TrendingUp, BarChart3, Users, CheckCircle, ArrowRight, DollarSign, Smartphone, Shield, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

export default function Merchant() {
  const [registrationData, setRegistrationData] = useState({
    businessName: "",
    category: "",
    address: "",
    contactEmail: "",
    contactPhone: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Merchant registration submitted:", registrationData);
    alert("Thank you for your interest! We'll contact you within 24 hours to complete the registration process.");
    setRegistrationData({
      businessName: "",
      category: "",
      address: "",
      contactEmail: "",
      contactPhone: "",
      description: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Visibility",
      description: "Get discovered by thousands of users looking for services like yours",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Build Trust",
      description: "Collect and showcase customer reviews to build credibility",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your business performance with detailed insights and metrics",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Store,
      title: "Easy Management",
      description: "Update listings, hours, pricing, and availability in real-time",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const features = [
    "Business Profile Creation",
    "Photo & Video Upload", 
    "Real-time Availability Updates",
    "Customer Review Management",
    "Pricing & Hours Management",
    "Analytics & Reporting",
    "Customer Communication Tools",
    "Promotional Campaign Support"
  ];

  const categories = [
    "Restroom Facilities",
    "Hotels & Accommodations", 
    "Waiting Areas",
    "Clockrooms & Luggage Storage",
    "Cafes & Restaurants",
    "Rest Areas",
    "Transportation Hubs",
    "Shopping Centers"
  ];

  // Stats for the hero card
  const stats = [
    { label: "Monthly Users", value: "500K+" },
    { label: "Partner Businesses", value: "10K+" },
    { label: "Avg. Traffic Increase", value: "40%" },
    { label: "Partner Rating", value: "4.8★" },
  ];

  // Why Partner features
  const whyPartner = [
    {
      icon: <Users size={36} className="text-white" />, title: "Increase Foot Traffic", desc: "Connect with thousands of potential customers actively looking for your services", gradient: "from-blue-500 to-emerald-400"
    },
    {
      icon: <BarChart3 size={36} className="text-white" />, title: "Analytics Dashboard", desc: "Track visitor metrics, peak hours, and customer engagement with detailed insights", gradient: "from-green-500 to-blue-400"
    },
    {
      icon: <Star size={36} className="text-white" />, title: "Customer Reviews", desc: "Build trust with authentic reviews and ratings from verified RestFree users", gradient: "from-indigo-500 to-green-400"
    },
    {
      icon: <Smartphone size={36} className="text-white" />, title: "Mobile-First Approach", desc: "Reach customers on-the-go with our optimized mobile platform", gradient: "from-blue-600 to-green-400"
    },
    {
      icon: <Shield size={36} className="text-white" />, title: "Verified Listings", desc: "Stand out with verified badges and premium listing features", gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <DollarSign size={36} className="text-white" />, title: "Revenue Opportunities", desc: "Monetize your facilities with our flexible pricing and promotion tools", gradient: "from-green-500 to-yellow-400"
    },
  ];

  // Pricing plans
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started",
      features: ["Basic listing with location", "Customer reviews", "Basic analytics", "Mobile app presence"],
      highlight: false,
    },
    {
      name: "Professional",
      price: "$29",
      description: "Best for growing businesses",
      features: ["Everything in Basic", "Premium listing placement", "Advanced analytics dashboard", "Custom business hours"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: ["Everything in Professional", "Multiple location management", "API access"],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 animate-fade-in">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Grow Your Business with RestFree
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl">
              Join thousands of businesses that have increased their foot traffic and revenue by partnering with RestFree. Make your facilities discoverable to customers who need them most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a href="#register" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold text-lg shadow-md hover:scale-105 transition-all">Get Started Free →</a>
              <a href="#demo" className="inline-block px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all">Watch Demo</a>
            </div>
            <div className="flex flex-wrap gap-4 text-gray-500 text-base items-center justify-center lg:justify-start">
              <span className="flex items-center gap-2"><CheckCircle className="text-green-500 w-5 h-5" />Free to start</span>
              <span className="flex items-center gap-2"><CheckCircle className="text-green-500 w-5 h-5" />No setup fees</span>
              <span className="flex items-center gap-2"><CheckCircle className="text-green-500 w-5 h-5" />Cancel anytime</span>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gradient-to-br from-blue-500 to-emerald-400 rounded-2xl p-8 shadow-xl w-full max-w-md text-white">
              <h2 className="text-2xl font-bold mb-2">Quick Stats</h2>
              <p className="mb-6 text-base text-blue-100">See what RestFree can do for you</p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="mb-2">
                    <div className="text-2xl font-extrabold text-yellow-300 mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Partner Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Partner with RestFree?</h2>
          <p className="text-lg text-center text-gray-500 mb-10 max-w-2xl mx-auto">
            We provide the tools and platform you need to attract more customers, increase revenue, and build a stronger business presence in your community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPartner.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group flex flex-col items-center p-8 rounded-2xl shadow-md bg-gradient-to-br ${feature.gradient} text-white animate-fade-in-up transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-transparent hover:border-white shine-effect`}
                style={{
                  animationDelay: `${idx * 120}ms`,
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

        {/* Pricing Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold mb-2">Simple Pricing</span>
            <h2 className="text-4xl font-extrabold mb-2">Choose Your Plan</h2>
            <p className="text-lg text-gray-500">Start free and scale as you grow. All plans include our core features to help you succeed from day one with transparent pricing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={plan.name}
                className={`flex flex-col items-center p-8 rounded-2xl shadow-lg bg-white border-2 ${plan.highlight ? 'border-blue-500 scale-105 z-10' : 'border-gray-100'} animate-fade-in-up transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                style={{
                  animationDelay: `${idx * 120}ms`,
                  animationFillMode: 'both',
                }}
              >
                <div className="text-2xl font-bold mb-2">{plan.name}</div>
                <div className="text-4xl font-extrabold mb-2">{plan.price}{plan.name === 'Professional' && <span className="text-base font-medium"> / month</span>}</div>
                <div className="text-gray-500 mb-4">{plan.description}</div>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> {f}</li>
                  ))}
                </ul>
                <a href="#register" className={`inline-block px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-blue-700 hover:bg-blue-50'}`}>Get Started</a>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-3xl mx-auto mb-16" id="register">
          <div className="bg-gradient-to-br from-blue-100 via-emerald-50 to-white rounded-2xl shadow-lg p-10 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Register Your Business</h2>
            <p className="text-lg text-gray-600 mb-8">Get started with RestFree and grow your customer base today.</p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={registrationData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your business name"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={registrationData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={registrationData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your complete business address"
                />
              </div>
              
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  required
                  value={registrationData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="business@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Phone *
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  required
                  value={registrationData.contactPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="+91-9876-543210"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Description
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={registrationData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your business, services, and what makes you special..."
                />
              </div>
              
              <div className="md:col-span-2">
                <Button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105"
                >
                  Submit Registration
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center mt-16 bg-gray-50 rounded-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-green-600 font-bold text-lg mb-2">Step 1</div>
              <p className="text-gray-600">We review your application within 24 hours</p>
            </div>
            <div>
              <div className="text-green-600 font-bold text-lg mb-2">Step 2</div>
              <p className="text-gray-600">Our team contacts you to verify details</p>
            </div>
            <div>
              <div className="text-green-600 font-bold text-lg mb-2">Step 3</div>
              <p className="text-gray-600">Your business goes live on the platform</p>
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
      <style jsx global>{`
        .shine-effect {
          position: relative;
          overflow: hidden;
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
}
