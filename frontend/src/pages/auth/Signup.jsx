import React, { useState } from "react";
import { Select, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Signup = () => {
  const [role, setRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  return (
    <div className=" flex items-center justify-center p-4" >
      <div className="w-full max-w-[424px] flex flex-col items-center justify-start bg-white gap-[24px]  py-[100px] ">
        <h1 className="text-3xl md:text-[36px] font-extrabold text-center w-full md:w-[265px] font-['Plus Jakarta Sans']">
          Sign Up
        </h1>
        
        <div className="w-full">
          <div className="text-lg md:text-[20px] text-black w-full text-left font-semibold font-['League Spartan'] mb-2">
            Sign up as a
          </div>

          <div className="relative w-full">
            <div className="absolute top-1/2 left-3 transform -translate-y-1/2 z-10">
              <img
                src={step === 1 ? "/box.svg" : "/Layer_1.svg"}
                alt="role icon"
                className="w-5 h-5 pointer-events-none"
              />
            </div>

            <Select
              value={role}
              onChange={(value) => setRole(value)}
              placeholder="Select role"
              className="w-full role-selector"
              style={{ height: "60px" }}
              dropdownStyle={{ zIndex: 10000 }}
            >
              <Option value="tutor">Tutor</Option>
              <Option value="student">Student</Option>
            </Select>
          </div>
        </div>

        {step === 1 && (
          <>
            <Button
              type="primary"
              className="w-full !h-[60px] rounded-[10px] px-[15px] gap-[10px] opacity-100 bg-[#5183F4] text-white text-base font-semibold flex items-center justify-center hover:bg-blue-600 transition duration-200"
              onClick={() => {
                if (role) setStep(2);
              }}
            >
              Next
            </Button>
          </>
        )}

        {step === 2 && (
          <>
          <div className="w-full">
            <div className="text-lg md:text-[24px] text-black w-full text-left font-semibold font-['League Spartan'] mb-2">
              Your Details
            </div>

            <div className="relative w-full mb-2">
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

            <div className="relative w-full mb-2">
              <img
                src="/key 1.svg"
                alt="Key Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-[60px] rounded-[10px] border border-black pl-12 pr-12 py-3 text-base text-gray-900 focus:outline-none"
              />
              <img
                src={showPassword ? "/Property 1=eye.svg" : "/Eye.svg"}
                alt="Toggle visibility"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>

            <Button
              type="primary"
              className="w-full !h-[60px] rounded-[10px] bg-[#5183F4] text-white text-base font-semibold hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </Button>
            </div>
          </>
        )}

        <div className="text-lg md:text-[20px] text-black text-center">
          Already have an account?
          <span
            className="text-[#5183F4] font-normal cursor-pointer hover:underline ml-1"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;