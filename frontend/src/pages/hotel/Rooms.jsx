import React, { useState } from 'react';
import {
  FiPlus,
  FiSearch,
  FiKey,
  FiCheckCircle,
  FiTool,
  FiDollarSign,
  FiHome
} from 'react-icons/fi';

const initialRooms = [
  {
    id: '101',
    type: 'Deluxe',
    capacity: 2,
    price: 4500,
    status: 'Occupied',
    guest: 'Rahul Sharma'
  },
  {
    id: '102',
    type: 'Standard',
    capacity: 2,
    price: 2500,
    status: 'Available',
    guest: null
  },
  {
    id: '103',
    type: 'Standard',
    capacity: 2,
    price: 2500,
    status: 'Maintenance',
    guest: null
  },
  {
    id: '201',
    type: 'Premium Suite',
    capacity: 4,
    price: 8500,
    status: 'Occupied',
    guest: 'Priya Patel'
  },
  {
    id: '202',
    type: 'Deluxe',
    capacity: 2,
    price: 4500,
    status: 'Available',
    guest: null
  }
];

const Rooms = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [searchTerm, setSearchTerm] = useState('');

  const formatINR = amount =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);

  const filteredRooms = rooms.filter(room =>
    room.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRooms = rooms.length;

  const occupiedRooms = rooms.filter(
    room => room.status === 'Occupied'
  ).length;

  const availableRooms = rooms.filter(
    room => room.status === 'Available'
  ).length;

  const maintenanceRooms = rooms.filter(
    room => room.status === 'Maintenance'
  ).length;

  const occupancyRate = Math.round(
    (occupiedRooms / totalRooms) * 100
  );

  const todaysRevenue = rooms
    .filter(room => room.status === 'Occupied')
    .reduce((sum, room) => sum + room.price, 0);

  const handleCheckIn = roomId => {
    setRooms(prev =>
      prev.map(room =>
        room.id === roomId
          ? {
              ...room,
              status: 'Occupied',
              guest: 'Walk-In Guest'
            }
          : room
      )
    );
  };

  const handleCheckOut = roomId => {
    setRooms(prev =>
      prev.map(room =>
        room.id === roomId
          ? {
              ...room,
              status: 'Available',
              guest: null
            }
          : room
      )
    );
  };

  const handleMaintenance = roomId => {
    setRooms(prev =>
      prev.map(room =>
        room.id === roomId
          ? {
              ...room,
              status:
                room.status === 'Maintenance'
                  ? 'Available'
                  : 'Maintenance',
              guest: null
            }
          : room
      )
    );
  };

  const getStatusBadge = status => {
    switch (status) {
      case 'Occupied':
        return 'bg-blue-100 text-blue-700';
      case 'Available':
        return 'bg-green-100 text-green-700';
      case 'Maintenance':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeBadge = type => {
    switch (type) {
      case 'Premium Suite':
        return 'bg-purple-100 text-purple-700';
      case 'Deluxe':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Room Management
          </h1>

          <p className="text-gray-500 mt-1">
            Grand Taj Hotel • Mumbai
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700">
          <FiPlus />
          Add Room
        </button>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Total Rooms
          </p>
          <h3 className="text-3xl font-bold mt-2">
            {totalRooms}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Occupied
          </p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            {occupiedRooms}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Available
          </p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            {availableRooms}
          </h3>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-semibold">
            Maintenance
          </p>
          <h3 className="text-3xl font-bold text-red-600 mt-2">
            {maintenanceRooms}
          </h3>
        </div>

      </div>

      {/* ANALYTICS */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <FiDollarSign className="text-green-600" />
            <h3 className="font-bold text-gray-900">
              Today's Revenue
            </h3>
          </div>

          <p className="text-4xl font-bold text-green-600">
            {formatINR(todaysRevenue)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">

          <div className="flex justify-between mb-3">
            <h3 className="font-bold text-gray-900">
              Occupancy Rate
            </h3>

            <span className="font-bold text-blue-600">
              {occupancyRate}%
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: `${occupancyRate}%` }}
            />
          </div>

        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">

        <div className="flex items-center gap-3">

          <FiSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search rooms..."
            className="w-full focus:outline-none"
            value={searchTerm}
            onChange={e =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

      </div>

      {/* ROOM GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredRooms.map(room => (
          <div
            key={room.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all"
          >

            <div className="flex justify-between items-start mb-5">

              <div className="flex items-center gap-3">

                <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                  <FiKey />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Room {room.id}
                  </h3>

                  <span
                    className={`text-xs px-2 py-1 rounded-full font-bold ${getTypeBadge(
                      room.type
                    )}`}
                  >
                    {room.type}
                  </span>
                </div>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(
                  room.status
                )}`}
              >
                {room.status}
              </span>

            </div>

            <div className="space-y-3 mb-5">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Capacity
                </span>

                <span className="font-semibold">
                  {room.capacity} Guests
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Nightly Rate
                </span>

                <span className="font-semibold">
                  {formatINR(room.price)}
                </span>
              </div>

              {room.guest && (
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Guest
                  </span>

                  <span className="font-semibold">
                    {room.guest}
                  </span>
                </div>
              )}

            </div>

            <div className="grid grid-cols-2 gap-2">

              {room.status === 'Available' && (
                <button
                  onClick={() =>
                    handleCheckIn(room.id)
                  }
                  className="bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold"
                >
                  Check-In
                </button>
              )}

              {room.status === 'Occupied' && (
                <button
                  onClick={() =>
                    handleCheckOut(room.id)
                  }
                  className="bg-green-600 text-white py-2 rounded-lg text-sm font-semibold"
                >
                  Check-Out
                </button>
              )}

              <button
                onClick={() =>
                  handleMaintenance(room.id)
                }
                className="bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold"
              >
                Maintenance
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Rooms;