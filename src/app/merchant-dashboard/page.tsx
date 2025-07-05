'use client'

import { Star, MapPin, TrendingUp, Users, Clock, Settings, Upload, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function MerchantDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const merchantData = {
    businessName: "Green Garden Bistro",
    rating: 4.5,
    totalVisits: 1247,
    monthlyVisits: 89,
    restroomRating: 4.3,
    tier: "Verified",
    isOpen: true
  };

  const recentActivity = [
    { time: "2 hours ago", action: "User checked in", rating: 5 },
    { time: "4 hours ago", action: "Restroom rating received", rating: 4 },
    { time: "1 day ago", action: "User checked in", rating: 5 },
    { time: "2 days ago", action: "Photos updated", rating: null }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{merchantData.businessName}</h1>
              <div className="flex items-center text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>{merchantData.rating}</span>
                </div>
                <span>•</span>
                <span>{merchantData.tier}</span>
                <span>•</span>
                <div className={`flex items-center ${merchantData.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                  <span className={`mr-1 w-2 h-2 rounded-full ${merchantData.isOpen ? 'bg-green-600' : 'bg-red-600'}`}></span>
                  <span>{merchantData.isOpen ? 'Open' : 'Closed'}</span>
                </div>
              </div>
            </div>
            <div className="space-x-3">
              <Button variant="outline" className="space-x-2">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </Button>
              <Button variant="default" className="bg-green-600 hover:bg-green-700 space-x-2">
                <span>{merchantData.isOpen ? 'Mark as Closed' : 'Mark as Open'}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg p-2 flex mb-8 overflow-x-auto">
          {['overview', 'analytics', 'reviews', 'photos', 'settings'].map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md capitalize whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-green-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Based on Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Total Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{merchantData.totalVisits}</div>
                  <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Monthly Visitors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{merchantData.monthlyVisits}</div>
                  <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Restaurant Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">{merchantData.rating}</div>
                    <Star className="w-5 h-5 text-yellow-500 ml-2" />
                  </div>
                  <p className="text-xs text-green-600 mt-2">↑ 0.2 from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Restroom Rating</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="text-2xl font-bold">{merchantData.restroomRating}</div>
                    <Star className="w-5 h-5 text-yellow-500 ml-2" />
                  </div>
                  <p className="text-xs text-green-600 mt-2">↑ 0.1 from last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest interactions with your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div>
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-gray-500">{activity.time}</div>
                      </div>
                      {activity.rating && (
                        <div className="flex items-center">
                          <span className="font-medium mr-1">{activity.rating}</span>
                          <Star className="w-4 h-4 text-yellow-500" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4">View All Activity</Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button className="bg-blue-600 hover:bg-blue-700 h-auto py-6 flex flex-col">
                <Upload className="h-8 w-8 mb-2" />
                <span>Update Photos</span>
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 h-auto py-6 flex flex-col">
                <BarChart3 className="h-8 w-8 mb-2" />
                <span>View Full Analytics</span>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 h-auto py-6 flex flex-col">
                <Users className="h-8 w-8 mb-2" />
                <span>Manage Reviews</span>
              </Button>
            </div>
          </div>
        )}

        {activeTab !== 'overview' && (
          <div className="bg-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-medium text-gray-800 mb-4 capitalize">{activeTab} Panel</h3>
            <p className="text-gray-600 mb-6">This section is under construction</p>
            <Button onClick={() => setActiveTab('overview')}>Return to Overview</Button>
          </div>
        )}
      </div>
    </div>
  );
}
