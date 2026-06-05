// src/components/businesses/BusinessTable.jsx
import React from 'react';
import { FiEdit2, FiTrash2, FiMoreVertical } from 'react-icons/fi';

const BusinessTable = ({ data, onDelete, onEdit, onAnalyze }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mt-6">
      <table className="w-full text-left text-sm text-gray-600">
        <thead className="bg-gray-50 text-gray-500 uppercase font-semibold text-xs tracking-wider border-b border-gray-200">
          <tr>
            <th className="px-6 py-4">Business Name</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Owner</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((business) => (
            <tr key={business._id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-900">{business.name}</td>
              <td className="px-6 py-4">{business.category}</td>
              <td className="px-6 py-4">{business.ownerName}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${business.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                  }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${business.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                  {business.status.charAt(0).toUpperCase() + business.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => onEdit(business)}
                    className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(business._id)}
                    className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <FiTrash2 size={16} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors">
                    <FiMoreVertical size={16} />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end gap-3">
                  {/* New Analyze Button */}
                  <button
                    onClick={() => onAnalyze(business._id)}
                    className="text-blue-500 hover:text-blue-700 transition-colors"
                    title="View Health Score"
                  >
                    <FiActivity size={18} />
                  </button>

                  <button onClick={() => onEdit(business)} className="text-gray-500 hover:text-gray-800 transition-colors">
                    <FiEdit2 size={18} />
                  </button>
                  <button onClick={() => onDelete(business._id)} className="text-red-400 hover:text-red-600 transition-colors">
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No businesses found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default BusinessTable;