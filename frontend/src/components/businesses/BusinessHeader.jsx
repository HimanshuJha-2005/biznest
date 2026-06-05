// src/components/businesses/BusinessHeader.jsx
import React from 'react';

const BusinessHeader = ({ searchQuery, setSearchQuery, onAddClick }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Businesses</h1>
      
      <div className="flex gap-4">
        <input 
          type="text" 
          placeholder="Search businesses..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm w-64"
        />
        
        <button 
          onClick={onAddClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors shadow-sm font-medium"
        >
          Add Business
        </button>
      </div>
    </div>
  );
};

export default BusinessHeader;