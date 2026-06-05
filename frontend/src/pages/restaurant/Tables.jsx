import React, { useState } from 'react';
import {
  FiPlus,
  FiCoffee,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiSearch
} from 'react-icons/fi';

const initialTables = [
  {
    id: 'T1',
    location: 'Window',
    seats: 2,
    status: 'Occupied',
    time: '45 mins',
    bill: 1450
  },
  {
    id: 'T2',
    location: 'Center',
    seats: 4,
    status: 'Available',
    time: '-',
    bill: 0
  },
  {
    id: 'T3',
    location: 'Center',
    seats: 4,
    status: 'Occupied',
    time: '15 mins',
    bill: 980
  },
  {
    id: 'T4',
    location: 'Patio',
    seats: 6,
    status: 'Reserved',
    time: '8:00 PM',
    bill: 0
  },
  {
    id: 'T5',
    location: 'Private Room',
    seats: 8,
    status: 'Available',
    time: '-',
    bill: 0
  }
];

const Tables = () => {
  const [tables, setTables] = useState(initialTables);
  const [searchTerm, setSearchTerm] = useState('');

  const formatINR = amount =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);

  const filteredTables = tables.filter(table =>
    table.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    table.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const availableTables = tables.filter(
    table => table.status === 'Available'
  ).length;

  const occupiedTables = tables.filter(
    table => table.status === 'Occupied'
  ).length;

  const reservedTables = tables.filter(
    table => table.status === 'Reserved'
  ).length;

  const todaysRevenue = tables.reduce(
    (sum, table) => sum + table.bill,
    0
  );

  const occupancyRate = Math.round(
    (occupiedTables / tables.length) * 100
  );

  const seatGuests = tableId => {
    setTables(prev =>
      prev.map(table =>
        table.id === tableId
          ? {
              ...table,
              status: 'Occupied',
              time: '0 mins',
              bill: 500
            }
          : table
      )
    );
  };

  const clearTable = tableId => {
    setTables(prev =>
      prev.map(table =>
        table.id === tableId
          ? {
              ...table,
              status: 'Available',
              time: '-',
              bill: 0
            }
          : table
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Live Table POS
          </h1>

          <p className="text-gray-500 mt-1">
            The Spice Grill • Connaught Place
          </p>
        </div>

        <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-purple-700">
          <FiPlus />
          Add Table
        </button>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Available Tables
          </p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            {availableTables}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Occupied Tables
          </p>
          <h3 className="text-3xl font-bold text-orange-600 mt-2">
            {occupiedTables}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Reserved Tables
          </p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            {reservedTables}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Today's Revenue
          </p>
          <h3 className="text-3xl font-bold text-purple-600 mt-2">
            {formatINR(todaysRevenue)}
          </h3>
        </div>

      </div>

      {/* ANALYTICS */}
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

        <div className="flex justify-between mb-3">

          <h3 className="font-bold text-gray-900">
            Dining Occupancy
          </h3>

          <span className="font-bold text-purple-600">
            {occupancyRate}%
          </span>

        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-purple-600 h-3 rounded-full"
            style={{ width: `${occupancyRate}%` }}
          />
        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">

        <div className="flex items-center gap-3">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search table..."
            className="w-full focus:outline-none"
            value={searchTerm}
            onChange={e =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

      </div>

      {/* TABLE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredTables.map(table => (
          <div
            key={table.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
          >

            <div className="flex justify-between items-start mb-5">

              <div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {table.id}
                </h3>

                <p className="text-gray-500">
                  {table.location}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  table.status === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : table.status === 'Occupied'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {table.status}
              </span>

            </div>

            <div className="space-y-3 mb-5">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Seats
                </span>

                <span className="font-semibold">
                  {table.seats}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Duration
                </span>

                <span className="font-semibold">
                  {table.time}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Bill
                </span>

                <span className="font-semibold">
                  {formatINR(table.bill)}
                </span>
              </div>

            </div>

            <div className="grid grid-cols-2 gap-2">

              {table.status === 'Available' && (
                <button
                  onClick={() => seatGuests(table.id)}
                  className="bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold"
                >
                  Seat Guests
                </button>
              )}

              {table.status === 'Occupied' && (
                <button
                  onClick={() => clearTable(table.id)}
                  className="bg-green-600 text-white py-2 rounded-lg text-sm font-semibold"
                >
                  Close Bill
                </button>
              )}

              <button className="bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold">
                View Order
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Tables;