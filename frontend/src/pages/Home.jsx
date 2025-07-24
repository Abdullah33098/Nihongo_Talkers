import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="w-full h-[600px] flex items-center px-3 gap-2.5 justify-center align-center">
        <div className='w-[1296px] bg-[#EBF5FE]'>
        <div className='w-[1236px] h-[540px] gap-6 flex'>
        <div className='w-[660px] h-[266px] pt-[50px] gap-2.5' >
        <h1 className="text-center font-extrabold text-[60px] mt-10 "> Need A Tutor?<br />WE CAN HELP.</h1>
        <div className='text-center font-normal text-[20px] text-[#717171'>
          Compare and find the best tutors to fit your needs.
        </div>
        </div>
          <div className='w-[660px] h-[266px] bg-[#5183F4] rounded-[10px] mt-10'>
          <h1 className='text-white text-center text-3xl font-bold pt-10'>Become A Tutor</h1>
          <p className='text-white text-center text-lg pt-2'>Join our community of tutors and start earning today!</p>
          <div className='flex justify-center mt-6'>
            <button className='bg-white text-[#5183F4] px-6 py-2 rounded-full font-semibold'>Sign Up Now</button>
          </div>
        </div>

        </div>
        
        </div>

    </div>
    </div>
  )
}

export default Home
