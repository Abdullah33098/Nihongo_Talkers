import React from "react";
import Progressbar from "./Progressbar";
import { useNavigate } from "react-router-dom";

const ageOptions = ["シニア", "成人", "大学生", "高校生", "中学生", "小学生", "幼児"];
const levelOptions = ["初心者", "初級", "中級", "上級"];
const qualificationOptions = [
  "CELTA",
  "TESOL",
  "TECSOL",
  "TESL/TEFL",
  "DELTA",
  "TOEIC",
  "TOEFL",
];
const teachingExperienceOptions = ["なし", "1年未満", "1〜3年", "3年以上"];

const checkboxStyle =
  "w-[15px] h-[15px] appearance-none border border-[#5183F4] rounded-[2px] checked:bg-[#5183F4] checked:border-[#5183F4] focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#5183F4] transition";

const TSTInformation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1440px] mx-auto lg:px-4 sm:px-0 pb-8 sm:pb-[60px]">
      <Progressbar currentStep={3} />

      <div className="max-w-[1320px] mx-auto">
        <div className="max-w-[1296px] bg-[#EBF5FE] rounded-3xl py-[30px] lg:py-[50px] sm:py-[30px] sm:px-[15px] flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-[#5183F4]">
            指導情報
          </h2>

          {/* Form Content */}
          <form className="w-full max-w-[718px] flex flex-col gap-6">
            {/* 対象年齢 */}
            <div>
              <label className="block font-medium text-[22px] text-[#181A20] mb-2">対象年齢</label>
              <div className="flex flex-col gap-2">
                {ageOptions.map((age) => (
                  <label key={age} className="flex items-center gap-2">
                    <input type="checkbox" className={checkboxStyle} />
                    {age}
                  </label>
                ))}
              </div>
            </div>

            {/* 対象レベル */}
            <div>
              <label className="block font-medium text-[22px] text-[#181A20] mb-2">対象レベル</label>
              <div className="flex flex-col gap-2">
                {levelOptions.map((level) => (
                  <label key={level} className="flex items-center gap-2">
                    <input type="checkbox" className={checkboxStyle} />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            {/* 初心者歓迎 */}
            <div>
              <label className="flex items-center gap-2">
                <input type="checkbox" className={checkboxStyle} />
                初心者歓迎！
              </label>
            </div>

            {/* 講師・語学資格 */}
            <div>
              <label className="block font-medium text-[22px] text-[#181A20] mb-2">講師・語学資格</label>
              <div className="flex flex-col gap-2">
                {qualificationOptions.map((q) => (
                  <label key={q} className="flex items-center gap-2">
                    <input type="checkbox" className={checkboxStyle} />
                    {q}
                  </label>
                ))}
              </div>
            </div>

            {/* 日本語講師歴 */}
            <div>
              <label className="block font-medium text-[22px] text-[#181A20] mb-2">日本語講師歴</label>
              <select className="w-full p-2 rounded border border-gray-300">
                {teachingExperienceOptions.map((exp) => (
                  <option key={exp}>{exp}</option>
                ))}
              </select>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 px-[15px] lg:px-0 sm:px-[15px]">
              <button
                type="button"
                className="border border-[#5183F4] text-[rgb(81,131,244)] px-8 py-3 w-[154px] rounded-full hover:bg-[#5183F4] hover:text-white transition"
                onClick={() => navigate("/tutor-application/step-2")}
              >
                戻る
              </button>
              <button
                type="submit"
                className="bg-[#5183F4] text-white px-10 w-[154px] py-3 rounded-full hover:bg-[#3b6de0] transition"
                onClick={() => navigate("/tutor-application/step-3")}
              >
                次
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TSTInformation;
