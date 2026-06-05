import React from 'react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Platform Settings</h1>
      
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Profile Information</h3>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" defaultValue="Admin User" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" defaultValue="admin@biznest.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Notifications</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="email-alerts" type="checkbox" defaultChecked className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="email-alerts" className="font-medium text-gray-700">Email Alerts</label>
                <p className="text-gray-500">Get notified when a new business requests approval.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;