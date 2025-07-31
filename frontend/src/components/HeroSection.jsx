import { FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="min-h-[600px] my-10 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-6 z-10 w-full mx-auto max-w-7xl xl:[1296px] rounded-3xl bg-[#ebf5fe] overflow-hidden">

        <div className="lg:w-3/4 flex flex-col justify-between gap-6 relative">
          <div className="pt-12 lg:pt-[60px] w-full max-w-[606px] px-[30px] lg:px-[30px] pb-8 flex flex-col gap-4">
            <h1 className="text-[#181A20] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] lg:leading-[80px] mb-0">
              Need a Tutor?
              <br /> We can help.
            </h1>
            <p className="text-[#717171] text-base lg:text-lg font-normal ml-0 lg:ml-4 leading-6 lg:leading-8">
              Compare and find the best tutors to fit your needs.
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              src="1.jpg"
              alt="Woman tutor"
              className="w-[239px] object-cover absolute h-[330px] lg:w-60 -right-8 xl:-right-6 top-5 rounded-2xl"
            />
          </div>

          <div className="bg-white w-full lg:w-[843px] rounded-tr-[30px] relative z-[5] px-[15px] pt-[30px] pb-[40px]">
            <div className="absolute left-0 top-[-200%] w-[30px] h-[134px] rounded-bl-3xl z-[4] hidden lg:block"></div>

            <form className="w-full bg-white rounded-2xl shadow-[0_4px_40px_0_rgba(0,117,225,0.1)] flex flex-col lg:flex-row items-center gap-4 lg:gap-[15px] p-4 lg:h-[134px] relative z-[2]">

              <div className="flex flex-col gap-1.5 w-full lg:w-[200px] pl-0 lg:pl-[15px]">
                <label className="pl-[15px] text-[#181a20] text-[16px] font-normal leading-[24px]">
                  Area
                </label>
                <div className="relative">
                  <select
                    className="w-full text-[#181a20] text-[16px] font-normal leading-[24px] rounded-full border border-[#b1b1b1] outline-none py-[9px] px-[15px] appearance-none pr-10"
                    required
                  >
                    <option value="">Any</option>
                    <option value="Overseas">Overseas</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <FaChevronDown className="text-[#b1b1b1] text-sm" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full lg:w-[200px]">
                <label className="pl-[15px] text-[#181a20] text-[16px] font-normal leading-[24px]">
                  Lesson Fee
                </label>
                <div className="relative">
                  <select
                    className="w-full text-[#181a20] text-[16px] font-normal leading-[24px] rounded-full border border-[#b1b1b1] outline-none py-[9px] px-[15px] appearance-none pr-10"
                    required
                  >
                    <option value="" disabled selected>Any</option>
                    <option value="0-20">Under $20</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <FaChevronDown className="text-[#b1b1b1] text-sm" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full lg:w-[200px]">
                <label className="pl-[15px] text-[#181a20] text-[16px] font-normal leading-[24px]">
                  Gender
                </label>
                <div className="relative">
                  <select
                    className="w-full text-[#181a20] text-[16px] font-normal leading-[24px] rounded-full border border-[#b1b1b1] outline-none py-[9px] px-[15px] appearance-none pr-10"
                    required
                  >
                    <option value="" disabled selected>Any</option>
                    <option value="Male">Male</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <FaChevronDown className="text-[#b1b1b1] text-sm" />
                  </div>
                </div>
              </div>

              <button className="min-w-[120px] text-white text-[16px] font-normal mt-2 lg:mt-6 py-3 px-6 flex justify-center items-center gap-1 rounded-full bg-[#5183f4] hover:bg-[#3a6bd8] transition-colors">
                <img src="search-icon.svg" alt="Search Icon" className="w-5 h-5" />
                Find Now
              </button>
            </form>

            <div className="absolute right-[-30px] bottom-[-0.7px] w-[30px] h-[80%] rounded-bl-3xl bg-[#ebf5fe] z-[4] border border-[#ebf5fe] hidden lg:block"></div>
            <div className="absolute right-[-20px] bottom-0 w-[30px] h-[70%] rounded-bl-3xl bg-white z-[1] hidden lg:block"></div>
          </div>
        </div>

        <div className="hidden xl:flex py-8 w-1/4 flex-col items-center mr-4 gap-2">
          <div style={{ position: 'relative', width: '370px', height: '187px' }}>
            <img
              src="Graph.svg"
              alt="Followers Graph"
              className="h-[224px] w-full object-cover rounded-2xl"
            />
          </div>

          <div className="h-80 w-[258px] pt-3 relative inline-block">
            <img
              src="2.jpg"
              alt="User"
              className="h-full w-full object-cover rounded-2xl"
            />
            <div className="absolute w-full -bottom-10 2xl:-left-25 left-0">
              <img
                src="4.svg"
                alt="Tutor"
                className="!w-[202px] !h-[118px] rounded-full object-cover mb-2"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
