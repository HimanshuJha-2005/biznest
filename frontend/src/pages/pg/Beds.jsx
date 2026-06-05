import React, { useState } from 'react';
import {
  FiPlus,
  FiSearch,
  FiUser,
  FiHome,
  FiDollarSign,
  FiCheckCircle,
  FiAlertCircle
} from 'react-icons/fi';

const initialBeds = [
  {
    id: 'A1',
    room: '101 (Double)',
    type: 'Shared',
    rent: 8000,
    status: 'Occupied',
    tenant: 'Amit Kumar',
    payment: 'Paid'
  },
  {
    id: 'A2',
    room: '101 (Double)',
    type: 'Shared',
    rent: 8000,
    status: 'Available',
    tenant: null,
    payment: null
  },
  {
    id: 'B1',
    room: '102 (Single)',
    type: 'Private',
    rent: 15000,
    status: 'Occupied',
    tenant: 'Suresh Raina',
    payment: 'Pending'
  },
  {
    id: 'C1',
    room: '103 (Triple)',
    type: 'Shared',
    rent: 6000,
    status: 'Occupied',
    tenant: 'Vikram Singh',
    payment: 'Paid'
  },
  {
    id: 'C2',
    room: '103 (Triple)',
    type: 'Shared',
    rent: 6000,
    status: 'Maintenance',
    tenant: null,
    payment: null
  }
];

const Beds = () => {
  const [beds, setBeds] = useState(initialBeds);
  const [searchTerm, setSearchTerm] = useState('');

  const formatINR = amount =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);

  const filteredBeds = beds.filter(
    bed =>
      bed.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (bed.tenant &&
        bed.tenant.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalBeds = beds.length;

  const occupiedBeds = beds.filter(
    bed => bed.status === 'Occupied'
  ).length;

  const availableBeds = beds.filter(
    bed => bed.status === 'Available'
  ).length;

  const pendingPayments = beds.filter(
    bed => bed.payment === 'Pending'
  ).length;

  const collectedRent = beds
    .filter(bed => bed.payment === 'Paid')
    .reduce((sum, bed) => sum + bed.rent, 0);

  const pendingRent = beds
    .filter(bed => bed.payment === 'Pending')
    .reduce((sum, bed) => sum + bed.rent, 0);

  const occupancyRate = Math.round(
    (occupiedBeds / totalBeds) * 100
  );

  const assignTenant = bedId => {
    setBeds(prev =>
      prev.map(bed =>
        bed.id === bedId
          ? {
              ...bed,
              tenant: 'New Tenant',
              status: 'Occupied',
              payment: 'Pending'
            }
          : bed
      )
    );
  };

  const vacateBed = bedId => {
    setBeds(prev =>
      prev.map(bed =>
        bed.id === bedId
          ? {
              ...bed,
              tenant: null,
              status: 'Available',
              payment: null
            }
          : bed
      )
    );
  };

  const markPaid = bedId => {
    setBeds(prev =>
      prev.map(bed =>
        bed.id === bedId
          ? {
              ...bed,
              payment: 'Paid'
            }
          : bed
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Bed Allocation
          </h1>

          <p className="text-gray-500 mt-1">
            Sunrise Boys PG • North Campus
          </p>
        </div>

        <button className="flex items-center gap-2 bg-teal-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-teal-700">
          <FiPlus />
          Add Bed
        </button>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Total Beds
          </p>
          <h3 className="text-3xl font-bold mt-2">
            {totalBeds}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Occupied Beds
          </p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            {occupiedBeds}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Available Beds
          </p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            {availableBeds}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Pending Rent
          </p>
          <h3 className="text-3xl font-bold text-orange-600 mt-2">
            {pendingPayments}
          </h3>
        </div>

      </div>

      {/* RENT ANALYTICS */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">

          <div className="flex items-center gap-3 mb-4">
            <FiDollarSign className="text-green-600" />
            <h3 className="font-bold text-gray-900">
              Rent Collection
            </h3>
          </div>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span className="text-gray-500">
                Collected
              </span>

              <span className="font-bold text-green-600">
                {formatINR(collectedRent)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">
                Pending
              </span>

              <span className="font-bold text-orange-600">
                {formatINR(pendingRent)}
              </span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">

          <div className="flex justify-between mb-3">

            <h3 className="font-bold text-gray-900">
              Occupancy Rate
            </h3>

            <span className="font-bold text-teal-600">
              {occupancyRate}%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-teal-600 h-3 rounded-full"
              style={{ width: `${occupancyRate}%` }}
            />
          </div>

        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">

        <div className="flex items-center gap-3">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search bed or tenant..."
            className="w-full focus:outline-none"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

        <table className="min-w-full">

          <thead className="bg-gray-50 border-b border-gray-200">

            <tr>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                Bed
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                Tenant
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                Rent
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                Payment
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-right text-xs font-bold uppercase text-gray-500">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredBeds.map(bed => (
              <tr
                key={bed.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >

                <td className="px-6 py-5">

                  <div>
                    <p className="font-bold text-gray-900">
                      Bed {bed.id}
                    </p>

                    <p className="text-sm text-gray-500">
                      Room {bed.room}
                    </p>
                  </div>

                </td>

                <td className="px-6 py-5">

                  {bed.tenant ? (
                    <div className="flex items-center gap-2">
                      <FiUser className="text-gray-400" />

                      <span className="font-medium">
                        {bed.tenant}
                      </span>
                    </div>
                  ) : (
                    <span className="italic text-gray-400">
                      Empty
                    </span>
                  )}

                </td>

                <td className="px-6 py-5 font-semibold">
                  {formatINR(bed.rent)}
                </td>

                <td className="px-6 py-5">

                  {bed.payment === 'Paid' && (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                      Paid
                    </span>
                  )}

                  {bed.payment === 'Pending' && (
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                      Pending
                    </span>
                  )}

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      bed.status === 'Occupied'
                        ? 'bg-blue-100 text-blue-700'
                        : bed.status === 'Available'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {bed.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-end gap-2">

                    {bed.status === 'Available' && (
                      <button
                        onClick={() => assignTenant(bed.id)}
                        className="bg-teal-600 text-white px-3 py-2 rounded-lg text-sm font-semibold"
                      >
                        Assign
                      </button>
                    )}

                    {bed.status === 'Occupied' && (
                      <>
                        {bed.payment === 'Pending' && (
                          <button
                            onClick={() => markPaid(bed.id)}
                            className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold"
                          >
                            Mark Paid
                          </button>
                        )}

                        <button
                          onClick={() => vacateBed(bed.id)}
                          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold"
                        >
                          Vacate
                        </button>
                      </>
                    )}

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Beds;