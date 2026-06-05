import React, { useState, useEffect } from 'react';
import DashboardLayout from "../layouts/DashboardLayout";
import { businessService } from '../services/businessService';

function Dashboard() {
    const [stats, setStats] = useState({ total: 0, active: 0, growth: "+0%", requests: 0 });
    const [recentActivity, setRecentActivity] = useState([]);
    
    useEffect(() => {
        const loadDashboardData = async () => {
            try {
                // Fetch both stats and recent activity simultaneously 
                const [statsData, activityData] = await Promise.all([
                    businessService.getDashboardStats(),
                    businessService.getRecentActivity()
                ]);
                setStats(statsData);
                setRecentActivity(activityData);
            } catch (error) {
                console.error("Failed to load dashboard data");
            }
        };
        loadDashboardData();
    }, []);

    return (
        <DashboardLayout>
            {/* ... Keep your existing KPI Cards code here ... */}
            
            {/* Recent Activity Feed */}
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    {recentActivity.length > 0 ? (
                        recentActivity.map((business, index) => (
                            <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">{business.name}</p>
                                    <p className="text-xs text-gray-500">Added to {business.category}</p>
                                </div>
                                <span className={`px-2 py-1 text-xs rounded-full ${business.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                    {business.status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500">No recent activity found.</p>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}

export default Dashboard;