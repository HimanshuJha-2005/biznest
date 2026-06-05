import React from 'react';
import { Link } from 'react-router-dom';
import {
    FiArrowRight, FiBriefcase, FiBarChart2, FiUsers,
    FiCpu, FiMessageSquare, FiTrendingUp
} from 'react-icons/fi';
// ✨ WE ARE IMPORTING THE CENTERED NAVBAR ✨


const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">

            {/* ✨ THIS INJECTS YOUR NEWLY CENTERED COMPONENT ✨ */}

            {/* 🌟 HERO SECTION */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-8 border border-blue-100 dark:border-blue-800/50">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                AI-Powered Business Intelligence Platform
                            </div>

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
                                Run Hotels, PGs &
                                <span className="text-blue-600 block">
                                    Restaurants Smarter
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
                                BizNest centralizes operations, analytics, forecasting,
                                customer insights, and AI-powered decision support into
                                a single enterprise platform built for modern businesses.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/login"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
                                >
                                    Access Dashboard
                                    <FiArrowRight />
                                </Link>

                                <Link
                                    to="/features"
                                    className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                >
                                    Explore Features
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className="bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">

                                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                    <span className="font-semibold">
                                        BizNest AI Dashboard
                                    </span>

                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400">
                                        LIVE
                                    </span>
                                </div>

                                <div className="p-6 space-y-6">

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl">
                                            <p className="text-sm text-gray-500">
                                                Business Health
                                            </p>

                                            <h3 className="text-3xl font-extrabold text-blue-600">
                                                92/100
                                            </h3>
                                        </div>

                                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl">
                                            <p className="text-sm text-gray-500">
                                                Sentiment Score
                                            </p>

                                            <h3 className="text-3xl font-extrabold text-green-600">
                                                Positive
                                            </h3>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Revenue Forecast</span>
                                            <span className="font-bold text-green-600">
                                                +12.4%
                                            </span>
                                        </div>

                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                                            <div className="w-[84%] h-3 bg-blue-600 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
                                        <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                                            AI Recommendation
                                        </div>

                                        <p className="text-gray-700 dark:text-gray-300">
                                            Increase premium room pricing by 5% and launch
                                            weekday promotional campaigns. Projected monthly
                                            growth remains positive based on occupancy trends.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 📊 STATS BANNER */}
            <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 py-10 transition-colors">
                <div className="max-w-6xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1">500+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Active Businesses</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-blue-600 mb-1">1.2M</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Bookings Managed</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1">₹4Cr+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Revenue Tracked</div>
                    </div>
                    <div>
                        <div className="text-4xl font-extrabold text-blue-600 mb-1">99.9%</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Platform Uptime</div>
                    </div>
                </div>
            </section>

            {/* 🎯 PLATFORM OVERVIEW / FEATURES */}
            <section id="features" className="py-24 px-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">One Platform. Multiple Solutions.</h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400 transition-colors">Everything you need to scale your physical business in the digital world.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center rounded-xl mb-6">
                                <FiBriefcase size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Multi-Sided Dashboards</h3>
                            <p className="text-gray-600 dark:text-gray-400">Tailored management portals for Hotels, PGs, Restaurants, and Super Admins. Only see what you need.</p>
                        </div>
                        <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-xl dark:hover:shadow-green-900/20 transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center rounded-xl mb-6">
                                <FiBarChart2 size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Real-Time Analytics</h3>
                            <p className="text-gray-600 dark:text-gray-400">Track revenue, occupancy, and active bookings with real-time KPI aggregations straight from the database.</p>
                        </div>
                        <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-gray-800 hover:shadow-xl dark:hover:shadow-purple-900/20 transition-all transform hover:-translate-y-1">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center rounded-xl mb-6">
                                <FiUsers size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Secure Access</h3>
                            <p className="text-gray-600 dark:text-gray-400">Enterprise-grade JWT authentication and role-based permissions ensure your data is always protected.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🧠 AI/ML FLEX SECTION */}
            <section id="ai-engine" className="py-24 px-10 bg-white dark:bg-black border-y border-gray-200 dark:border-gray-800 transition-colors">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase mb-3 text-sm">
                            <FiCpu size={18} /> Built-in AI Microservice
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Your Business, <br />Driven by <span className="text-blue-600">Machine Learning</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            We don't just store your data; we analyze it. BizNest features a dedicated Python AI engine that instantly grades customer feedback and predicts your financial trajectory.
                        </p>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                                <div className="mt-1 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded flex items-center justify-center flex-shrink-0"><FiMessageSquare /></div>
                                <div>
                                    <strong className="text-gray-900 dark:text-white block mb-1">Sentiment Analysis Engine</strong>
                                    Uses VADER NLP to instantly categorize customer reviews as Positive, Neutral, or Negative.
                                </div>
                            </li>
                            <li className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                                <div className="mt-1 w-8 h-8 bg-green-100 dark:bg-green-900/50 text-green-600 rounded flex items-center justify-center flex-shrink-0"><FiTrendingUp /></div>
                                <div>
                                    <strong className="text-gray-900 dark:text-white block mb-1">Predictive Analytics</strong>
                                    Leverages Pandas and Linear Regression to forecast future occupancy and revenue trends.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
                            <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">
                                <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <FiTrendingUp className="text-blue-600" /> Revenue Forecast
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded font-bold uppercase tracking-wide">Upward Trend</div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-600 dark:text-gray-400">Current Occupancy</span>
                                        <span className="font-bold text-gray-900 dark:text-white">85%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                        <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-gray-800">
                                    <div className="text-xs text-gray-500 mb-1">AI INSIGHT</div>
                                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                        Based on historical data regression, expect a <span className="text-green-500 font-bold">+12.4%</span> increase in revenue over the next 30 days.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 💬 TESTIMONIALS */}
            <section className="py-24 px-10 bg-gray-50 dark:bg-gray-900 transition-colors">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Trusted by Local Businesses</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"BizNest completely automated our hotel front desk. The real-time analytics let us adjust pricing on the fly."</p>
                            <div className="font-bold text-gray-900 dark:text-white">Rahul Sharma</div>
                            <div className="text-sm text-gray-500">Owner, The Grand Stay</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"Managing 50+ hostel beds used to be a nightmare of spreadsheets. Now, everything is tracked in one secure place."</p>
                            <div className="font-bold text-gray-900 dark:text-white">Anita Desai</div>
                            <div className="text-sm text-gray-500">Manager, Sunrise PGs</div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"The AI sentiment analysis instantly tells me how our diners feel about the new menu. Absolute game-changer."</p>
                            <div className="font-bold text-gray-900 dark:text-white">Vikram Singh</div>
                            <div className="text-sm text-gray-500">Founder, Spice Route Cafe</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🚀 CTA SECTION */}
            <section className="py-24 px-10 text-center bg-blue-600 dark:bg-blue-900 text-white transition-colors duration-300">
                <h2 className="text-4xl font-bold mb-6">Ready to transform your business?</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Join the premium SaaS platform built for growth. Get your dashboard setup in less than 5 minutes.</p>
                <Link to="/login" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Start Managing Now
                </Link>
            </section>

            {/* 🏁 FOOTER */}
            <footer className="bg-gray-900 dark:bg-black pt-16 pb-8 px-10 text-gray-400 transition-colors">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>© {new Date().getFullYear()} BizNest Technologies. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;