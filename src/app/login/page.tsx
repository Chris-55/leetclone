import React from 'react';

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className='flex justify-center items-center mt-8'>
      <div className='bg-gray-800 rounded-lg shadow-md p-8 flex flex-col items-center'>
        <input type='text' placeholder='Username' className='rounded mb-4' />
        <input
          type='password'
          placeholder='Password'
          className='rounded mb-4'
        />
        <button className='rounded-md text-gray-300 transition ease-in-out hover:bg-orange-500 hover:text-white duration-300 font-medium py-1 px-8'>
          {/* <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> */}
          Login
        </button>
      </div>
    </div>
  );
};
export default page;