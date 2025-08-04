// TestimonialsCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TestimonialsCarousel = ({title, testimonials = [] }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) =>
        testimonials.length > 0 ? (prev + 1) % testimonials.length : 0
      );
    }, 6000);
  };

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    resetTimer();
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, testimonials]);

  const handleDotClick = (idx) => {
    setCurrent(idx);
  };

  if (!testimonials || testimonials.length === 0) return null;

  const currentNext = (current + 1) % testimonials.length;

  return (
    <div className="bg-[#F7F7F7] py-16 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        <h2 className="text-center text-[34px] font-extrabold text-[#5183F4]">
          {title}
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-center gap-6">
          <TestimonialCard {...testimonials[current]} />
          <div className="hidden md:block">
            <TestimonialCard {...testimonials[currentNext]} />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => handleDotClick(idx)}
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

const TestimonialCard = ({ name, location, avatar, quote }) => (
  <div className="bg-white rounded-2xl shadow-md p-8 flex-1 max-w-[550px] min-w-[280px] relative">
    <div className="flex items-center gap-4 mb-4 relative">
      <div className="relative flex-shrink-0">
        <img
          src={avatar}
          alt={`${name}, ${location}`}
          className="w-16 h-16 rounded-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="text-[20px] font-medium text-[#5183F4]">
        {name} <span className="font-normal text-[#5183F4] ml-1">({location})</span>
      </div>

      <div className="absolute top-0 right-0 text-[80px] text-[#cfdcff] font-bold select-none pointer-events-none leading-none">
        &ldquo;
      </div>
    </div>

    <div className="text-[20px] font-normal leading-relaxed text-[#717171] relative">
      <p className="mt-1">“{quote}”</p>
    </div>
  </div>
);

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      avatar: PropTypes.string,
      quote: PropTypes.string.isRequired,
    })
  ),
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  quote: PropTypes.string.isRequired,
};

export default TestimonialsCarousel;
