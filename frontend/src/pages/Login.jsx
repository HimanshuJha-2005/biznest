import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // The 1-Click Demo Handler with Strict Role Assignment
  const handleDemoLogin = (role) => {
    // Drop the role into local storage so the whole app knows who is logged in
    localStorage.setItem('userRole', role);
    
    if (role === 'admin') navigate('/dashboard');
    if (role === 'hotel') navigate('/rooms');
    if (role === 'pg') navigate('/beds');
    if (role === 'restaurant') navigate('/tables');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default to admin for manual manual login during testing
    localStorage.setItem('userRole', 'admin'); 
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="text-4xl font-extrabold text-blue-600 tracking-tight">BizNest.</Link>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your dashboard</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="admin@biznest.in" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Sign in
            </button>
          </form>

          {/* DEMO ACCOUNTS SECTION (For Judges) */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-center font-bold text-gray-500 uppercase tracking-wider mb-4">Demo Accounts</p>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => handleDemoLogin('admin')} className="text-xs bg-gray-100 text-gray-800 font-semibold py-2 rounded border border-gray-300 hover:bg-gray-200">Super Admin</button>
              <button onClick={() => handleDemoLogin('hotel')} className="text-xs bg-blue-50 text-blue-700 font-semibold py-2 rounded border border-blue-200 hover:bg-blue-100">Hotel Owner</button>
              <button onClick={() => handleDemoLogin('pg')} className="text-xs bg-teal-50 text-teal-700 font-semibold py-2 rounded border border-teal-200 hover:bg-teal-100">PG Owner</button>
              <button onClick={() => handleDemoLogin('restaurant')} className="text-xs bg-purple-50 text-purple-700 font-semibold py-2 rounded border border-purple-200 hover:bg-purple-100">Restaurant Owner</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;