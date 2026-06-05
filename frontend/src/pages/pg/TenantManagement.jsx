import React from 'react';

const TenantManagement = () => {
  const tenants = [
    { id: 1, name: 'Mike Ross', bed: 'Room A - Bed 1', rentStatus: 'Paid', joinDate: 'Jan 2026' },
    { id: 2, name: 'Harvey Specter', bed: 'Room B - Bed 1', rentStatus: 'Overdue', joinDate: 'March 2026' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Active Tenants</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">Add Tenant</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tenants.map(t => (
          <div key={t.id} className="bg-white shadow-sm rounded-lg border border-gray-200 p-5 flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-gray-900">{t.name}</h3>
              <p className="text-gray-600 text-sm">{t.bed} | Joined: {t.joinDate}</p>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-bold ${t.rentStatus === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {t.rentStatus}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantManagement;