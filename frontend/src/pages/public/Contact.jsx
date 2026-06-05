import React from 'react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiHome,
  FiUsers,
  FiCoffee,
} from 'react-icons/fi';

const Contact = () => {
  const businessTypes = [
    {
      icon: <FiHome size={28} />,
      title: 'Hotels',
      description:
        'Room management, reservations, occupancy tracking, and guest operations.',
    },
    {
      icon: <FiUsers size={28} />,
      title: 'PGs & Hostels',
      description:
        'Tenant management, rent collection, and bed allocation workflows.',
    },
    {
      icon: <FiCoffee size={28} />,
      title: 'Restaurants',
      description:
        'Table reservations, digital menus, and restaurant operations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      {/* HERO */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            Contact BizNest
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            Let's Talk About
            <br />
            Your Business
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Whether you manage a Hotel, PG, or Restaurant, our team can help
            you modernize operations and unlock smarter business insights.
          </p>

        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-8">

            {businessTypes.map((item, index) => (
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

                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FORM + INFO */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-5 gap-8">

            {/* FORM */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-10">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Send Us A Message
              </h2>

              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your business..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  <FiSend />
                  Send Message
                </button>

              </form>

            </div>

            {/* INFO */}
            <div className="lg:col-span-2 space-y-6">

              <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8">
                <FiMail className="text-blue-600 mb-4" size={24} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  support@biznest.com
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8">
                <FiPhone className="text-green-600 mb-4" size={24} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +91 98765 43210
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-3xl p-8">
                <FiMapPin className="text-purple-600 mb-4" size={24} />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Ahmedabad, Gujarat, India
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;