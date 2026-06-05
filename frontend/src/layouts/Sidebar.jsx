import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FiHome, FiBriefcase, FiCheckSquare, FiUsers, FiSettings, 
  FiKey, FiBookOpen, FiUser, FiCoffee, FiList, FiLogOut 
} from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the role we just saved during Login (default to admin if none found)
  const userRole = localStorage.getItem('userRole') || 'admin';

  // The Master RBAC (Role-Based Access Control) Matrix
  const menuItems = [
    // Super Admin Links
    { name: 'Dashboard', path: '/dashboard', icon: <FiHome />, roles: ['admin'] },
    { name: 'Platform Directory', path: '/businesses', icon: <FiBriefcase />, roles: ['admin'] },
    { name: 'Business Approvals', path: '/approvals', icon: <FiCheckSquare />, roles: ['admin'] },
    { name: 'User Management', path: '/users', icon: <FiUsers />, roles: ['admin'] },
    
    // Hotel Owner Links
    { name: 'Room Management', path: '/rooms', icon: <FiKey />, roles: ['hotel'] },
    { name: 'Hotel Bookings', path: '/hotel/bookings', icon: <FiBookOpen />, roles: ['hotel'] },

    // PG Owner Links
    { name: 'Bed Allocation', path: '/beds', icon: <FiHome />, roles: ['pg'] },
    { name: 'Active Tenants', path: '/pg/tenants', icon: <FiUser />, roles: ['pg'] },

    // Restaurant Owner Links
    { name: 'Live Table POS', path: '/tables', icon: <FiCoffee />, roles: ['restaurant'] },
    { name: 'Digital Menu', path: '/restaurant/menu', icon: <FiList />, roles: ['restaurant'] },

    // Shared Links (Everyone gets settings)
    { name: 'Settings', path: '/settings', icon: <FiSettings />, roles: ['admin', 'hotel', 'pg', 'restaurant'] },
  ];

  // Filter the menu so the user ONLY sees what they are allowed to see
  const allowedMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  const handleLogout = () => {
    localStorage.removeItem('userRole'); // Clear the session
    navigate('/login');
  };

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col transition-all duration-300">
      
      {/* Brand & Role Display */}
      <div className="h-16 flex flex-col justify-center px-6 border-b border-gray-800 mt-4 mb-4">
        <h1 className="text-2xl font-extrabold text-blue-500 tracking-tight">BizNest.</h1>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
          {userRole} Portal
        </span>
      </div>

      {/* Dynamic Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {allowedMenuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-800">
        <button 
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
        >
          <FiLogOut className="mr-3 text-lg" /> Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;