import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark-layer-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center justify-center h-20">
              <Image
                src="/logo-full.png"
                alt="leetclone logo"
                height={100}
                width={100}
              />
            </Link>
          </div>
          <div className="flex justify-right gap-2">
            <div className="flex">
              <Link href="/login">
                <span
                  className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out"
                >
                  Login
                </span>
              </Link>
            </div>
            <div className="flex">
              <Link href="/register">
                <span
                  className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out"
                >
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
