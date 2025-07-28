import React from "react";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "1. Browse tutors to review their background, experience, and student feedback.",
            image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-01.png&w=640&q=75",
        },
        {
            id: 2,
            title: '2. Select up to 5 tutors and add your preferred tutors to your "Tutor Cart"',
            image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-02.png&w=640&q=75",
        },
        {
            id: 3,
            title: "3. At the checkout page, if you're a first-time user, please create an account with your name and email address. Then, proceed to purchase contact information for up to 5 tutors.",
            image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-03.png&w=640&q=75",
        },
        {
            id: 4,
            title: "4. Upon completing the purchase, the email addresses of the five tutors will be delivered to your account page.",
            image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-04.png&w=640&q=75",
        },
        {
            id: 5,
            title: "5. Contact the teachers directly and begin your Japanese lessons.",
            image: "https://developement.d1oq8jxq519ok1.amplifyapp.com/_next/image?url=%2Fassets%2Fimages%2FHowitWork%2Fimage-05.png&w=640&q=75",
        },
    ];

    return (
        <section className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-4xl font-bold text-center mb-16">
                    How it <span className="text-blue-600">Works</span>
                </h2>

                <div className="relative">
                    {/* Timeline line - mobile and desktop */}
                    <div className="absolute left-4 md:left-1/2 top-10 md:top-28 h-full md:h-[calc(100%-260px)] w-0.5 bg-gray-300 -ml-0.5"></div>

                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`relative mb-16 md:mb-20 last:mb-0 ${index % 2 === 0 ? "md:flex" : "md:flex md:flex-row-reverse"
                                }`}
                        >
                            {/* Step badge (mobile) */}
                            <div className="md:hidden flex items-center gap-2 mb-4 pl-10 relative">
                                <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-sm font-bold text-black">
                                    {step.id}
                                </div>
                                <span className="text-lg font-medium">Step {step.id}</span>
                            </div>

                            {/* Content */}
                            <div className={`md:w-2/5 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                                <div className="py-6 rounded-lg flex text-start">
                                    <p className="text-lg md:text-xl leading-relaxed">{step.title}</p>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="mt-6 md:mt-0 md:w-2/5">
                                <img
                                    src={step.image}
                                    alt={`Step ${step.id}`}
                                    className="w-full object-cover object-top"
                                />
                            </div>

                            {/* Step badge (desktop) */}
                            <div className="hidden md:flex absolute left-1/2 -ml-10 top-1/2 -mt-8 items-center justify-center w-20 h-10 rounded-full bg-blue-200 text-black font-bold">
                                Step {step.id}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
