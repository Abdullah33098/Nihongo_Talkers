import React from "react";
import FAQ from "../components/FAQ";

const FAQPage = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto p-4 md:p-[60px] min-h-[420px]">
        <div className="w-full max-w-[1320px] mx-auto ">
          <div className="h-[326px] sm:h-[300px] bg-[#5183F4] rounded-[30px] p-6 md:p-[50px] gap-6 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-[32px] md:text-[60px] font-extrabold text-white leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-white font-normal text-sm md:text-[20px] max-w-[922px] mt-3 md:mt-4">
                Explore our Frequently Asked Questions section to find answers
                to common queries and get detailed information about our
                products/services.
              </p>
            </div>
            <img
              src="FAQHero.svg"
              alt="FAQ Illustration"
              className="absolute right-0 bottom-0 max-w-[811px] sm:max-w-[1000px]"
            />
          </div>
        </div>
        <FAQ
          title=""
          faqs={[
            {
              id: 1,
              question:
                "1. What is the difference between this site and introduction services or dispatch services for tutors?",
              answer:
                "NihongoTalkers.com is not a staffing agency, recruitment service, or teacher introduction service. We do not establish employment relationships or contracts between registered tutors. We only provide an online platform for interaction. Tutors looking for students can publish their own profiles on our platform. Matters related to lessons are conducted solely between users (students) and tutors on a personal basis. Our service allows users (students) to contact tutors directly to find instructors at low costs.",
            },
            {
              id: 2,
              question:
                "2. Can this site be used for purposes other than language lessons?",
              answer:
                "The platform is primarily designed for language instruction, but if a tutor and student mutually agree, it can be used for related educational coaching or cultural exchange topics. Any alternative use should be clearly communicated between both parties before scheduling.",
            },
            {
              id: 3,
              question: "3. What are the costs associated with this service?",
              answer:
                "Tutors set their own lesson prices. The platform may charge a nominal service or transaction fee (if applicable)—details are provided in your dashboard or during checkout. There are no hidden costs; all fees are disclosed upfront.",
            },
            {
              id: 4,
              question: "4. Can I receive a refund?",
              answer:
                "Refund policies depend on the agreement between the student and tutor. If a lesson is canceled with sufficient notice or does not meet agreed expectations, you should first contact the tutor to resolve. If unresolved, you can submit a support request through the platform for review.",
            },
            {
              id: 5,
              question: "5. How can I pay my tutor?",
              answer:
                "Payment methods are arranged directly between you and your tutor. Common methods include bank transfer, digital wallets, or in-person payment, depending on what the tutor accepts. Always confirm the preferred method before the lesson.",
            },
            {
              id: 6,
              question:
                "6. Can you provide information about payment for lessons?",
              answer:
                "Yes. Tutors typically specify accepted payment methods in their profile or during pre-lesson communication. Make sure to clarify currency, timing (before/after lesson), and any additional fees ahead of time.",
            },
            {
              id: 7,
              question: "7. Tutor rejected my request",
              answer:
                "Tutors may decline requests due to scheduling conflicts, mismatched goals, or capacity limits. You can try contacting other tutors, adjust your request (time/price), or send a follow-up message politely asking if availability has changed.",
            },
            {
              id: 8,
              question: "8. What should I do if none of the tutors respond to me?",
              answer:
                "Wait a reasonable amount of time (e.g., 24–48 hours) and then refresh your search. You can broaden criteria (availability, lesson type), send polite follow-up messages, or post a new request. If you're still having trouble, contact support for assistance or recommendations.",
            },
            {
              id: 9,
              question: "9. Where can I take a lesson?",
              answer:
                "Lessons can take place in locations agreed upon by you and the tutor: in-person at cafés or homes (if both parties are local and comfortable), or online via video call. Confirm place, platform, and any required setup before the lesson.",
            },
          ]}
        />
      </div>
    </>
  );
};

export default FAQPage;