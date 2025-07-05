'use client'

import { Button } from "@/components/ui/button";
import { Menu, X, Bell, User, Bookmark, Award } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoLink } from "./Logo";


const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [userType, setUserType] = useState<'user' | 'merchant' | 'admin'>('user');

  // Check local storage for user type on component mount
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setIsLoggedIn(true);
      setUserType(storedUserType as 'user' | 'merchant' | 'admin');
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNotificationClick = () => {
    console.log("Notifications clicked");
    setNotifications(0);
  };

  const handleMerchantClick = () => {
    console.log("Merchant portal clicked");
    if (isLoggedIn && userType === 'merchant') {
      router.push('/merchant-dashboard');
    } else {
      router.push('/merchant');
    }
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      if (userType === 'admin') {
        router.push('/admin');
      } else {
        setShowUserMenu(!showUserMenu);
      }
    } else {
      console.log("Profile clicked - Redirecting to auth page");
      router.push('/auth');
    }
  };

  const handleNavClick = (path: string, name: string) => {
    console.log(`${name} clicked`);
    router.push(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType('user');
    setShowUserMenu(false);
    console.log("User logged out");
    router.push('/');
  };

  return (
    <>
      <header className="w-full dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-40 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <LogoLink imageWidth={32} imageHeight={32} />
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link 
                  href="/how-it-works" 
                  className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105 hover:underline decoration-blue-600 underline-offset-4"
                >
                  How it works
                </Link>
                <Link 
                  href="/features" 
                  className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105 hover:underline decoration-blue-600 underline-offset-4"
                >
                  Features
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 hover:scale-105 hover:underline decoration-blue-600 underline-offset-4"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-3">

              
              {/* Notifications */}
              <button 
                onClick={handleNotificationClick}
                className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 hover:scale-110 rounded-full group"
              >
                <Bell size={20} className="group-hover:text-white transition-colors duration-300" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {notifications}
                  </span>
                )}
              </button>

              {/* User Menu */}
              <div className="relative">
                <button 
                  onClick={handleProfileClick}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 hover:scale-110 rounded-full group"
                >
                  <User size={20} className="group-hover:text-white transition-colors duration-300" />
                </button>

                {/* User Dropdown Menu */}
                {showUserMenu && isLoggedIn && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
                    <button className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center">
                      <User size={16} className="mr-2" />
                      My Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center">
                      <Bookmark size={16} className="mr-2" />
                      Bookmarks
                    </button>
                    <button className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center">
                      <Award size={16} className="mr-2" />
                      Loyalty Points
                    </button>
                    <hr className="my-2 border-gray-100 dark:border-gray-700" />
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Merchant Button */}
              <Button 
                onClick={handleMerchantClick}
                className="bg-gradient-to-r from-blue-700 to-emerald-600 hover:from-blue-800 hover:to-emerald-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
              >
                Merchant
              </Button>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 hover:scale-110 rounded-full group"
              >
                {isMobileMenuOpen ? <X size={24} className="group-hover:text-white transition-colors duration-300" /> : <Menu size={24} className="group-hover:text-white transition-colors duration-300" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <nav className="flex flex-col space-y-4 py-4 border-t border-gray-100 dark:border-gray-800">
              <Link 
                href="/how-it-works" 
                className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="/features" 
                className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-emerald-600 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;