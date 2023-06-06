'use client';

import { useState, useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(email, password);
      if (!user) return;
      alert('Logged in successfully');
      router.push('/');
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    if (error) alert(error.message);
  }, [error]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <main className="bg-dark-layer-2 min-h-screen">
        <h3 className="text-center text-xl font-medium text-white pt-8">
          Sign in to LeetClone
        </h3>
        <form
          className="flex justify-center items-center pt-8"
          onSubmit={handleLogin}
        >
          <div
            className="bg-gray-800 rounded-lg shadow-md p-8 flex flex-col items-center w-96"
            style={{
              animation: 'slide-down 0.5s ease',
              animationFillMode: 'forwards',
            }}
          >
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

            <button
              type="submit"
              className="bg-brand-orange text-white py-2 px-8 sm:px-4 rounded-md font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
