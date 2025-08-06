import React from "react";
import { FaGlobe, FaFileContract, FaUserEdit, FaUserTie } from "react-icons/fa";

const ReasonsToLearn = () => {
  const reasons = [
    {
      icon:<img src='nofee.svg' alt='No Membership Fee' className='w-6 h-6' />,
      title: "No Membership Fee",
      description: "Access up to 5 teachers' contact information for USD58."
    },
    {
      icon: <img src='contract.svg' alt='No Contracts' className='w-6 h-6' />,
      title: "No Contracts",
      description: "Purchase lessons only when you need or set up a payment plan with your teacher."
    },
    {
      icon: <img src='lessons.svg' alt='Lessons Tailored For You' className='w-6 h-6' />,
      title: "Lessons Tailored For You",
      description: "Work with your tutor to fulfill your learning needs."
    },
    {
      icon: <img src='tutor.svg' alt='Outstanding Tutors' className='w-6 h-6' />,
      title: "Outstanding Tutors",
      description: "Choose from a diverse pool of highly credentialed tutors."
    }
  ];

  return (
    <section className="bg-slate-100 py-16 w-full">
  <div className="max-w-[1440px] mx-auto">
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="Frame 60.svg"
            alt="Reasons to learn on Nihongo Talkers"
            className="w-full max-w-[600px] h-auto object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col items-start justify-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 max-w-[600px] leading-tight">
            <span className="text-[#181A20]">4 reasons to learn on</span>
            <br />
            <span className="text-[#5183F4]">Nihongo Talkers</span>
          </h2>

          <div className="space-y-8 w-full">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-white p-3 rounded-md mr-4">
                  {reason.icon}
                </div>
                <div>
                  <p className="text-xl font-semibold mb-2">{reason.title}</p>
                  <p className="text-[#717171] text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

  );
};

export default ReasonsToLearn;