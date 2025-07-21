import React, {useState} from 'react'

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen flex items-center justify-center ">
      <div className="w-[424px] h-[464px] flex flex-col items-center justify-start bg-white gap-[24px] py-[100px] ">
        
        <div className="text-[36px] font-extrabold text-center w-[265px] h-[50px]">Welcome Back</div>
        <div className="text-[17px] font-weight:400; text-gray-500 text-center w-[294px] h-[30px]">
          Log in to explore the world of tutors
        </div>


        <div className="relative ">
          <img
            src="/mail.svg"
            alt="Email Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] "
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[424px] h-[60px] pl-[50px] pr-4 py-3 text-gray-900 border border-black rounded-lg text-base focus:outline-none focus:border-black gap[15px]"
          />
        </div>

        
        <div className="relative w-full">
          
          <img
            src="/key 1.svg"
            alt="Key Icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px]"
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full pl-[50px] pr-[50px] py-3 text-gray-900 border border-black rounded-lg text-base focus:outline-none focus:border-black gap[15px]"
          />
          <img
            src={showPassword ? '/Property 1=eye.svg' : '/Eye.svg'}
            alt="Toggle visibility"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] cursor-pointer"
            onClick={() => setShowPassword(prev => !prev)}
          />
          </div>

        
        <button className="w-[424px] h-[60px] py-3 bg-[#5183F4] text-white rounded-lg text-base font-semibold hover:bg-blue-600 transition duration-200">
          Sign In
        </button>

        <div className="text-[17px] w-[181px] h-[30px] text-[#5183F4] text-center font-semibold cursor-pointer hover:underline">
          I forgot my password
        </div>

      
        <div className="text-[16px] w-[297px] h-[30px] text-black text-center">
          Don’t have an account?
          <span className="text-[#5183F4] font-normal cursor-pointer hover:underline ml-1">Sign up</span>
        </div>
      </div>
    </div>
  )
}

export default Signin
