import React from 'react';
import { FiCheck, FiCpu, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for single-property owners',
      price: '₹999',
      highlight: false,
      features: [
        '1 Business Location',
        'Booking & Reservation Management',
        'Room / Bed / Table Tracking',
        'Basic Analytics Dashboard',
        'Email Support',
      ],
    },
    {
      name: 'Growth',
      subtitle: 'Built for growing businesses',
      price: '₹2,999',
      highlight: true,
      features: [
        'Up to 5 Business Locations',
        'Advanced Analytics',
        'Revenue Forecasting',
        'Occupancy Prediction',
        'Customer Sentiment Analysis',
        'Priority Support',
      ],
    },
    {
      name: 'Enterprise',
      subtitle: 'For multi-location chains',
      price: 'Custom',
      highlight: false,
      features: [
        'Unlimited Locations',
        'Dedicated Account Manager',
        'Custom Integrations',
        'API Access',
        'White Label Support',
        'Enterprise Security',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      {/* HERO */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            Pricing Plans
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Pricing That Grows
            <br />
            With Your Business
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether you're managing a single property or operating multiple
            locations, BizNest provides the tools needed to scale efficiently.
          </p>

        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Hotels
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manage bookings, occupancy, room inventory, and guest operations.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                PGs & Hostels
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track tenants, rent collection, occupancy, and bed allocation.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Restaurants
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manage tables, reservations, digital menus, and customer flow.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-3 gap-8">

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl border p-8 ${
                  plan.highlight
                    ? 'bg-blue-600 text-white border-blue-700 shadow-2xl scale-[1.02]'
                    : 'bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800'
                }`}
              >

                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-bold shadow">
                    Most Popular
                  </div>
                )}

                <h3
                  className={`text-2xl font-bold ${
                    plan.highlight
                      ? 'text-white'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`mt-2 ${
                    plan.highlight
                      ? 'text-blue-100'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="mt-8">

                  <span className="text-5xl font-extrabold">
                    {plan.price}
                  </span>

                  {plan.price !== 'Custom' && (
                    <span
                      className={`ml-2 ${
                        plan.highlight
                          ? 'text-blue-100'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      /month
                    </span>
                  )}

                </div>

                <ul className="mt-10 space-y-4">

                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <FiCheck className="mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <button
                  className={`w-full mt-10 py-3 rounded-xl font-semibold transition-colors ${
                    plan.highlight
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.name === 'Enterprise'
                    ? 'Contact Sales'
                    : 'Get Started'}
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* AI VALUE */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-10 md:p-14">

            <div className="text-center mb-12">

              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <FiCpu />
                AI Intelligence Included
              </div>

              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                More Than Management Software
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400">
                BizNest combines operational management with AI-driven business insights.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="text-center">
                <FiTrendingUp className="mx-auto text-blue-600 text-3xl mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Revenue Forecasting
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Predict future revenue using historical business data.
                </p>
              </div>

              <div className="text-center">
                <FiBarChart2 className="mx-auto text-blue-600 text-3xl mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Occupancy Prediction
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Anticipate demand and optimize resource planning.
                </p>
              </div>

              <div className="text-center">
                <FiCpu className="mx-auto text-blue-600 text-3xl mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Sentiment Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Understand customer feedback automatically.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* TRUST METRICS */}
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

      {/* FAQ */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Can I upgrade later?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely. Plans can be upgraded anytime as your business grows.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Is AI included?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-powered forecasting and analytics are available in Growth and Enterprise plans.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Can I manage multiple locations?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes. Growth and Enterprise plans support multi-location operations.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Pricing;