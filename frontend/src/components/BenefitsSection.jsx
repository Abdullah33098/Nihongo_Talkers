// BenefitsSection.jsx
import React from "react";

const benefits = [
  {
    id: 1,
    title: "自由なレッスン単価設定",
    description:
      "レッスンは、体験レッスンと通常レッスンの2種類があります。自分のスキルに見合った金額でレッスン料を自由に設定できます。",
  },
  {
    id: 2,
    title: "自由なレッスン時間設定",
    description:
      "レッスン時間に制限はありません。月曜日から日曜日まで、空いている時間にレッスンを行うことができます。",
  },
  {
    id: 3,
    title: "好きな場所でのレッスン",
    description:
      "カフェや自宅でのマンツーマンレッスン、またはヘッドホンとウェブカメラがあれば、どこでもオンラインレッスンが可能です。1台のパソコンで収入を確保できます。",
  },
];

const BenefitItem = ({ id, title, description }) => (
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    <div className="flex-shrink-0">
      <div className="rounded-full bg-[#5183F4] w-9 h-9 flex items-center justify-center text-[20px] text-white font-semibold">
        {id}
      </div>
    </div>
    <div className="sm:pl-2 lg:pl-[60px] flex-1">
      <p className="text-[18px] sm:text-[20px] font-semibold text-[#181A20]">{title}</p>
      <p className="text-[14px] sm:text-[16px] text-[#717171] mt-1">{description}</p>
    </div>
  </div>
);

const BenefitsSection = () => (
  <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6 lg:gap-8 max-w-full lg:max-w-[630px]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#5183F4]">
            Nihongo Talkersで 日本語講師になるメリット
          </h2>
          <div className="flex flex-col gap-6 sm:gap-8 w-full">
            {benefits.map((b) => (
              <BenefitItem
                key={b.id}
                id={b.id}
                title={b.title}
                description={b.description}
              />
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0 lg:self-center">
          <img
            src="findtutor.svg"
            alt="Become a Tutor"
            className="w-full max-w-[500px] sm:max-w-[630px] h-auto object-cover rounded-[20px] sm:rounded-[30px] mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
  </div>
);

export default BenefitsSection;