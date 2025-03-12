import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";

import HeroSection from "../../components/ui/Hero/HeroSection.jsx";
import FeatSection from "../../components/ui/Features/FeatSection.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatSection />
    </>
  );
}

export default Home;
