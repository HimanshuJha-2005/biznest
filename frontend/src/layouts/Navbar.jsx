import React from 'react';
import { FiSearch, FiBell, FiUser, FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Uncomment this if your AuthContext is active

const Navbar = () => {
    const navigate = useNavigate();
    // const { user, logout } = useAuth(); // Hook into your global auth state

    const handleLogout = () => {
        // logout(); // Clear the context
        localStorage.removeItem('token'); // Nuke the token
        navigate('/login'); // Kick them back to the login screen
    };

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10 relative">
            {/* Global Search */}
            <div className="flex items-center text-gray-400 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 w-96 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <FiSearch size={18} className="mr-3 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Search across platform..." 
                    className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-900 placeholder-gray-400"
                />
            </div>
            
            {/* Right Side Actions & Profile */}
            <div className="flex items-center gap-6">
                <button className="text-gray-400 hover:text-blue-600 transition-colors relative">
                    <FiBell size={20} />
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </button>
                
                <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                    <div className="text-right hidden md:block">
                        {/* If you uncommented useAuth, change "Admin User" to user?.name */}
                        <p className="text-sm font-semibold text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500 font-medium">Workspace Owner</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center border border-blue-200">
                        <FiUser size={18} />
                    </div>
                    
                    <button 
                        onClick={handleLogout}
                        className="text-gray-400 hover:text-red-600 transition-colors ml-2"
                        title="Logout"
                    >
                        <FiLogOut size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;