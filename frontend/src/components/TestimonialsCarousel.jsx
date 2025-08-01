import React, { useState, useEffect, useRef } from "react";

const testimonials = [
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
];

const TestimonialCard = ({ name, location, avatar, quote }) => (
  <div className="bg-white rounded-2xl shadow-md p-8 flex-1 max-w-[550px] min-w-[280px] relative">
    <div className="flex items-center gap-4 mb-4 relative">
      
      <div className="relative flex-shrink-0">
        <img
          src={avatar}
          alt={`${name}, ${location}`}
          className="w-16 h-16 rounded-full object-cover"
        />
        
      </div>
      
      <div className="text-[20px] font-medium text-[#5183F4]">
        {name} <span className="font-normal text-[#5183F4]">{location}</span>
      </div>
       <div className="absolute top-0 right-0 text-[80px] text-[#cfdcff] font-bold select-none pointer-events-none leading-none">
        &ldquo;
      </div>
    </div>
     

    <div className="text-[20px] font-normal leading-relaxed text-[#717171] relative">

      <p className="mt-1">{quote}</p>
    </div>
  </div>
);

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="bg-[#F7F7F7] py-16 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        <h2 className="text-center text-[34px] font-extrabold text-[#5183F4]">
          Student Testimonials
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-center gap-6">
          <TestimonialCard {...testimonials[current]} />
          <div className="hidden md:block">
            <TestimonialCard
              {...testimonials[(current + 1) % testimonials.length]}
            />
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex items-center gap-3 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current
                  ? "bg-[#3B5BFF] scale-110"
                  : "bg-[#B8B8B8] opacity-60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
