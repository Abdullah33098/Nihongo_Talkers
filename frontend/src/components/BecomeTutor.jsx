import React from "react";
import { useNavigate } from "react-router-dom";

const BecomeTutor = ({title, description, label}) => {
    const navigate = useNavigate();
 

    return (
        <section className="relative py-16">
           
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
                    <div className="text-center flex flex-col items-center justify-center mx-auto h-full">
                        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
                        <p className="text-xl text-white mb-2 max-w-2xl">
                            {description}
                        </p>
                        <div className="mt-3">
                            <a
                                onClick={() => navigate("/tutor-signup")}
                                className="bg-white text-[#5183F4] hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition duration-300 inline-block "
                            >
                                {label}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BecomeTutor;
