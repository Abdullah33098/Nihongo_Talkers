import React from "react";
import HowItWorks from "../components/HowItWorks";
import BecomeTutor from "../components/BecomeTutor";
import FAQ from "../components/FAQ.jsx";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import BenefitsSection from "../components/BenefitsSection.jsx";
const BecomeTutorPage = () => {
  return (
    <>
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

        <BenefitsSection />

        <div className="w-full flex   bg-[#F7F7F7] min-h-[500px] sm:min-h-[718px] justify-center items-center py-8 sm:py-12 lg:py-[60px] px-4 sm:px-6">
          <div className="h-auto w-full p-6 max-w-[1320px] sm:p-8 lg:p-[60px] flex flex-col items-center gap-4 sm:gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#5183F4] text-center">
              日本語講師募集中!
            </h1>
            <p className="text-base sm:text-lg lg:text-[20px] text-[#181A20] text-center">
              以下の条件に当てはまる方、大歓迎
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="flex flex-col h-full min-h-[300px] sm:min-h-[344px] p-4 sm:p-6 gap-3 w-full max-w-[306px] rounded-[10px] bg-white">
                <img
                  src="message.svg"
                  alt="tutor"
                  className="w-full max-w-[60px] h-auto mx-auto"
                />
                <p className="text-lg sm:text-xl font-medium text-center text-[#5183F4] mt-2">
                  日本語をネイティブレベルで話せる方
                </p>
                <p className="text-sm sm:text-base text-[#717171] text-center mt-2">
                  日本語をネイティブスピーカーと同じくらい流暢に話せる方を歓迎します！自然な発音や豊かな表現力で、生徒たちを魅了しましょう。
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col h-full min-h-[300px] sm:min-h-[344px] p-4 sm:p-6 gap-3 w-full max-w-[306px] rounded-[10px] bg-white">
                <img
                  src="Vector (2).svg"
                  alt="tutor"
                  className="w-full max-w-[60px] h-auto mx-auto"
                />
                <p className="text-lg sm:text-xl font-medium text-center text-[#5183F4] mt-2">
                  高いコミュニケーション能力を持つ方
                </p>
                <p className="text-sm sm:text-base text-[#717171] text-center mt-2">
                  コミュニケーション能力が高く、生徒との信頼関係を築ける方を求めています。生徒たちが自信を持って質問できる環境を作りましょう!
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col h-full min-h-[300px] sm:min-h-[344px] p-4 sm:p-6 gap-3 w-full max-w-[306px] rounded-[10px] bg-white">
                <img
                  src="bulb.svg"
                  alt="tutor"
                  className="w-full max-w-[60px] h-auto mx-auto"
                />
                <p className="text-lg sm:text-xl font-medium text-center text-[#5183F4] mt-2">
                  生徒のニーズに合わせてレッスンができる方
                </p>
                <p className="text-sm sm:text-base text-[#717171] text-center mt-2">
                  生徒たちのニーズや目標に合わせて、カスタマイズされたレッスンを提供できる方を探しています。個々の生徒の成長を支援することに情熱を持って取り組みましょう!
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col h-full min-h-[300px] sm:min-h-[344px] p-4 sm:p-6 gap-3 w-full max-w-[306px] rounded-[10px] bg-white">
                <img
                  src="clock.svg"
                  alt="tutor"
                  className="w-full max-w-[60px] h-auto mx-auto"
                />
                <p className="text-lg sm:text-xl font-medium text-center text-[#5183F4] mt-2">
                  柔軟なスケジュールで働ける方
                </p>
                <p className="text-sm sm:text-base text-[#717171] text-center mt-2">
                  自分のペースで働ける柔軟なスケジュールで、楽しいレッスンを提供しましょう！フリーランスや副業、複業など、自分の収入や仕事時間を自分でコントロールしたい方大歓迎!
                </p>
              </div>
            </div>
          </div>
        </div>

        <HowItWorks
          title={{ main: "", highlighted: "ご利用ガイド" }}
          steps={[
            {
              id: 1,
              title: "1. 生徒と先生をマッチング",
              description: "生徒からメールが届いたらすぐに返事をしましょう",
              image: "Frame 1119 (1).svg",
              titleClassName: "text-[#5183F4] font-semibold", // custom for this step
            },
            {
              id: 2,
              title: "2. レッスン前のコミュニケーション",
              description:
                "生徒のレベルや学習の要望を確認し、適切な教材を準備しましょう。また、ここでレッスン料金を明確にしておきましょう。そして、生徒と一緒にレッスン場所（カフェ、自宅、オンラインなど）を確認しましょう。",
              image: "Frame 1120 (1).svg",
              titleClassName: "text-[#5183F4] font-semibold",
            },
            {
              id: 3,
              title: "3. レッスン開始",
              description:
                "指定された場所（カフェ、自宅、オンラインなど）でレッスンを行います。レッスン料金は直接生徒からお支払いいただきます。",
              image: "Frame 1121 (1).svg",
              titleClassName: "text-[#5183F4] font-semibold",
            },
          ]}
        />
      </div>
      <BecomeTutor
        title="日本語の先生になって収入を増やしませんか?"
        description="ぜひご応募ください！"
        label="日本語の先生になる"
      />
      <FAQ
        title="FAQs: 日本語講師申込に関するよくある質問"
        faqs={[
          {
            id: 1,
            question: "1. 応募条件はありますか？アルバイトや副業も可能ですか？",
            answer: `日本語講師経験があれば、どなたでも申し込みいただけます。授業時間は自由に設定できるので、本業の空き時間を有効活用し、副業収入を得ることができます。`,
          },
          {
            id: 2,
            question: "2. 利用手数料は発生しますか？",
            answer: `プラットフォーム利用に関して手数料がかかる場合があります。詳細は契約時の案内をご確認ください。`,
          },
          {
            id: 3,
            question: "3. レッスン費用はどのように決めたら良いですか？",
            answer: `ご自身の経験や内容に応じてレッスン単価を設定してください。他講師の相場を参考にしつつ、生徒のニーズに合わせた柔軟な価格調整も可能です。`,
          },
          {
            id: 4,
            question: "4. レッスン費用の受け取り方法は？",
            answer: `レッスン後に生徒から直接お支払いを受け取る形になります。支払い方法の詳細はマイページで設定できます。`,
          },
          {
            id: 5,
            question: "5. 材を用意する必要はありますか？",
            answer: `基本的な教材はご自身でご用意ください。必要であればプラットフォーム上で共有テンプレートも活用できます。`,
          },
        ]}
      />
      <TestimonialsCarousel
        title="​日本語講師の声・体験談"
        testimonials={[
          {
            name: "健二, ",
            location: "石川県",
            avatar: "/Ellipse 9.svg",
            quote: `外国の方と交流する喜びを日々感じています。彼らが日本語を学ぶ過程で、日本の文化や伝統に触れることができることを嬉しく思います。`,
          },
          {
            name: "綾香,",
            location: "東京都",
            avatar: "/Ellipse 9 (1).svg",
            quote: `日本語講師として活動することで、日本の文化や習慣を紹介する喜びを味わっています。生徒と共に日本の魅力を探求することが楽しいです。`,
          },
        ]}
      />
    </>
  );
};

export default BecomeTutorPage;
