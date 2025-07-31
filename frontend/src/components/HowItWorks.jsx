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
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          How it <span className="text-blue-600">Works</span>
        </h2>

        <div className="relative">
          {/* Vertical line - mobile */}
          <div className="absolute left-0 top-0 h-full w-[46px] bg-transparent sm:hidden">
            <div className="w-0.5 bg-[#B1B1B1] h-full mx-auto"></div>
          </div>

          {/* Vertical line - desktop */}
          <div className="hidden sm:block absolute left-1/2 top-10 h-[calc(100%-260px)] w-0.5 bg-[#B1B1B1] -ml-0.5"></div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative mb-12 sm:mb-20 last:mb-0 ${index % 2 === 0 ? "sm:flex" : "sm:flex sm:flex-row-reverse"}`}
            >
              {/* Mobile view (below 500px) */}
              <div className="sm:hidden flex flex-row gap-6 items-start">
                <div className="w-[46px] flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#EBF5FE] flex items-center justify-center text-xl font-semibold text-black">
                    {step.id}
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-4 sm:gap-10">
                  <div className="text-start">
                    <p className="font-normal text-lg sm:text-xl leading-relaxed">{step.title}</p>
                  </div>
                  <div>
                    <img
                      src={step.image}
                      alt={`Step ${step.id}`}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Desktop view (500px and above) */}
              <div className={`hidden sm:block sm:w-2/5 ${index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`}>
                <div className="py-6 rounded-lg flex text-start">
                  <p className="text-medium !text-[26px] sm:text-xl">{step.title}</p>
                </div>
              </div>

              <div className="hidden sm:block sm:w-2/5">
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="w-full rounded-lg object-cover"
                />
              </div>

              {/* Step badge - desktop only */}
              <div className="hidden sm:flex absolute top-[40px] left-1/2 -translate-x-1/2 items-center justify-center w-20 h-10 rounded-full bg-[#EBF5FE] text-black font-normal text-base z-10">
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