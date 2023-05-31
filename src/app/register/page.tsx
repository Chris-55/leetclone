import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="bg-gray-800 rounded-lg shadow-md p-8 flex flex-col items-center">
        <input type="text" placeholder="Username" className="rounded mb-4" />
        <input type="email" placeholder="email" className="rounded mb-4" />
        <input
          type="password"
          placeholder="Password"
          className="rounded mb-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="rounded mb-4"
        />
        <button className="rounded-md text-gray-300 transition ease-in-out hover:bg-orange-500 hover:text-white duration-300 font-medium py-1 px-8">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Register;
