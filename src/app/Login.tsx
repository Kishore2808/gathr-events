import React from 'react';
import { Link } from 'react-router';

export function Login() {
  return (
    <div className="min-h-screen bg-[#F8F4ED] flex flex-col justify-center items-center text-[#1E1E1E] font-['Lato']">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-['Playfair_Display'] font-bold text-[#7A1F2B] mb-6 text-center">Welcome Back</h2>
        <p className="text-center mb-6">Login to access exclusive venue bookings.</p>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#C9A227]" placeholder="you@example.com" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-medium">Password</label>
          <input type="password" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#C9A227]" placeholder="••••••••" />
        </div>
        <button className="w-full bg-[#7A1F2B] text-[#F8F4ED] py-3 rounded hover:bg-[#5E1822] transition duration-300 font-bold">
          Log In
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/" className="text-[#C9A227] hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
