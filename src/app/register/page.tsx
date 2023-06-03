'use client';

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser) return;
      alert('User created successfully');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex justify-center items-center mt-8"
      onSubmit={handleRegister}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-md p-8 flex flex-col items-center w-96"
        style={{
          animation: 'slide-down 0.5s ease',
          animationFillMode: 'forwards',
        }}
      >
        <input
          type="text"
          placeholder="Username"
          className="rounded mb-4 px-4 py-2 w-full bg-gray-700 text-white placeholder-gray-400 "
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="rounded mb-4 px-4 py-2 w-full bg-gray-700 text-white placeholder-gray-400 "
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="rounded mb-4 px-4 py-2 w-full bg-gray-700 text-white placeholder-gray-400 "
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="rounded mb-4 px-4 py-2 w-full bg-gray-700 text-white placeholder-gray-400 "
        />
        <button
          type="submit"
          className="bg-brand-orange text-white py-2 px-8 sm:px-4 rounded-md font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
export default Register;
