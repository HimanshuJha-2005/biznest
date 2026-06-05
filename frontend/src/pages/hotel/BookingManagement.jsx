import React from 'react';

const BookingManagement = () => {
  const bookings = [
    { id: 'BK-101', guest: 'John Doe', room: '101 - Deluxe', checkIn: '2026-06-05', checkOut: '2026-06-08', status: 'Confirmed' },
    { id: 'BK-102', guest: 'Sarah Smith', room: '205 - Suite', checkIn: '2026-06-06', checkOut: '2026-06-10', status: 'Pending' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Hotel Bookings</h1>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-4">
        {bookings.map(b => (
          <div key={b.id} className="flex justify-between items-center py-3 border-b last:border-0">
            <div>
              <p className="font-bold text-gray-900">{b.guest} <span className="text-sm font-normal text-gray-500">({b.id})</span></p>
              <p className="text-sm text-gray-600">Room: {b.room} | {b.checkIn} to {b.checkOut}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${b.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
              {b.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingManagement;