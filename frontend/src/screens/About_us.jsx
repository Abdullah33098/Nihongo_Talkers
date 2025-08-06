import React from 'react'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

const AboutUs = () => {
  return (
    <div className="relative">
      <section className="relative w-full  ">
        <div className="relative w-full h-[200px] sm:h-[300px]">
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <img
            src="About us.jpg"
            alt="Team or classroom representing Nihongo Talkers"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-extrabold">
              About Us
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-[30px]  py-[30px] sm:py-[60px]  sm:pr-[60px] flex flex-col lg:flex-row lg:pr-[60px] gap-6 max-w-[1380px] 2xl:min-w-[1440px] mx-auto 2xl:px-4">
        <div className="flex-1 w-full">
          <div className="w-full sm:w-[708px] h-[250px] sm:h-[400px] bg-gray-100 overflow-hidden mx-auto">
            <video
              className="w-full h-full object-cover"
              src="file.mp4"
              controls
              playsInline
              preload="metadata"
              aria-label="Promotional video preview"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 sm:gap-[30px] max-w-full sm:max-w-[636px] px-4 sm:px-0">
          <ContentBlock
            title="Learning with personalized attention and guidance"
            body="from native Japanese speakers. We believe that one-on-one learning with native Japanese speakers provides students with a tailored learning experience, enabling them to derive maximum benefit from their lessons."
          />
          <ContentBlock
            title="Learning tailored to your needs"
            body="Select tutors that suit your individual schedule, budget, and interests. Whether you're a beginner, intermediate, or advanced learner, or seeking specialized instruction in areas such as pronunciation or test preparation, we offer various highly skilled native Japanese tutors to meet your requirements."
          />
          <ContentBlock
            title="Who We Are"
            body="Master both the fundamental grammar principles and the nuances of the language, empowering you to communicate with greater confidence and authenticity, akin to a native Japanese speaker."
          />
        </div>
      </section>

      <TestimonialsCarousel
        title="Student Testimonials"
  testimonials={[
    {
      name: "Heather",
      location: "CA",
      avatar: "/Ellipse 9.svg",
      quote: `I was hesitant to start learning Japanese online, but after my first session with my tutor here, I was pleasantly surprised. The tutor was patient, knowledgeable, and tailored the lessons to my specific needs and interests. From casual conversations to formal language structures, I felt supported every step of the way. Thanks to this platform, I'm now more confident in my speaking abilities and excited to continue my language`,
    },
    {
      name: "Amanda",
      location: "CT",
      avatar: "/Ellipse 9 (1).svg",
      quote: `Finding the right Japanese tutor was crucial for me, and I'm so glad I found this platform. My tutor not only helped me with grammar and vocabulary but also introduced me to colloquial expressions and real-life scenarios. Learning from a native speaker has made all the difference in my understanding and appreciation of the language. I couldn't have asked for a better learning experience. Arigatou gozaimasu!`,
    },
  ]}
/>



      <section className="relative py-8 sm:py-16 mb-[30px] sm:mb-[60px]">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(81, 131, 244, 0.5), rgba(81, 131, 244, 0.5)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
              }}
            ></div>
            <img
              src="BecomeTutor.jpg"
              alt="Become a Tutor"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center flex flex-col items-center justify-center mx-auto h-full px-4 sm:px-0">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                Unlock Your Language Potential with Nihongo Talkers Discover Your Perfect Tutor Today and Speak with Confidence
              </h2>
              <div className="mt-3">
                <a
                  href="/auth/signup"
                  className="bg-white text-[#5183F4] hover:bg-blue-50 font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-full transition duration-300 inline-block text-sm sm:text-base"
                >
                  Find Tutor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ContentBlock = ({ title, body }) => (
  <div className="mb-4 sm:mb-0">
    <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#181A20]">{title}</p>
    <p className="text-sm sm:text-base text-[#181A20] font-normal leading-relaxed sm:leading-[1.5]">
      {body}
    </p>
  </div>
)

export default AboutUs