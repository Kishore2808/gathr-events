import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F4ED] text-[#1E1E1E] font-sans">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-[#C9A227]/20">
        <Link to="/" className="inline-flex items-center text-[#7A1F2B] hover:text-[#C9A227] mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        <h1 className="text-3xl font-serif font-bold text-[#7A1F2B] mb-2">Welcome Back</h1>
        <p className="text-gray-600 mb-8">Sign in to access exclusive venues.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="button"
            className="w-full bg-[#7A1F2B] text-white font-medium py-3 rounded-lg shadow-md hover:bg-[#C9A227] transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
