import React, { useState } from 'react';
import { mockData } from '../data/mockBusinessData';
import { FiSearch, FiEdit2, FiTrash2, FiMapPin, FiTrendingUp } from 'react-icons/fi';

const Businesses = () => {
  const [activeTab, setActiveTab] = useState('hotels');
  const [searchTerm, setSearchTerm] = useState('');

  // Select the correct array from our Indian mock data based on the tab
  let currentData = mockData[activeTab];

  // Filter based on search input
  if (searchTerm) {
    currentData = currentData.filter(biz => 
      biz.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      biz.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Format INR for the table
  const formatINR = (num) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Platform Directory</h1>
        
        {/* Category Tabs */}
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg border border-gray-200">
          {['hotels', 'pgs', 'restaurants'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-bold capitalize transition-all ${
                activeTab === tab ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center">
        <FiSearch className="text-gray-400 mr-3" size={20} />
        <input 
          type="text" 
          placeholder={`Search ${activeTab} by name or location...`}
          className="w-full bg-transparent border-none focus:ring-0 text-gray-900"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Business Details</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Financials (Monthly)</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Occupancy</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((biz) => (
              <tr key={biz.id} className="hover:bg-gray-50 transition-colors">
                
                {/* Name & Location */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-bold text-gray-900 text-base">{biz.name}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <FiMapPin className="mr-1 text-gray-400" /> {biz.location}
                  </div>
                </td>

                {/* Financials */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-mono font-bold text-gray-900">{formatINR(biz.revenue)}</div>
                  <div className="text-xs text-green-600 font-bold flex items-center mt-1">
                    <FiTrendingUp className="mr-1" /> {formatINR(biz.profit)} Profit
                  </div>
                </td>

                {/* Occupancy Bar */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                      <div 
                        className={`h-2 rounded-full ${biz.occupancy > 85 ? 'bg-green-500' : biz.occupancy > 70 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                        style={{ width: `${biz.occupancy}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-gray-700">{biz.occupancy}%</span>
                  </div>
                </td>

                {/* Status Badge */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                    biz.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {biz.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                  <button className="text-blue-600 hover:text-blue-900 transition-colors"><FiEdit2 size={18} /></button>
                  <button className="text-red-500 hover:text-red-700 transition-colors"><FiTrash2 size={18} /></button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Empty State Fallback */}
        {currentData.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No businesses found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Businesses;  