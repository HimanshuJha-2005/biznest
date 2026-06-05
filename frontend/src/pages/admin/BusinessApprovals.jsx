import React, { useState } from 'react';
import { mockData } from '../../data/mockBusinessData';
import { FiSearch, FiCheck, FiX, FiMapPin } from 'react-icons/fi';


const BusinessApprovals = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // 1. Gather all "Pending" businesses from our Indian mock data
  const allPending = [
    ...mockData.hotels.filter(b => b.status === 'Pending'),
    ...mockData.pgs.filter(b => b.status === 'Pending'),
    ...mockData.restaurants.filter(b => b.status === 'Pending')
  ];
  const [pendingBusinesses, setPendingBusinesses] =
    useState(allPending);
  const handleApprove = (id) => {
    setPendingBusinesses(prev =>
      prev.filter(biz => biz.id !== id)
    );
  };

  const handleReject = (id) => {
    setPendingBusinesses(prev =>
      prev.filter(biz => biz.id !== id)
    );
  };

  // 2. Filter them based on the search bar
  const filteredPending = allPending.filter(biz =>
    biz.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    biz.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 3. Format INR 
  const formatINR = (num) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Business Approvals</h1>
          <p className="text-sm text-gray-500 mt-1">Review and approve new platform registrations.</p>
        </div>
        <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-lg font-bold text-sm border border-orange-200">
          {filteredPending.length} Pending
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center">
        <FiSearch className="text-gray-400 mr-3" size={20} />
        <input
          type="text"
          placeholder="Search pending requests by name or location..."
          className="w-full bg-transparent border-none focus:ring-0 text-gray-900"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Approvals Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Business Details</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Projected Revenue</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPending.map((biz) => (
              <tr key={biz.id} className="hover:bg-gray-50 transition-colors">

                {/* Details */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-bold text-gray-900 text-base">{biz.name}</div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <FiMapPin className="mr-1 text-gray-400" /> {biz.location}
                  </div>
                </td>

                {/* Revenue */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-mono font-bold text-gray-900">{formatINR(biz.revenue)}</div>
                </td>

                {/* Approve / Reject Buttons */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 rounded-md font-bold transition-colors border border-green-200" onClick={() => handleApprove(biz.id)}>
                    <FiCheck className="mr-1" /> Approve
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded-md font-bold transition-colors border border-red-200" onClick={() => handleReject(biz.id)}>
                    <FiX className="mr-1" /> Reject
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {filteredPending.length === 0 && (
          <div className="p-10 text-center text-gray-500 font-medium">
            No pending approvals found. You are all caught up!
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessApprovals;