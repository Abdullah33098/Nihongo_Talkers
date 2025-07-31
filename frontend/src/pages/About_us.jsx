import React from 'react'
import TestimonialsCarousel from '../components/TestimonialsCarousel'

const AboutUs = () => {
  return (
    <div className="relative">
      {/* Hero / Banner */}
      <section className="relative w-full pt-[80px]">
        <div className="relative w-full h-[300px]">
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <img
            src="About us.jpg"
            alt="Team or classroom representing Nihongo Talkers"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl md:text-[60px] font-extrabold">
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mt-[60px] py-[60px] px-4 lg:px-12 flex flex-col lg:flex-row gap-10 max-w-[1200px] mx-auto">
        {/* Media / Video Preview */}
        <div className="flex-1 min-w-0">
          <div className="aspect-[16/9] bg-gray-100 overflow-hidden rounded-2xl">
            <img
              src="video.svg"
              alt="Promotional video preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Textual Content */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">
          <ContentBlock
            title="Learning with personalized attention and guidance"
            body="From native Japanese speakers. We believe that one-on-one learning with native speakers provides students with a tailored learning experience, enabling them to derive maximum benefit from their lessons."
          />
          <ContentBlock
            title="Learning tailored to your needs"
            body="At Nihongo Talkers, we are passionate about bridging the gap between cultures through language. Our approach is flexible, adaptive, and centered around your goals."
          />
          <ContentBlock
            title="Who We Are"
            body="Our team consists of dedicated professionals and native Japanese speakers committed to making language learning engaging, effective, and culturally rich."
          />
        </div>
      </section>
      <TestimonialsCarousel />
              <section className="relative py-16 mb-[60px]">
            {/* Background Image with Custom Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    {/* Gradient Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(0deg, rgba(81, 131, 244, 0.5), rgba(81, 131, 244, 0.5)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                        }}
                    ></div>

                    {/* Background Image */}
                    <img
                        src="BecomeTutor.jpg"
                        alt="Become a Tutor"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-4">
                    <div className="text-center flex flex-col items-center justify-center mx-auto h-full">
                        <h2 className="text-4xl extrabold text-white mb-2">Unlock Your Language Potential with Nihongo Talkers Discover Your Perfect Tutor Today and Speak with Confidence</h2>

                        <div className="mt-3">
                            <a
                                href="/auth/signup"
                                className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition duration-300 inline-block"
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
  <div>
    <h2 className="text-[24px] font-semibold text-[#181A20]">{title}</h2>
    <p className="text-[16px] text-[#181A20] font-normal leading-[1.5]">{body}</p>
  </div>
)

export default AboutUs
