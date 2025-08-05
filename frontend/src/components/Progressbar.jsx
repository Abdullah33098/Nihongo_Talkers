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
    <div className="max-w-[1440px] bg-white p-[60px] flex  items-center">
      <div className="max-w-[1320px] mx-auto px-[60px]">
        <div className="flex justify-between items-center ">
          {steps.map((label, index) => {
            const isActive = index === currentStep;

            return (
              <div key={index} className="flex flex-col  w-[216px] flex-1">
               
                <div
                  className={`h-2 w-full rounded-full ${
                    isActive ? "bg-[#5183F4]" : "bg-[#E9F1FF]"
                  }`}
                />
                <div className="mt-2 text-[16px] text-left text-[#181A20] whitespace-nowrap">
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
