import React, { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

const OTPScreen = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className=" flex items-center justify-center p-4">
      <div className="w-full max-w-[424px] flex flex-col items-center justify-start bg-white gap-6  py-[100px] ">
        <h1 className="text-3xl md:text-[36px] font-extrabold text-center font-['Plus Jakarta Sans']">
          Reset Password
        </h1>
        <p className="text-lg md:text-[20px] font-normal text-gray-500 text-center">
          Enter OTP and set your new password
        </p>

        <div className="flex w-full justify-between gap-2 md:gap-4">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className="text-center font-medium focus:outline-none"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(24px, 5vw, 48px)",
                lineHeight: "60px",
                verticalAlign: "middle",
                width: "clamp(40px, 8vw, 62px)",
                height: "60px",
                border: "none",
                borderBottom: "1px solid",
                borderBottomColor:
                  digit.length > 0
                    ? "#D1D5DB"
                    : index === otp.findIndex((v) => v === "")
                    ? "#5183F4"
                    : "#D1D5DB",
                borderRadius: 0,
                outline: "none",
                boxShadow: "none",
                textAlign: "center",
              }}
            />
          ))}
        </div>

        <div className="relative w-full">
          <img
            src="/key 1.svg"
            alt="Key Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            className="w-full h-[60px] rounded-[10px] border border-black pl-12 pr-12 py-3 text-base text-gray-900 focus:outline-none"
          />
          <img
            src={showPassword ? "/Property 1=eye.svg" : "/Eye.svg"}
            alt="Toggle visibility"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>

        <div className="relative w-full">
          <img
            src="/key 1.svg"
            alt="Key Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full h-[60px] rounded-[10px] border border-black pl-12 pr-12 py-3 text-base text-gray-900 focus:outline-none"
          />
          <img
            src={showConfirmPassword ? "/Property 1=eye.svg" : "/Eye.svg"}
            alt="Toggle visibility"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 cursor-pointer"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          />
        </div>

        <button
          className="w-full h-[60px] rounded-[10px] bg-[#5183F4] text-white text-base font-semibold hover:bg-blue-600 transition duration-200"
          onClick={() => navigate("/signin")}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default OTPScreen;