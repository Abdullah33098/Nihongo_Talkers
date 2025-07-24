import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-[424px] flex flex-col items-center justify-start bg-white gap-6 py-[100px] ">
        <h1 className="text-3xl md:text-[36px] font-extrabold text-center font-['Plus Jakarta Sans']">
          Welcome Back
        </h1>

        <p className="text-lg md:text-[20px] font-normal text-gray-500 text-center">
          Log in to explore the world of tutors
        </p>

        <div className="relative w-full">
          <img
            src="/mail.svg"
            alt="Email Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-[60px] rounded-[10px] border border-black pl-12 pr-4 py-3 text-base text-gray-900 focus:outline-none"
          />
        </div>

        <div className="relative w-full">
          <img
            src="/key 1.svg"
            alt="Key Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full h-[60px] rounded-[10px] border border-black pl-12 pr-12 py-3 text-base text-gray-900 focus:outline-none"
          />
          <img
            src={showPassword ? '/Property 1=eye.svg' : '/Eye.svg'}
            alt="Toggle visibility"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            onClick={() => setShowPassword(prev => !prev)}
          />
        </div>

        <button className="w-full h-[60px] rounded-[10px] bg-[#5183F4] text-white text-base font-semibold hover:bg-blue-600 transition duration-200">
          Log In
        </button>

        <div 
          className="text-lg md:text-[20px] text-[#5183F4] text-center font-semibold cursor-pointer hover:underline"
          onClick={() => navigate('/forgot-password')}
        >
          I forgot my password
        </div>

        <div className="text-lg md:text-[20px] text-black text-center">
          Don't have an account?
          <span
            className="text-[#5183F4] font-normal cursor-pointer hover:underline ml-1"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;