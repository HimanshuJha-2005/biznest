import React from 'react';
import { FiDollarSign, FiBriefcase, FiAlertCircle, FiTrendingUp, FiActivity } from 'react-icons/fi';
import { mockData } from '../../data/mockBusinessData';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate();
  // 1. Calculate Live Stats from our Mock Data
  const allBusinesses = [...mockData.hotels, ...mockData.pgs, ...mockData.restaurants];

  const totalRevenue = allBusinesses.reduce((sum, biz) => sum + biz.revenue, 0);
  const totalProfit = allBusinesses.reduce((sum, biz) => sum + biz.profit, 0);
  const pendingCount = allBusinesses.filter(biz => biz.status === 'Pending').length;

  // Format INR for the cards
  const formatINR = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const totalProperties =
    mockData.hotels.length +
    mockData.restaurants.length +
    mockData.pgs.length;

  const hotelPercentage =
    (mockData.hotels.length / totalProperties) * 100;

  const restaurantPercentage =
    (mockData.restaurants.length / totalProperties) * 100;

  const pgPercentage =
    (mockData.pgs.length / totalProperties) * 100;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Super Admin Overview</h1>
        <p className="text-gray-500 mt-1">Platform-wide metrics and pending action items.</p>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Total Revenue Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total Revenue</p>
              <h3 className="text-3xl font-black text-gray-900 mt-2">{formatINR(totalRevenue)}</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <FiDollarSign size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-green-600">
            <FiTrendingUp className="mr-1" /> +14.2% from last month
          </div>
        </div>

        {/* Platform Margin Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Platform Margin</p>
              <h3 className="text-3xl font-black text-gray-900 mt-2">{formatINR(totalProfit)}</h3>
            </div>
            <div className="p-3 bg-green-50 text-green-600 rounded-xl">
              <FiTrendingUp size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-green-600">
            <FiTrendingUp className="mr-1" /> +8.4% from last month
          </div>
        </div>

        {/* Total Properties Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Active Properties</p>
              <h3 className="text-3xl font-black text-gray-900 mt-2">{allBusinesses.length}</h3>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <FiBriefcase size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-gray-500">
            Across 12 Indian Cities
          </div>
        </div>

        {/* Pending Approvals Card (Actionable) */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-sm border border-orange-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-orange-600 uppercase tracking-wider">Pending Approvals</p>
              <h3 className="text-3xl font-black text-orange-900 mt-2">{pendingCount}</h3>
            </div>
            <div className="p-3 bg-white text-orange-500 rounded-xl shadow-sm">
              <FiAlertCircle size={24} />
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => navigate('/approvals')}
            >
              Review Now →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section: Activity Feed & Quick Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <FiActivity className="mr-2 text-blue-600" /> Platform Activity
            </h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">View All</button>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-4"></div>
              <div>
                <p className="text-sm font-bold text-gray-900">New Booking Processed</p>
                <p className="text-xs text-gray-500">Grand Taj Hotel - Room 201 booked by Priya Patel.</p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 mr-4"></div>
              <div>
                <p className="text-sm font-bold text-gray-900">Business Registration Request</p>
                <p className="text-xs text-gray-500">Saffron Lounge (Jubilee Hills) submitted onboarding documents.</p>
                <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500 mr-4"></div>
              <div>
                <p className="text-sm font-bold text-gray-900">Rent Payment Cleared</p>
                <p className="text-xs text-gray-500">Sunrise Boys PG - ₹8,000 processed for Bed A1.</p>
                <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Distribution */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Property Distribution</h2>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-gray-700">Hotels</span>
                <span className="text-gray-500">{mockData.hotels.length}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${hotelPercentage}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-gray-700">Restaurants</span>
                <span className="text-gray-500">{mockData.restaurants.length}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${restaurantPercentage}%` }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-bold text-gray-700">PGs & Hostels</span>
                <span className="text-gray-500">{mockData.pgs.length}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-teal-500 h-2 rounded-full" style={{ width: `${pgPercentage}%` }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;