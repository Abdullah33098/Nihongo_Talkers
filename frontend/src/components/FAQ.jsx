import React, { useState, useEffect, useCallback, memo } from "react";

const AccordionItem = memo(({ faq, isOpen, onToggle }) => {
  const contentId = `faq-content-${faq.id}`;
  const buttonId = `faq-button-${faq.id}`;

  return (
    <div className="rounded-lg overflow-hidden mb-3 mx-auto max-w-[1100px]">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="w-full flex justify-between items-center bg-[#EBF5FE] rounded-lg text-left hover:bg-[#d8e5ff] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5183F4] px-6 py-5"
      >
        <span className="text-2xl font-medium text-[#181A20]">{faq.question}</span>
        <span
  className={`ml-4 flex flex-shrink-0 items-center justify-center transition-transform duration-200 rounded-full w-6 h-6 ${
    isOpen ? "rotate-180" : "rotate-0"
  } bg-[#5183F4]`}
  aria-hidden="true"
>
  <img
    src="Vector (3).svg"
    alt=""
    aria-hidden="true"
    className="w-3 h-1.5"
    role="presentation"
  />
</span>

      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`px-6 pt-3 overflow-hidden transition-[max-height,opacity] duration-300 ${
          isOpen
            ? "max-h-[800px] pb-5 opacity-100"
            : "max-h-0 pb-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <p className="text-[16px] text-[#717171] leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
});

const FAQSection = ({ faqs, title }) => {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (faqs && faqs.length > 0) {
      setOpenId((prev) => (prev == null ? faqs[0].id : prev));
    }
  }, [faqs]);

  const toggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#4F7CFF] mb-10">
          {title}
        </h2>
        <div className="space-y-2">
          {faqs.map((f) => (
            <AccordionItem
              key={f.id}
              faq={f}
              isOpen={openId === f.id}
              onToggle={() => toggle(f.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
