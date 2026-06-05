import React from 'react';

const StatusBadge = ({ status }) => {
  const isActive = status?.toLowerCase() === 'active';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
        isActive
          ? 'bg-green-500/10 text-green-400 border-green-500/20'
          : 'bg-gray-500/10 text-gray-400 border-gray-500/20'
      }`}
    >
      {/* Small dot for visual polish */}
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          isActive ? 'bg-green-400' : 'bg-gray-400'
        }`}
      ></span>
      {isActive ? 'Active' : 'Inactive'}
    </span>
  );
};

export default StatusBadge;