import React from "react";

const HowItWorks = ({ title, steps }) => {
  return (
    <section className="bg-white">
  <div className="max-w-[1440px] mx-auto">
    <div className="max-w-[1320px] mx-auto px-3">
      <div className="max-w-[1296px] mx-auto py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#181A20] mb-12 sm:mb-16">
          {title.main && <>{title.main} </>}
          <span className="text-[#5183F4]">{title.highlighted}</span>
        </h2>

        <div className="relative">
          
          <div className="absolute left-0 top-0 h-full w-[46px] bg-transparent sm:hidden">
            <div className="w-0.5 bg-[#B1B1B1] h-full mx-auto"></div>
          </div>

          
          <div className="hidden sm:block absolute left-1/2 top-[165px] h-[1520px] w-0.5 bg-[#B1B1B1] -ml-0.5"></div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative mb-12 sm:mb-20 last:mb-0 flex flex-col sm:flex-row ${
                index % 2 !== 0 ? "sm:flex-row-reverse" : ""
              } items-start`}
            >
              
              <div className="sm:hidden flex flex-row gap-6 items-start w-full">
                <div className="w-[46px] flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#EBF5FE] flex items-center justify-center text-xl font-semibold text-black">
                    {step.id}
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <div className="text-start">
                    <p className={`font-normal text-[26px] sm:text-xl leading-relaxed ${step.titleClassName || ""}`}> {step.title}</p>

                    <p className="text-base text-[#717171] mt-2">{step.description}</p>
                  </div>
                  <div>
                    <img
                      src={step.image}
                      alt={`${step.title} のイメージ`}
                      loading="lazy"
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>

          
              <div
                className={`hidden sm:flex sm:flex-col sm:w-2/5 py-6 rounded-lg h-[304px] ${
                  index % 2 === 0 ? "sm:mr-auto text-left" : "sm:ml-auto text-left"
                }`}
              >
                <div>
                  <p
                    className={`font-medium text-[26px]  leading-relaxed ${step.titleClassName || ""}`}
                  >
                    {step.title}
                  </p>

                  <p className="mt-2 text-base text-[#717171]">{step.description}</p>
                </div>
              </div>

              
              <div className="hidden sm:block sm:w-2/5">
                <img
                  src={step.image}
                  alt={`${step.title} のイメージ`}
                  loading="lazy"
                  className="w-full lg:w-[448px] rounded-lg object-cover"
                />
              </div>

              {/* Step badge - desktop only */}
             <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-[70px] h-10 rounded-full bg-[#EBF5FE] text-black font-normal text-base z-10">
  Step {step.id}
</div>

            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default HowItWorks;
