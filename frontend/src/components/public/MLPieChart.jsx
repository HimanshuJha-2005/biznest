import React, { useEffect, useState, useRef } from 'react';
import { mockData } from '../../data/mockBusinessData';

const MLPieChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const graphRef = useRef(null);

  // Calculate totals from our Indian dummy data
  const totalHotelProfit = mockData.hotels.reduce((acc, curr) => acc + curr.profit, 0);
  const totalPGProfit = mockData.pgs.reduce((acc, curr) => acc + curr.profit, 0);
  const totalRestProfit = mockData.restaurants.reduce((acc, curr) => acc + curr.profit, 0);
  const totalProfit = totalHotelProfit + totalPGProfit + totalRestProfit;

  // Intersection Observer to trigger animation ONLY when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); // Reset for replay
          setTimeout(() => setIsVisible(true), 150); // Trigger animation
        }
      },
      { threshold: 0.3 }
    );
    if (graphRef.current) observer.observe(graphRef.current);
    return () => observer.disconnect();
  }, []);

  // SVG Pie Chart Math (Radius 40 gives circumference of ~251.3)
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate stroke lengths based on percentage of total profit
  const hotelLength = isVisible ? (totalHotelProfit / totalProfit) * circumference : 0;
  const restLength = isVisible ? (totalRestProfit / totalProfit) * circumference : 0;
  const pgLength = isVisible ? (totalPGProfit / totalProfit) * circumference : 0;

  // Format as Indian Rupees
  const formatINR = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div ref={graphRef} className="w-full bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800 text-white my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: The ML Stats */}
        <div className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Predictive ML Engine Active
          </div>
          <h3 className="text-4xl font-extrabold tracking-tight">
            Profit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Distribution</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our machine learning model ingests real-time data from 30+ active Indian properties to break down platform revenue share and project quarterly margins.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-md bg-blue-500 mr-3 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                <span className="font-medium">Hotels</span>
              </div>
              <div className="text-right">
                <div className="font-bold font-mono text-lg">{formatINR(totalHotelProfit)}</div>
                <div className="text-xs text-blue-400 font-bold">{((totalHotelProfit/totalProfit)*100).toFixed(1)}% Share</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-md bg-purple-500 mr-3 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                <span className="font-medium">Restaurants</span>
              </div>
              <div className="text-right">
                <div className="font-bold font-mono text-lg">{formatINR(totalRestProfit)}</div>
                <div className="text-xs text-purple-400 font-bold">{((totalRestProfit/totalProfit)*100).toFixed(1)}% Share</div>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:bg-gray-800 transition-colors">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-md bg-teal-400 mr-3 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
                <span className="font-medium">PGs / Hostels</span>
              </div>
              <div className="text-right">
                <div className="font-bold font-mono text-lg">{formatINR(totalPGProfit)}</div>
                <div className="text-xs text-teal-400 font-bold">{((totalPGProfit/totalProfit)*100).toFixed(1)}% Share</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Animated Donut Chart */}
        <div className="relative flex justify-center items-center h-[400px]">
          <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl" viewBox="0 0 100 100">
            {/* Background Track */}
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#1f2937" strokeWidth="16" />

            {/* Hotel Slice */}
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#3b82f6" strokeWidth="16"
              strokeDasharray={`${hotelLength} ${circumference}`}
              strokeDashoffset="0"
              className="transition-all duration-1000 ease-out"
            />
            
            {/* Restaurant Slice */}
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#a855f7" strokeWidth="16"
              strokeDasharray={`${restLength} ${circumference}`}
              strokeDashoffset={-(hotelLength)}
              className="transition-all duration-1000 ease-out"
            />

            {/* PG Slice */}
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#2dd4bf" strokeWidth="16"
              strokeDasharray={`${pgLength} ${circumference}`}
              strokeDashoffset={-(hotelLength + restLength)}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          
          {/* Center Total Text (Formatted in Lakhs) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Margin</span>
            <span className="text-4xl font-extrabold text-white font-mono drop-shadow-lg">
              {isVisible ? `₹${(totalProfit / 100000).toFixed(2)}L` : '₹0'}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MLPieChart;