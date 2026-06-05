import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

import DashboardLayout from './layouts/DashboardLayout';
import PublicLayout from './layouts/PublicLayout';

import AIChatbot from './components/AIChatbot';

// Public Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Features from './pages/public/Features';
import Pricing from './pages/public/Pricing';
import About from './pages/public/About';
import Blog from './pages/public/Blog';
import Contact from './pages/public/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import Settings from './pages/admin/Settings';
import BusinessApprovals from './pages/admin/BusinessApprovals';

// Business Pages
import Businesses from './pages/Businesses';

// Hotel Pages
import Rooms from './pages/hotel/Rooms';
import BookingManagement from './pages/hotel/BookingManagement';

// PG Pages
import Beds from './pages/pg/Beds';
import TenantManagement from './pages/pg/TenantManagement';

// Restaurant Pages
import Tables from './pages/restaurant/Tables';
import MenuManagement from './pages/restaurant/MenuManagement';

const App = () => {
  return (
    <AuthProvider>
      <Router>

        <Routes>

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>

              {/* Admin */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/approvals" element={<BusinessApprovals />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/settings" element={<Settings />} />

              {/* Platform */}
              <Route path="/businesses" element={<Businesses />} />

              {/* Hotel */}
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/hotel/bookings" element={<BookingManagement />} />

              {/* PG */}
              <Route path="/beds" element={<Beds />} />
              <Route path="/pg/tenants" element={<TenantManagement />} />

              {/* Restaurant */}
              <Route path="/tables" element={<Tables />} />
              <Route path="/restaurant/menu" element={<MenuManagement />} />

            </Route>
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>

        {/* Global Floating AI Assistant */}
        <AIChatbot />

      </Router>
    </AuthProvider>
  );
};

export default App;