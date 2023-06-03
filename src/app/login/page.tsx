import React from 'react';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <form className="flex justify-center items-center mt-8">
      <div
        className="bg-gray-800 rounded-lg shadow-md p-8 flex flex-col items-center w-96"
        style={{
          animation: 'slide-down 0.5s ease',
          animationFillMode: 'forwards',
        }}
      >
        <input
          type="email"
          placeholder="Email"
          className="rounded mb-4 px-4 py-2 w-full bg-gray-700 text-white placeholder-gray-400 "
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="rounded mb-4 px-4 py-2 w-full bg-gray-700 text-white placeholder-gray-400 "
          required
        />

        <button
          type="submit"
          className="bg-brand-orange text-white py-2 px-8 sm:px-4 rounded-md font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default page;
