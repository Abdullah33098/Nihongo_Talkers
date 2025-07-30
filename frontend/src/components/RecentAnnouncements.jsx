import React, { useState } from 'react';

const RecentAnnouncements = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const announcements = [
    {
      date: "21",
      month: "MAR",
      title: " Get Unlimited Access to Courses ",
      content:
        "Nihongo Talkers is a new tutor matching platform where passionate Japanese tutors and eager students can connect and embark on a journey of language learning together. Whether you're looking to improve your Japanese for travel, work, or personal growth, our dedicated tutors are here to guide you every step of the way. Join us and start your Japanese learning adventure with Nihongo Talkers!",
    },
    {
      date: "21",
      month: "MAR",
      title: " Get Unlimited Access to Courses  ",
      content:
        "We are excited to share that our service is incredibly affordable. For just $8, you can get the contact information of up to 5 skilled Japanese tutors on Nihongo Talkers. This allows you to choose the perfect tutor to match your learning style and goals. Don't miss out on this amazing opportunity to enhance your Japanese language skills with the guidance of experienced tutors.",
    },
    {
      date: "21",
      month: "MAR",
      title: " Get Unlimited Access to Courses  ",
      content:
        "We are constantly working to improve your experience on Nihongo Talkers. Stay tuned for exciting new features that will enhance your learning journey, including personalized lesson plans, interactive quizzes, and more. We value your feedback, so please let us know what features you would like to see next!",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-[30px]  pl-[15px] bg-gray-50">
      <div className="mx-auto max-w-[428px] sm:max-w-7xl">
        <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-8">
          {/* Announcements */}
          <div className="w-full lg:w-7/12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recent <span className="text-blue-600">Announcements</span>
              </h2>
              <p className="text-gray-600">
                Stay updated with our latest news and announcements in this section. Explore recent developments, events, and important information here.
              </p>
            </div>

            <div className="space-y-4">
              {announcements.map((item, index) => (
                <div key={index} className=" overflow-hidden  bg-white">
                  <button
                    className="flex items-center w-full text-left"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="bg-blue-600 text-white rounded-l-lg p-6 text-center min-w-[90px]">
                      <span className="block text-[26px] font-medium">{item.date}</span>
                      <span className="block font-medium text-[20px]">{item.month}</span>
                    </div>
                    <div className="flex justify-between items-center w-full px-4 py-4">
                      <span className="font-semibold text-[18px] text-gray-800">
                        {item.title}
                      </span>
                      <img
                        src="arrow.svg"
                        alt="Arrow Icon"
                        className={`ml-2 h-5 w-5 transform transition-transform ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      activeIndex === index ? "max-h-[400px]" : "max-h-0"
                    }`}
                  >
                    <div className="p-4 bg-gray-50  text-gray-600 text-sm">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-5/12 flex justify-center items-center">
            <img
    src="RecentAnnouncements.jpg"
    alt="Announcement"
    className="w-[596px] h-[620px] object-cover rounded-tl-[20px] rounded-bl-[20px]"
    loading="lazy"
  />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentAnnouncements;
