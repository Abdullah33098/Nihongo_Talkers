import React from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";

const DownloadResources = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4 relative">
            <section className="relative bg-blue-600 rounded-3xl overflow-hidden">
                <div className="absolute inset-3 -right-1/2 top-0 opacity-20" />
                
                <header className="relative z-10 p-8 md:p-12">
                    <section className="w-full mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Download the FREE Japanese PDF Resources
                        </h2>
                        <p className="text-white mb-8">
                            Write your name and email address below and access to your free PDF worksheet! Once you complete the form on the page and submit it, you will receive an email from us with the links to the PDF files. Please also check your spam or junk folder if you don't see the email in your inbox.
                        </p>

                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="relative">
                                    <div className="relative">
                                        <input
                                            id="FirstName"
                                            className="peer w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                        />
                                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <label
                                            htmlFor="FirstName"
                                            className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200 
                                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:translate-y-0"
                                        >
                                            First Name
                                        </label>
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="relative">
                                    <div className="relative">
                                        <input
                                            id="LastName"
                                            className="peer w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                        />
                                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <label
                                            htmlFor="LastName"
                                            className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200 
                                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:translate-y-0"
                                        >
                                            Last Name
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Email + Submit */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {/* Email */}
                                <div className="md:col-span-3 relative">
                                    <div className="relative">
                                        <input
                                            id="Email"
                                            className="peer w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <label
                                            htmlFor="Email"
                                            className="absolute left-10 top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-200 
                                            peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:translate-y-0"
                                        >
                                            Email
                                        </label>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex items-center">
                                    <button
                                        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </header>
            </section>
        </section>
    );
};

export default DownloadResources;
