import React from "react";
import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <PublicNavbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;