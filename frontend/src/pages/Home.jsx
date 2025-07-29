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
      <HowItWorks />`
      <ReasonsToLearn />
      <BecomeTutor />
      <RecentAnnouncements />
      <Blog />
      <DownloadResources />
    </div>
  );
};

export default Home;
