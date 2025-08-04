import React from "react";
import HeroSection from "../components/HeroSection";
import TutorsSection from "../components/TutorSection";
import HowItWorks from "../components/HowItWorks";
import ReasonsToLearn from "../components/ReasonsToLearn";
import BecomeTutor from "../components/BecomeTutor";
import RecentAnnouncements from "../components/RecentAnnouncements";
import DownloadResources from "../components/DownloadResources";
import Blog from "../components/Blog";
const Home = () => {
  return (
   <div >
      <HeroSection />
      <TutorsSection />
      <HowItWorks 
  title={{
    main: "How it",
    highlighted: "Works"
  }}
  steps={[
    {
      id: 1,
      title: "1. Browse tutors to review their background, experience, and student feedback.",
      image: "Frame 1119.svg",
    },
    {
      id: 2,
      title: '2. Select up to 5 tutors and add your preferred tutors to your "Tutor Cart"',
      image: "Frame 1120.svg",
    },
    {
      id: 3,
      title: "3. At the checkout page, if you're a first-time user, please create an account with your name and email address. Then, proceed to purchase contact information for up to 5 tutors.",
      image: "Frame 1121.svg",  
    },
    {
      id: 4,
      title: "4. Upon completing the purchase, the email addresses of the five tutors will be delivered to your account page.",
      image: "Frame 1122.svg",
    },
    {
      id: 5,
      title: "5. Contact the teachers directly and begin your Japanese lessons.",
      image: "Frame 1123.svg",
    },
    
  ]}
/>
      <ReasonsToLearn />
<BecomeTutor
  title="Become A Tutor"
  description="Fuel learning journeys, become a mentor of creativity; ignite minds, foster brilliance, shape futures"
  label="Register Now"
/>
      <RecentAnnouncements />
      <Blog />
      <DownloadResources />
    </div>
  );
};

export default Home;
