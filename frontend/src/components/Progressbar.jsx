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
  const totalSteps = steps.length;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;
  const dashArray = `${(progressPercent / 100) * 100} 100`; // for SVG stroke

  return (
    <div className='w-full flex items-center justify-center'>
      <div className="w-full bg-white p-4 md:p-[60px]">

        {/* Mobile view - circular step indicator */}
      <div className="md:hidden flex items-center justify-between w-full">
  {/* Gauge */}
  <div className="relative w-20 h-20 flex-shrink-0">
    <svg
      className="rotate-[-90deg] w-full h-full"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        className="stroke-[#E9F1FF]"
        strokeWidth="2"
        strokeDasharray="100 100"
        strokeLinecap="round"
      />
      {/* Progress */}
      <circle
        cx="18"
        cy="18"
        r="16"
        fill="none"
        className="stroke-[#5183F4]"
        strokeWidth="2.5"
        strokeDasharray={dashArray}
        strokeLinecap="round"
      />
    </svg>

    {/* Text inside gauge */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <span className="text-xs text-gray-500">Step</span>
      <span className="text-sm font-bold text-[#5183F4]">
        {currentStep + 1} of {totalSteps}
      </span>
    </div>
  </div>

  {/* Step labels */}
  <div className="flex flex-col text-right">
    <p className="font-bold text-lg text-[#181A20]">
      {currentStep + 1}. {steps[currentStep]}
    </p>
    {currentStep + 1 < totalSteps && (
      <p className="text-gray-400">
        {currentStep + 2}. {steps[currentStep + 1]}
      </p>
    )}
  </div>
</div>



        {/* Desktop view - full progress bar (unchanged) */}
        <div className="hidden md:block max-w-[1320px] mx-auto px-3">
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
