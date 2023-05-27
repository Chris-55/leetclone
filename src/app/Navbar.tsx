import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">Main</span>
          </div>
          <div className="flex">
            <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
