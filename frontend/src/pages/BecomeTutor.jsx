import React from "react";

const BecomeTutor = () => {
  return (
    <div className="flex justify-center w-full items-center py-[60px] flex-col">
      <div
        className="relative w-full bg-cover h-[550px] bg-center overflow-hidden"
        style={{ backgroundImage: "url('/bg-becomeTutor.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-black/30" />
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-transparent to-[#5183f433]" />
        <div className="w-full h-full">
          <div className="relative z-10 h-full flex items-center ">
            <div
              className="flex flex-col gap-6 max-w-[784px] mx-auto w-full !pl-[72px]"
              style={{ maxWidth: "1440px" }}
            >
              <h1 className="text-[60px] font-extrabold text-white leading-tight max-w-[784px] ">
                カフェ、自宅、オンラインで日本語を教えませんか。
              </h1>
              <button className="w-fit px-6 py-4 bg-white text-[#5183F4] text-lg font-medium rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-md">
                日本語の先生になる
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-[750px] p-[60px]">
        <div className="w-[1320px] h-[619px] px-3 gap-6 flex flex-row">
          <div className="w-[630px] flex flex-col gap-6">
            <h2 className="text-5xl font-extrabold text-[#5183F4]">
              Nihongo Talkersで 日本語講師になるメリット{" "}
            </h2>
            <div className="flex flex-col w-[524px] gap-6">
              <div className="flex flex-col gap-6 items-start">
                <div className="flex flex-row">
                  <p className="rounded-full bg-[#5183F4] w-9 h-9 text-[20px] text-white py-[3px] px-3.5 ">
                    1
                  </p>
                  <div className="pl-[60px] w-[464px]">
                    <p className="text-[20px] font-semibold text-[#181A20]">
                      自由なレッスン単価設定
                    </p>
                    <p className="text-[16px] text-[#717171]">
                      レッスンは、体験レッスンと通常レッスンの2種類があります。自分のスキルに見合った金額でレッスン料を自由に設定できます。
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className="rounded-full bg-[#5183F4] h-9 *: text-[20px] text-white py-[3px] px-3.5">
                    2
                  </p>
                  <div className="pl-[60px] w-[464px]">
                    <p className="text-[20px] font-semibold text-[#181A20]">
                      自由なレッスン時間設定
                    </p>
                    <p className="text-[16px] text-[#717171]">
                      レッスン時間に制限はありません。月曜日から日曜日まで、空いている時間にレッスンを行うことができます。
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <p className="rounded-full bg-[#5183F4] h-9 w-9 text-[20px] text-white py-[3px] px-3.5">
                    3
                  </p>
                  <div className="pl-[60px] w-[464px]">
                    <p className="text-[20px] font-semibold text-[#181A20]">
                      好きな場所でのレッスン
                    </p>
                    <p className="text-[16px] text-[#717171]">
                      カフェや自宅でのマンツーマンレッスン、またはヘッドホンとウェブカメラがあれば、どこでもオンラインレッスンが可能です。1台のパソコンで収入を確保できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="findtutor.svg"
              alt="Become a Tutor"
              className="w-[630px] h-[619px] object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>

    <div className="w-full flex h-[718px] justify-center items-center py-[60px] ">
        <div className="h-[598px] w-full bg-[#F7F7F7] p-[60px] justify-center items-center flex flex-col gap-6 px-3">
            <h1 className="text-5xl font-extrabold text-[#5183F4]">日本語講師募集中!</h1>
            <p className="text-[20px] text-normal text-[#181A20]">以下の条件に当てはまる方、大歓迎</p>
            <div className="w-[1296px] h-[344px] flex flex-col lg:flex-row items-center justify-center gap-4">
                <div className="flex flex-col gap-4 w-[306px] h-[344px] rounded-[10px] justify-center items-center bg-[#FFFFFF]">
                    <h2 className="text-2xl font-bold text-[#181A20]">条件1</h2>
                    <p className="text-[16px] text-[#717171]">日本語を母国語とする方</p>
                </div>
                <div className="flex flex-col gap-4 w-[306px] h-[344px] rounded-[10px] justify-center items-center bg-[#FFFFFF]">
                    <h2 className="text-2xl font-bold text-[#181A20]">条件2</h2>
                    <p className="text-[16px] text-[#717171]">オンラインでの指導経験がある方</p>
                </div>
                <div className="flex flex-col gap-4 w-[306px] h-[344px] rounded-[10px] justify-center items-center bg-[#FFFFFF]">
                    <h2 className="text-2xl font-bold text-[#181A20]">条件3</h2>
                    <p className="text-[16px] text-[#717171]">日本語教育に情熱を持っている方</p>
                </div>
                <div className="flex flex-col gap-4 w-[306px] h-[344px] rounded-[10px] justify-center items-center bg-[#FFFFFF]">
                    <h2 className="text-2xl font-bold text-[#181A20]">条件4</h2>
                    <p className="text-[16px] text-[#717171]">日本語教育に情熱を持っている方</p>
                </div>
            </div>

        </div>
    </div>
    </div>
  );
};

export default BecomeTutor;
