import React from 'react';
import { useNavigate } from 'react-router-dom';

const Forgetpassword = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full max-w-[424px] h-[] flex flex-col items-center justify-start bg-white gap-6 py-[100px] px-4">
        <h1 className="text-3xl md:text-[36px] font-extrabold text-center font-['Plus Jakarta Sans']">
          Forgot Password
        </h1>

        <p className="text-[20px] md:text-[20px] font-normal text-gray-500 text-center">
          Enter your email to reset your password
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

        <button
          className="w-full h-[60px] rounded-[10px] bg-[#5183F4] text-white text-base font-semibold hover:bg-blue-600 transition duration-200"
          onClick={() => navigate('/otp')}
        >
          Send OTP
        </button>

        <div 
          className="text-lg md:text-[20px] text-[#5183F4] text-center font-semibold cursor-pointer hover:underline"
          onClick={() => navigate('/')}
        >
          Back to Log In
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;