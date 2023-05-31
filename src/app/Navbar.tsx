import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <Link href='/'>
              <span className='text-white font-bold text-xl'>Home</span>
            </Link>
          </div>
          <div className='flex justify-right'>
            <div className='flex'>
              <Link href='/login'>
                <span className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-8'>
                  Login
                </span>
              </Link>
            </div>
            <div className='flex'>
              <Link href='/register'>
                <span className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                  Register
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
