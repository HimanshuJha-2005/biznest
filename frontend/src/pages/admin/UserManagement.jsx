import React, { useState } from 'react';
import {
  FiUsers,
  FiUserCheck,
  FiClock,
  FiShield,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiUserX,
  FiPlus
} from 'react-icons/fi';

const mockUsers = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@biznest.com',
    role: 'Super Admin',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Amit Patel',
    email: 'amit@downtownpg.com',
    role: 'PG Owner',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Rahul Sharma',
    email: 'rahul@spicegrill.com',
    role: 'Restaurant Owner',
    status: 'Pending'
  },
  {
    id: 4,
    name: 'Priya Mehta',
    email: 'priya@tajhotel.com',
    role: 'Hotel Owner',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Karan Singh',
    email: 'karan@citystay.com',
    role: 'Hotel Owner',
    status: 'Inactive'
  }
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      roleFilter === 'All' || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const totalUsers = mockUsers.length;
  const activeUsers = mockUsers.filter(
    u => u.status === 'Active'
  ).length;
  const pendingUsers = mockUsers.filter(
    u => u.status === 'Pending'
  ).length;
  const admins = mockUsers.filter(
    u => u.role === 'Super Admin'
  ).length;

  const roleColor = role => {
    switch (role) {
      case 'Super Admin':
        return 'bg-purple-100 text-purple-700';
      case 'Hotel Owner':
        return 'bg-blue-100 text-blue-700';
      case 'PG Owner':
        return 'bg-green-100 text-green-700';
      case 'Restaurant Owner':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const statusColor = status => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Inactive':
        return 'bg-red-100 text-red-700';
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
            User Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage platform users and permissions.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
          <FiPlus />
          Add User
        </button>

      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm font-semibold">
                Total Users
              </p>
              <h3 className="text-3xl font-bold mt-2">
                {totalUsers}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
              <FiUsers size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm font-semibold">
                Active Users
              </p>
              <h3 className="text-3xl font-bold mt-2">
                {activeUsers}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-green-100 text-green-600">
              <FiUserCheck size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm font-semibold">
                Pending Users
              </p>
              <h3 className="text-3xl font-bold mt-2">
                {pendingUsers}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-yellow-100 text-yellow-600">
              <FiClock size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-sm font-semibold">
                Admins
              </p>
              <h3 className="text-3xl font-bold mt-2">
                {admins}
              </h3>
            </div>

            <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
              <FiShield size={24} />
            </div>
          </div>
        </div>

      </div>

      {/* SEARCH + FILTERS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

        <div className="flex flex-col lg:flex-row gap-4">

          <div className="flex items-center flex-1 border border-gray-200 rounded-xl px-4">
            <FiSearch className="text-gray-400 mr-3" />

            <input
              type="text"
              placeholder="Search users..."
              className="w-full py-3 focus:outline-none"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />
          </div>

          <select
            value={roleFilter}
            onChange={(e) =>
              setRoleFilter(e.target.value)
            }
            className="border border-gray-200 rounded-xl px-4 py-3"
          >
            <option>All</option>
            <option>Super Admin</option>
            <option>Hotel Owner</option>
            <option>PG Owner</option>
            <option>Restaurant Owner</option>
          </select>

        </div>

      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

        <table className="min-w-full">

          <thead className="bg-gray-50 border-b border-gray-200">

            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                User
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase text-gray-500">
                Role
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

            {filteredUsers.map(user => (
              <tr
                key={user.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="w-11 h-11 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">
                        {user.name}
                      </p>

                      <p className="text-sm text-gray-500">
                        {user.email}
                      </p>
                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${roleColor(
                      user.role
                    )}`}
                  >
                    {user.role}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor(
                      user.status
                    )}`}
                  >
                    {user.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-end gap-3">

                    <button className="text-blue-600 hover:text-blue-800">
                      <FiEdit size={18} />
                    </button>

                    <button className="text-orange-600 hover:text-orange-800">
                      <FiUserX size={18} />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <FiTrash2 size={18} />
                    </button>

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

export default UserManagement;