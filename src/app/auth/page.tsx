'use client'

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      console.log('Login attempt:', formData);
      localStorage.setItem('userType', 'user');
      router.push('/');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Signup attempt:', formData);
      alert('Signup successful!');
      setIsLogin(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="min-h-screen flex bg-transparent">
      {/* Left Side - Blue Gradient Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-emerald-500 relative overflow-hidden">
        {/* Enhanced Decorative circles with glow effect */}
        <div className="absolute top-12 left-12 w-32 h-32 rounded-full border border-white/30 shadow-lg shadow-white/10"></div>
        <div className="absolute top-32 right-20 w-20 h-20 rounded-full border border-white/25"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border border-white/20"></div>
        <div className="absolute top-64 right-32 w-16 h-16 rounded-full border border-white/15"></div>
        <div className="absolute bottom-32 right-12 w-12 h-12 rounded-full border border-white/20"></div>
        
        {/* Enhanced Location icon with better styling - moved to top */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-20 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/30">
            <MapPin size={28} className="text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center text-white p-12 w-full pt-32">
          <div className="text-center max-w-md">
            <h1 className="text-5xl font-bold mb-6">
              Welcome Back!
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Sign in to access your restfree account and continue your journey to find the perfect restrooms.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-white/90">
                <div className="w-3 h-3 rounded-full bg-white/80 mr-4 shadow-lg"></div>
                <span className="text-lg">Find verified restrooms near you</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-3 h-3 rounded-full bg-emerald-300 mr-4 shadow-lg"></div>
                <span className="text-lg">Rate and review facilities</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-3 h-3 rounded-full bg-blue-300 mr-4 shadow-lg"></div>
                <span className="text-lg">Book by-the-hour services</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bottom action button */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <button
              onClick={switchMode}
              className="bg-white/20 backdrop-blur-sm text-white text-xl font-semibold hover:bg-white/30 transition-all duration-300 px-8 py-3 rounded-full border border-white/30 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isLogin ? 'Create Account' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Form Panel */}
      <div className="w-full lg:w-1/2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg flex flex-col border-l border-gray-200/50 dark:border-slate-700/50">
        {/* Enhanced Back to Home Button */}
        <div className="p-6">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-lg group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>
        </div>

        {/* Form Container */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {isLogin ? 'Enter your credentials to access your account' : 'Create your account to get started'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Sign Up only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-md"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-md"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r-lg transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password (Sign Up only) */}
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Confirm your password"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Enhanced Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] relative overflow-hidden group"
              >
                <span className="relative z-10">{isLogin ? 'Sign In' : 'Sign Up'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              {/* Enhanced Forgot Password (Login only) */}
              {isLogin && (
                <div className="text-center">
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Forgot your password?
                  </button>
                </div>
              )}
            </form>

            {/* Enhanced Switch Mode (Mobile) */}
            <div className="lg:hidden text-center mt-8">
              <p className="text-gray-600 dark:text-gray-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={switchMode}
                  className="ml-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1 rounded-lg transition-all duration-200"
                >
                  {isLogin ? 'Sign up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
