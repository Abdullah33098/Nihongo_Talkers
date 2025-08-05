import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, TextAreaField } from "../components/ui/InputField";

// Validation Schema
const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Message too short").required("Required"),
});

const ContactUs = () => {
  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle successful submission
      setStatus({ success: true });
      resetForm();
    } catch (error) {
      setStatus({ error: "Submission failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white">
      <div className="w-full max-w-[1440px] justify-center items-center p-4 sm:p-6 md:p-[60px] flex bg-white">
        <div className="w-full max-w-[1320px] px-[60px] flex flex-col lg:flex-row rounded-[30px] overflow-hidden ">
        <div className="w-full !max-w-[1296px] flex flex-col lg:flex-row ">
          {/* Left side - Image */}
          <div className="hidden lg:block w-full lg:w-[412px] bg-[#EBF5FE] ">
            <img
              src="/contact.jpg"
              alt="Team members smiling and working together"
              className="w-full h-full object-cover rounded-l-[30px]"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-[884px] px-4 sm:px-6 py-6 sm:py-8 md:py-[50px] flex flex-col gap-4 sm:gap-6 bg-[#EBF5FE] rounded-r-[30px]">
            <h1 className="text-3xl sm:text-4xl md:text-[60px] font-extrabold text-[#5183F4]">
              Contact Us
            </h1>

            <p className="text-sm sm:text-base md:text-[20px] text-[#717171]">
              For immediate assistance, check out our FAQs where you'll find
              answers to many frequently asked questions.
              <br className="hidden sm:block" />
              Reach out to Nihongo Talkers Customer Support by email at
              info@nihongotalkers.com. Our team can typically respond to emails
              within 1-3 business days.
            </p>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, status }) => (
                <Form className="flex flex-col gap-4 sm:gap-6">
                  {status?.success && (
                    <div className="p-3 sm:p-4 mb-2 sm:mb-4 text-sm sm:text-base text-green-800 bg-green-100 rounded-lg">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  {status?.error && (
                    <div className="p-3 sm:p-4 mb-2 sm:mb-4 text-sm sm:text-base text-red-800 bg-red-100 rounded-lg">
                      {status.error}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* First Name */}
                    <Field name="firstName">
                      {({ field, meta }) => (
                        <div className="w-full">
                          <Input
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            icon={
                              <img
                                src="/Layer_1 (5).svg"
                                alt="User Icon"
                                className="w-5 h-5 sm:w-6 sm:h-6"
                              />
                            }
                            error={meta.touched && meta.error}
                            {...field}
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="mt-1 text-xs sm:text-sm text-red-600"
                          />
                        </div>
                      )}
                    </Field>

                    {/* Last Name */}
                    <Field name="lastName">
                      {({ field, meta }) => (
                        <div className="w-full">
                          <Input
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            icon={
                              <img
                                src="/Layer_1 (5).svg"
                                alt="User Icon"
                                className="w-5 h-5 sm:w-6 sm:h-6"
                              />
                            }
                            error={meta.touched && meta.error}
                            {...field}
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="mt-1 text-xs sm:text-sm text-red-600"
                          />
                        </div>
                      )}
                    </Field>
                  </div>

                  {/* Email */}
                  <Field name="email">
                    {({ field, meta }) => (
                      <div>
                        <Input
                          type="email"
                          id="email"
                          placeholder="Email"
                          icon={
                            <img
                              src="/mail.svg"
                              alt="Email Icon"
                              className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                          }
                          error={meta.touched && meta.error}
                          {...field}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="mt-1 text-xs sm:text-sm text-red-600"
                        />
                      </div>
                    )}
                  </Field>

                  {/* Message */}
                  <Field name="message">
                    {({ field, meta }) => (
                      <div>
                        <TextAreaField
                          id="message"
                          placeholder="Your Message"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          error={meta.touched && meta.error}
                          name="message"
                          rows={5}
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="mt-1 text-xs sm:text-sm text-red-600"
                        />
                      </div>
                    )}
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#5183F4] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#4169E1] transition duration-300 disabled:opacity-70 text-sm sm:text-base font-medium"
                  >
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          </div>
        </div>
      </div>

      {/* Become a Tutor Section */}
      <div className="w-full py-8 md:py-[60px] relative overflow-hidden bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-[160px] sm:px-5 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 py-8 md:py-[60px] px-6 sm:px-8 md:px-[50px] rounded-2xl md:rounded-[30px] bg-[#5183F4] text-white relative overflow-hidden">
            {/* Left: Text Content */}
            <div className="flex-1 z-20 text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 md:mb-4">
                Become a Tutor
              </h2>
              <p className="text-sm sm:text-base md:text-[20px] mb-4 md:mb-6 max-w-full lg:max-w-[80%] xl:max-w-[70%]">
                Connect with us to stay informed about our latest updates,
                collaborate with us on innovative ideas, and unlock a plethora
                of opportunities that await your engagement and exploration!
              </p>
              <button className="bg-white text-[#5183F4] text-sm sm:text-base font-semibold px-5 sm:px-6 py-3 sm:py-[15px] rounded-full hover:bg-gray-100 transition-colors duration-200 mx-auto lg:mx-0">
                Register Now
              </button>
            </div>

            {/* Right: Overflowing Image - Hidden on mobile, visible from lg breakpoint */}
            <div className="hidden lg:block absolute right-[-30px] xl:right-[-60px] top-1/2 -translate-y-1/2 z-0 w-[40%] max-w-[500px]">
              <img
                src="/contactus.svg"
                alt="Contact Us"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Optional: Add a smaller image for tablet view if needed */}
            <div className="lg:hidden mt-6 w-[60%] max-w-[300px] mx-auto">
              <img
                src="/contactus.svg"
                alt="Contact Us"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;