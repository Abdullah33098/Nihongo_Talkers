import React from 'react';

const steps = [
  "個人情報",         
  "背景情報",         
  "レッスン料金",      
  "指導情報",         
  "レッスンエリア＆日程", 
  "連絡先",            
];

const Progressbar = ({ currentStep }) => {
  return (
    <div className='w-full flex items-center justify-center'>
      <div className="w-full bg-white p-4 md:p-[60px]">
        {/* Mobile view - simple step indicator */}
        <div className="md:hidden flex flex-col items-center">
          <div className="text-[16px] font-medium mb-2">
            Step {currentStep + 1} of {steps.length}
          </div>
          <div className="flex gap-2 w-full">
            {steps.slice(0, 2).map((label, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className={`h-2 w-full rounded-full ${
                    index <= currentStep ? "bg-[#5183F4]" : "bg-[#E9F1FF]"
                  }`}
                />
                <div className={`mt-2 text-[14px] text-center ${
                  index <= currentStep ? "text-[#5183F4] font-medium" : "text-[#181A20]"
                } whitespace-nowrap`}>
                  {index + 1}. {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - full progress bar */}
        <div className="hidden md:block max-w-[1320px] mx-auto px-[60px]">
          <div className="flex justify-between items-center">
            {steps.map((label, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;

              return (
                <div key={index} className="flex flex-col w-[216px] flex-1">
                  <div
                    className={`h-2 w-full rounded-full ${
                      isCompleted || isActive ? "bg-[#5183F4]" : "bg-[#E9F1FF]"
                    }`}
                  />
                  <div className={`mt-2 text-[16px] text-left whitespace-nowrap ${
                    isCompleted || isActive ? "text-[#5183F4] font-medium" : "text-[#181A20]"
                  }`}>
                    {index + 1}. {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;