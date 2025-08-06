import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div className="min-h-[600px] my-10 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-6 z-10 w-full mx-auto max-w-[1296px] xl:max-w-[1296px] rounded-3xl bg-[#ebf5fe] md:rounded-t-3xl overflow-hidden">
        <div className="lg:w-3/4 flex flex-col justify-between gap-6 relative">
          <div className="pt-12 lg:pt-24 px-6 lg:px-10 pb-8 flex flex-col gap-4">
            <h1 className="text-[#181A20] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] lg:leading-[80px] mb-0">
              Need a Tutor?
              <br /> We can help.
            </h1>
            <p className="text-[#717171] text-base lg:text-lg font-normal ml-0 lg:ml-4 leading-6 lg:leading-8">
              Compare and find the best tutors to fit your needs.
            </p>
          </div>

          <div className="hidden min-[1024px]:block ">
            <img
              src="1.jpg"
              alt="Woman tutor"
              className="absolute  object-cover w-60 h-[330px] items-center -right-14 xl:-right-16 2xl:-right-24 top-5 rounded-[20px]"
            />
          </div>

          <div className="bg-white rounded-tr-3xl relative z-[5] py-6 lg:py-8 pl-3 pr-4 lg:pr-8">
            <div className="absolute left-0 top-[-65%] w-[50px] h-[65%] rounded-bl-3xl bg-[#ebf5fe] z-[4] hidden lg:block"></div>
            <div className="absolute left-0 top-[-65%] w-[50px] h-[70%] bg-white z-[1] hidden lg:block"></div>

            <form className="xl:w-[843px] w-full py-6 px-2 rounded-3xl bg-white shadow-[0_4px_40px_0_rgba(0,117,225,0.1)] flex flex-wrap items-center gap-4 lg:gap-[15px] relative z-[2]">
              <div className="flex flex-col gap-1.5 w-full sm:w-[calc(100%-8px)] lg:w-auto lg:flex-1">
                <label className="pl-[15px] text-[#181a20] text-[16px] font-normal leading-[24px]">
                  Area
                </label>
                <div className="relative w-full">
                  <select
                    className="w-full text-[#B1B1B1] text-[16px] font-normal leading-[24px] rounded-full border border-[#b1b1b1] bg-white outline-none py-[9px] px-[15px] appearance-none pr-10"
                    required
                  >
                    <option value="">Any</option>
                    <option value="海外+Overseas">Overseas</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b1b1b1] text-sm pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full sm:w-[calc(100%-8px)] lg:w-auto lg:flex-1">
                <label className="pl-[15px] text-[#181a20] text-[16px] font-normal leading-[24px]">
                  Lesson Fee
                </label>
                <div className="relative w-full">
                  <select
                    className="w-full text-[#B1B1B1] text-[16px] font-normal leading-[24px] rounded-full border border-[#b1b1b1] bg-white outline-none appearance-none py-[9px] px-[15px] pr-10"
                    required
                  >
                    <option value="" disabled selected>
                      Any
                    </option>
                    <option value="0-20">Under $20</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b1b1b1] text-sm pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full sm:w-[calc(100%-8px)] lg:w-auto lg:flex-1">
                <label className="pl-[15px] text-[#181a20] text-[16px] font-normal leading-[24px]">
                  Gender
                </label>
                <div className="relative w-full">
                  <select
                    className="w-full text-[#B1B1B1] text-[16px] font-normal leading-[24px] rounded-full border border-[#b1b1b1] bg-white outline-none appearance-none py-[9px] px-[15px] pr-10"
                    required
                  >
                    <option value="" disabled selected>
                      Any
                    </option>
                    <option value="男性+Male">Male</option>
                  </select>
                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#b1b1b1] text-sm pointer-events-none" />
                </div>
              </div>

              <button className="w-full sm:w-[calc(100%-8px)] lg:!w-[120px] lg:flex-[0_0_auto] text-white text-[16px] font-medium py-3 mt-2 sm:mt-5  lg:mt-7 flex justify-center items-center gap-1 rounded-full border bg-[#5183f4] hover:bg-[#3a6bd8] transition-colors">
                <img src="search-icon.svg" className="w-5 h-5" />
                Find Now
              </button>
            </form>

            <div className="absolute right-[-50px] bottom-[-0.7px] w-[50px] h-[80%] rounded-bl-3xl bg-[#ebf5fe] z-[4] border border-[#ebf5fe] hidden lg:block"></div>
            <div className="absolute right-[-20px] bottom-0 w-[50px] h-[70%] rounded-bl-3xl bg-white z-[1] hidden lg:block"></div>
          </div>
        </div>

        {/* Right Content - Hidden on screens 1024px and below */}
       <div className="relative hidden min-[1024px]:flex w-1/3 flex-col items-end justify-end p-4 mr-4 gap-2">
  {/* First Image Container - fixed height and width without stretching */}
  <div className=" w-[234px] h-[168px] overflow-hidden rounded-[20px]">
    <img
      src="3.png"
      alt="User"
      className="w-full h-full object-cover object-center rounded-[20px]"
    />
  </div>

  {/* Second Image with Overlay Card */}
  <div className="relative h-80 w-[234px] mb-8">
    <img
      src="2.jpg"
      alt="User"
      className="h-full w-full object-cover rounded-[20px]"
    />
    <div className="p-4 bg-white absolute w-[202px] bottom-0 lg:-left-12 2xl:-left-28 z-20 left-0 rounded-2xl shadow-lg">
      <p className="text-sm font-medium text-center text-gray-700 mb-2">
        Top Rated Tutors
      </p>
      <div className="flex -space-x-4">
        <div className="relative z-10">
          <img
            src="Ellipse 1.svg"
            alt="Top rated tutor 1"
            className="h-14 w-14 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="relative z-20">
          <img
            src="Ellipse 5.svg"
            alt="Top rated tutor 2"
            className="h-14 w-14 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="relative z-30">
          <img
            src="Ellipse 6.svg"
            alt="Top rated tutor 3"
            className="h-14 w-14 rounded-full border-4 border-white object-cover"
          />
        </div>
        <div className="relative z-40">
          <img
            src="Frame 24.svg"
            alt="Top rated tutor 4"
            className="h-14 w-14 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default HeroSection;
