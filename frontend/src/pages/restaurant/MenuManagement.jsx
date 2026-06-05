import React from 'react';

const MenuManagement = () => {
  const menuItems = [
    { id: 1, name: 'Truffle Fries', category: 'Appetizers', price: '₹80.00', status: 'Available' },
    { id: 2, name: 'Wagyu Burger', category: 'Mains', price: '₹220.00', status: 'Available' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Digital Menu</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">Add Item</button>
      </div>
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 divide-y divide-gray-200">
        {menuItems.map(item => (
          <div key={item.id} className="p-4 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-blue-600">{item.price}</span>
              <button className="text-gray-400 hover:text-red-500 font-medium text-sm">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;