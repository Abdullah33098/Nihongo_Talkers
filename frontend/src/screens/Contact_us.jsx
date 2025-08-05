import React from 'react'

const Contact_us = () => {
  return (
    <>
        <div className='max-w-[1440px] p-[60px] gap-2.5 h-[918px] justify-center items-center flex flex-col bg-white'>
            <div className='w-[1320px] px-3 flex flex-row rounded-[30px] overflow-hidden h-[792px]'>
                <div className='w-[412px] rounded-l-[30px]  bg-[#EBF5FE]'>
                    <img src="contact.jpg" alt="Contact Us" className='w-full h-full object-cover rounded-l-[30px]' />
                </div>
                <div className='w-[884px] px-6 py-[50px] flex flex-col gap-4 bg-[#EBF5FE] rounded-r-[30px]'>
                    <h1 className='text-[60px] font-extrabold text-[#5183F4]'>Contact Us</h1>
                    <p className='w-[760px] text-[20px] text-[#717171]'>For immediate assistance, check out our FAQs where you’ll find answers to many frequently asked questions.<br/>
Reach out to Nihongo Talkers Customer Support by email at info@nihongotalkers.com. Our team can typically respond to emails within 1-3 business days.</p>
                    <form className='flex flex-col gap-4'>
                    <div>
                    <input type="text" placeholder='First Name' className='border border-[#D1D5DB] rounded-lg p-3 bg-white' />
                    <input type="text" placeholder='Last Name' className='border border-[#D1D5DB] rounded-lg p-3 bg-white' />
                    </div>

                        <input type="email" placeholder='Your Email' className='border border-[#D1D5DB] rounded-lg p-3 bg-white' />
                        <textarea placeholder='Your Message' className='border border-[#D1D5DB] rounded-lg p-3 h-[150px] bg-white' />
                        <button type="submit" className='bg-[#5183F4] text-white py-3 px-6 rounded-lg hover:bg-[#4169E1] transition duration-300'>Submit Request</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact_us
