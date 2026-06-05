import React from 'react';
import {
  FiHome,
  FiUsers,
  FiCoffee,
  FiCpu,
  FiTrendingUp,
  FiBarChart2,
} from 'react-icons/fi';

const About = () => {
  const stats = [
    { value: '500+', label: 'Businesses Onboarded' },
    { value: '1.2M+', label: 'Transactions Managed' },
    { value: '₹4Cr+', label: 'Revenue Processed' },
    { value: '99.9%', label: 'Platform Uptime' },
  ];

  const industries = [
    {
      icon: <FiHome size={28} />,
      title: 'Hotels',
      description:
        'Manage reservations, occupancy, room inventory, pricing, and guest experiences from a single dashboard.',
    },
    {
      icon: <FiUsers size={28} />,
      title: 'PGs & Hostels',
      description:
        'Track tenants, rent payments, bed allocation, occupancy, and onboarding workflows efficiently.',
    },
    {
      icon: <FiCoffee size={28} />,
      title: 'Restaurants',
      description:
        'Streamline table management, digital menus, reservations, and customer operations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      {/* HERO */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            About BizNest
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Building The Operating System
            <br />
            For Local Businesses
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            BizNest was created to help Hotels, PGs, and Restaurants replace
            fragmented tools, spreadsheets, and manual workflows with one
            intelligent business platform.
          </p>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-10 md:p-14">

            <div className="max-w-4xl">

              <span className="text-red-500 font-semibold uppercase tracking-wider text-sm">
                The Problem
              </span>

              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
                Local Businesses Deserve Better Software
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Hotels manage bookings through one system. PG owners often rely
                on spreadsheets. Restaurants use separate tools for reservations,
                menus, and operations.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The result is fragmented data, manual processes, operational
                inefficiencies, and limited business visibility.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* SOLUTION */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              The Solution
            </span>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-4 mb-4">
              One Platform. Multiple Industries.
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Built specifically for the operational needs of local businesses.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* AI SECTION */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-white">

            <div className="max-w-3xl mb-12">

              <div className="flex items-center gap-2 text-blue-100 font-semibold mb-4">
                <FiCpu />
                AI Intelligence Layer
              </div>

              <h2 className="text-4xl font-bold mb-5">
                Beyond Management Software
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed">
                BizNest combines operational management with AI-powered
                forecasting and business intelligence, helping owners make
                smarter decisions using their own data.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <FiTrendingUp size={28} className="mb-4" />
                <h3 className="font-bold text-lg mb-3">
                  Revenue Forecasting
                </h3>
                <p className="text-blue-100">
                  Predict future revenue trends using historical business data.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <FiBarChart2 size={28} className="mb-4" />
                <h3 className="font-bold text-lg mb-3">
                  Occupancy Prediction
                </h3>
                <p className="text-blue-100">
                  Forecast demand and improve resource planning.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <FiCpu size={28} className="mb-4" />
                <h3 className="font-bold text-lg mb-3">
                  Sentiment Analysis
                </h3>
                <p className="text-blue-100">
                  Understand customer feedback through AI-powered insights.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Impact At Scale
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-8 text-center"
              >

                <h3 className="text-5xl font-extrabold text-blue-600 mb-3">
                  {stat.value}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready To Modernize Your Business?
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join businesses already using BizNest to simplify operations,
              improve visibility, and unlock AI-powered insights.
            </p>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;