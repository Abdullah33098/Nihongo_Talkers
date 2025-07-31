import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#EBF5FE] pt-[60px] px-[24px] md:px-[60px] pb-[30px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-[24px]">

        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Left - Logo and Disclaimer */}
          <div className="max-w-[748px]">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="w-[188px] h-[64px]" />
            </div>
            <p className="mt-4 text-[#717171] text-[16px] font-normal leading-relaxed">
              NihongoTalkers.com does not employ any tutors and is not responsible for the conduct of any user on our site.
              All information in member profiles, job posts, applications, and messages is created by users of our site and is not generated or verified by NihongoTalkers.com.
              You are responsible for conducting your own diligence to ensure that the job or tutor you choose is appropriate for your needs and complies with applicable laws.
            </p>
          </div>

         
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-x-8 gap-y-6 text-[16px] text-[#181A20] w-full md:w-auto">
           
            <div className="flex-1 min-w-[140px]">
              <p className="font-normal mb-6">Services</p>
              <ul className="space-y-[18px]">
                <li>Find Tutors</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQ for tutors</li>
                <li>FAQ for Students</li>
              </ul>
            </div>

            <div className="flex-1 min-w-[140px]">
              <p className="font-normal mb-6">Contact</p>
              <div className="flex items-start gap-2">
                <img src="mail1.svg" alt="Email Icon" className="w-5 h-5 mt-[2px]" />
                <a href="mailto:info@nihongotalkers.com" className="hover:underline">
                  info@nihongotalkers.com
                </a>
              </div>
            </div>
          </div>
        </div>

     
        <hr className="border-t border  border-[#B1B1B1] mt-6" />


        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center text-[16px] font-normal text-[#181A20] pt-4 gap-2">
  <p>© 2024 Nihongo Talkers. ALL RIGHTS RESERVED</p>
  <div className="flex gap-4">
    <a href="#" className="hover:underline">Privacy Policy</a>
    <a href="#" className="hover:underline">Terms of use</a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
