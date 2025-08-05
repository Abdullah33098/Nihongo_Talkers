import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./screens/auth/Signin";
import Signup from "./screens/auth/Signup";
import ForgotPassword from "./screens/auth/ForgotPassword";
import OTPScreen from "./screens/auth/OTPScreen";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import About_us from "./screens/About_us";
import BecomeTutor from "./screens/BecomeTutor";
import FAQ from "./screens/FAQ";
import Contact_us from "./screens/Contact_us";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp" element={<OTPScreen />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/become-tutor" element={<BecomeTutor />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<Contact_us />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
