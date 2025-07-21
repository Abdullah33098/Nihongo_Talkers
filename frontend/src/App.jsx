import React from "react";
import Navbar from "./components/Navbar";
import Signin from "./pages/auth/Signin";
const App = () => {
  return (
    <div>
      <Navbar />
      <Signin />
    </div>
  );
};

export default App;
