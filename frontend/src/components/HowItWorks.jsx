import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "1. Browse tutors to review their background, experience, and student feedback.",
      image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-01.png&w=640&q=75",
    },
    {
      id: 2,
      title: '2. Select up to 5 tutors and add your preferred tutors to your "Tutor Cart"',
      image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-02.png&w=640&q=75",
    },
    {
      id: 3,
      title: "3. At the checkout page, if you're a first-time user, please create an account with your name and email address. Then, proceed to purchase contact information for up to 5 tutors.",
      image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-03.png&w=640&q=75",
    },
    {
      id: 4,
      title: "4. Upon completing the purchase, the email addresses of the five tutors will be delivered to your account page.",
      image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-04.png&w=640&q=75",
    },
    {
      id: 5,
      title: "5. Contact the teachers directly and begin your Japanese lessons.",
      image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-05.png&w=640&q=75",
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-4 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-16">
          How it <span className="text-blue-600">Works</span>
        </h2>

        <div className="relative">
        
          <div className="absolute left-0 top-0 h-full w-[46px] bg-transparent md:hidden">
            <div className="w-0.5 bg-[#B1B1B1] h-full mx-auto"></div>
          </div>

         
          <div className="hidden md:block absolute left-1/2 top-10 md:top-28 h-[calc(100%-260px)] w-0.5 bg-[#B1B1B1] -ml-0.5"></div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative mb-16 md:mb-20 last:mb-0 ${index % 2 === 0 ? "md:flex" : "md:flex md:flex-row-reverse"}`}
            >
           
<div className="md:hidden flex flex-row gap-[24px] items-start">

  <div className="w-[46px] flex justify-center">
    <div className="w-12 h-12 rounded-full bg-[#EBF5FE] flex items-center justify-center text-[20px] font-semibold text-black">
      {step.id}
    </div>
  </div>

  
  <div className="w-[328px] flex flex-col gap-[40px]">
    <div className="text-start">
      <p className="font-normal text-[20px] leading-relaxed">{step.title}</p>
    </div>
    <div>
      <img
        src={step.image}
        alt={`Step ${step.id}`}
        className="w-full object-cover object-top"
      />
    </div>
  </div>
</div>

              <div className={`hidden md:block md:w-2/5 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <div className="py-6 rounded-lg flex text-start">
                  <p className="text-xl">{step.title}</p>
                </div>
              </div>

              <div className="hidden md:block md:w-2/5">
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="w-full object-cover object-top"
                />
              </div>

              {/* Step badge - desktop only */}
              <div className="hidden md:flex absolute top-[112px] left-1/2 -translate-x-1/2 items-center justify-center w-20 h-10 rounded-full bg-[#EBF5FE] text-black font-normal text-[16px] z-10">
  Step {step.id}
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
