import React from 'react';
import {
  FiArrowRight,
  FiHome,
  FiUsers,
  FiCoffee,
  FiCpu,
} from 'react-icons/fi';

const Blog = () => {
  const articles = [
    {
      icon: <FiHome size={28} />,
      category: 'Hotel Management',
      title: 'How Hotels Can Increase Occupancy During Off-Seasons',
      description:
        'Explore pricing strategies, booking optimization, and demand forecasting techniques used by successful hotels.',
    },
    {
      icon: <FiUsers size={28} />,
      category: 'PG Operations',
      title: 'Modernizing Tenant Management Through Automation',
      description:
        'Reduce paperwork, simplify onboarding, and improve occupancy visibility with digital workflows.',
    },
    {
      icon: <FiCoffee size={28} />,
      category: 'Restaurant Growth',
      title: 'Digital Menus, Reservations, and Customer Experience',
      description:
        'How technology is helping restaurants improve efficiency and customer satisfaction.',
    },
    {
      icon: <FiCpu size={28} />,
      category: 'AI & Analytics',
      title: 'Using Predictive Intelligence To Drive Business Decisions',
      description:
        'Learn how forecasting, sentiment analysis, and operational analytics can improve business performance.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      {/* HERO */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            BizNest Insights
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Resources For
            <br />
            Modern Businesses
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Industry insights, operational strategies, and AI-powered business
            intelligence for Hotels, PGs, and Restaurants.
          </p>

        </div>
      </section>

      {/* FEATURED INSIGHT */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-white">

            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-semibold mb-6">
              Featured Insight
            </span>

            <h2 className="text-4xl font-bold mb-6 max-w-3xl">
              Why Business Intelligence Will Define The Next Generation Of Local Businesses
            </h2>

            <p className="text-blue-100 text-lg max-w-3xl leading-relaxed mb-8">
              Operational data is no longer enough. Businesses that leverage
              forecasting, analytics, and AI-powered insights gain a significant
              competitive advantage.
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Read Article
              <FiArrowRight />
            </button>

          </div>

        </div>
      </section>

      {/* ARTICLES */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-8">

            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-xl transition-all"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mb-6">
                  {article.icon}
                </div>

                <span className="text-sm font-semibold text-blue-600">
                  {article.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  {article.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {article.description}
                </p>

                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                  Read More
                  <FiArrowRight />
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest operational insights, product updates, and AI-driven
              business strategies delivered to your inbox.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">

              <input
                type="email"
                placeholder="Enter your email address"
                className="px-5 py-4 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-white md:w-96"
              />

              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Blog;