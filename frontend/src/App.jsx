import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Forgotpassword from "./pages/auth/Forgotpassword";
import OTPScreen from "./pages/auth/OTPScreen";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About_us from "./pages/About_us";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/otp" element={<OTPScreen />} />
        <Route path="/about" element={<About_us />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
