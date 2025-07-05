'use client'

import { Users, MapPin, Star, TrendingUp, AlertTriangle, CheckCircle, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalUsers: 10547,
    totalMerchants: 342,
    pendingApprovals: 12,
    reportsToReview: 8,
    monthlyVisits: 25680,
    averageRating: 4.2
  };

  const pendingMerchants = [
    { id: 1, name: "Green Cafe Downtown", type: "Restaurant", submitted: "2 hours ago" },
    { id: 2, name: "City Rest Hotel", type: "Hotel", submitted: "1 day ago" },
    { id: 3, name: "Night Pulse Club", type: "Nightlife", submitted: "3 days ago" }
  ];

  const recentReports = [
    { id: 1, location: "Urban Spice Kitchen", issue: "Cleanliness", severity: "medium", time: "30 min ago" },
    { id: 2, location: "Coastal Seafood", issue: "Access", severity: "high", time: "2 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Admin Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your platform and users</p>
        </div>
        <Button variant="outline">Logout</Button>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg p-2 flex mb-8">
        {['overview', 'users', 'merchants', 'reports', 'settings'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md capitalize ${
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-500 mr-2" />
                  <div className="text-2xl font-bold">{stats.totalUsers}</div>
                </div>
                <p className="text-xs text-green-600 mt-2">↑ 12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Merchant Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Building className="w-5 h-5 text-purple-500 mr-2" />
                  <div className="text-2xl font-bold">{stats.totalMerchants}</div>
                </div>
                <p className="text-xs text-green-600 mt-2">↑ 8% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <div className="text-2xl font-bold">{stats.averageRating}</div>
                </div>
                <p className="text-xs text-green-600 mt-2">↑ 0.3 from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Pending Approvals & Reports */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
                  Pending Merchant Approvals
                </CardTitle>
                <CardDescription>
                  {pendingMerchants.length} merchants waiting for review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingMerchants.map(merchant => (
                    <div key={merchant.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div>
                        <div className="font-medium">{merchant.name}</div>
                        <div className="text-sm text-gray-500">{merchant.type} • {merchant.submitted}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-green-600 border-green-600">Approve</Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600">Reject</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4">View All Pending Approvals</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                  Recent Reports
                </CardTitle>
                <CardDescription>
                  {recentReports.length} reports need attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map(report => (
                    <div key={report.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div>
                        <div className="font-medium">{report.location}</div>
                        <div className="text-sm text-gray-500">
                          Issue: {report.issue} • 
                          <span className={`ml-1 ${
                            report.severity === 'high' ? 'text-red-600' : 
                            report.severity === 'medium' ? 'text-amber-600' : 'text-blue-600'
                          }`}>
                            {report.severity} severity
                          </span> • {report.time}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">Review</Button>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4">View All Reports</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {activeTab !== 'overview' && (
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-medium text-gray-800 mb-4 capitalize">{activeTab} Management</h3>
          <p className="text-gray-600 mb-6">This section is under construction</p>
          <Button onClick={() => setActiveTab('overview')}>Return to Overview</Button>
        </div>
      )}
    </div>
  );
}
