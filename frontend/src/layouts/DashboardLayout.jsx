import React from 'react';
import { Outlet } from 'react-router-dom';
// Simply grab them from the exact same folder
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';
// Destructure 'children' from the props
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        {/* Set the background of the main canvas to the clean gray-50 */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          
          {/* Render children if they exist, otherwise fallback to Outlet */}
          {children ? children : <Outlet />}
          
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;