import React from 'react';
import {
  FiHome,
  FiUsers,
  FiCoffee,
  FiBarChart2,
  FiShield,
  FiCpu,
  FiTrendingUp,
  FiMessageSquare,
} from 'react-icons/fi';

const Features = () => {
  const industries = [
    {
      icon: <FiHome size={32} />,
      title: 'Hotels',
      description:
        'Manage room inventory, reservations, occupancy, pricing, and guest operations from one centralized dashboard.',
      color: 'text-blue-600',
      bg: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'PGs & Hostels',
      description:
        'Track bed allocation, tenant onboarding, rent collection, and occupancy across multiple properties.',
      color: 'text-purple-600',
      bg: 'bg-purple-50 dark:bg-purple-950/30',
    },
    {
      icon: <FiCoffee size={32} />,
      title: 'Restaurants',
      description:
        'Visual table management, order tracking, digital menus, reservations, and POS operations.',
      color: 'text-orange-600',
      bg: 'bg-orange-50 dark:bg-orange-950/30',
    },
  ];

  const platformFeatures = [
    {
      icon: <FiBarChart2 />,
      title: 'Real-Time Analytics',
      description:
        'Monitor revenue, occupancy, bookings, tenant activity, and operational performance.',
    },
    {
      icon: <FiShield />,
      title: 'Role-Based Access',
      description:
        'Secure dashboards for Admins, Hotel Owners, PG Owners, and Restaurant Managers.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Business Intelligence',
      description:
        'Transform operational data into actionable insights and growth opportunities.',
    },
  ];

  const aiFeatures = [
    {
      icon: <FiMessageSquare />,
      title: 'Customer Sentiment Analysis',
      description:
        'Automatically analyze customer feedback to identify satisfaction trends and service issues.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Revenue Forecasting',
      description:
        'Predict future revenue trends using historical operational data and ML models.',
    },
    {
      icon: <FiCpu />,
      title: 'Occupancy Prediction',
      description:
        'Forecast occupancy rates and demand patterns to improve business planning.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      {/* HERO */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            Platform Capabilities
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            One Platform.
            <br />
            Three Industries.
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            BizNest unifies operations, analytics, bookings, and business intelligence
            for Hotels, PGs, and Restaurants through a single modern platform.
          </p>

        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-8">

            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
              >

                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}
                >
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

      {/* PLATFORM FEATURES */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built For Daily Operations
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything business owners need to manage and scale efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 flex items-center justify-center text-xl mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
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

              <div className="inline-flex items-center gap-2 mb-4 font-semibold text-blue-100">
                <FiCpu />
                AI Intelligence Layer
              </div>

              <h2 className="text-4xl font-bold mb-5">
                Business Intelligence Powered By AI
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed">
                Beyond management tools, BizNest includes an AI analytics engine
                capable of forecasting revenue trends, predicting occupancy, and
                understanding customer sentiment.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
                >

                  <div className="text-2xl mb-4">
                    {feature.icon}
                  </div>

                  <h3 className="font-bold text-lg mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-blue-100 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* IMPACT */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                500+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Businesses
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                1.2M+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transactions
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                ₹4Cr+
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Revenue Managed
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-blue-600 mb-2">
                99.9%
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Uptime
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Modernize Your Operations?
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Join businesses already managing operations through BizNest.
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

export default Features;