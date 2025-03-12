import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar";

import HeroSection from "../../components/ui/Hero/HeroSection.jsx";
import FeatSection from "../../components/ui/Features/FeatSection.jsx";
import MoviesHome from "../../components/ui/Movies/MoviesHome.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatSection />
      <MoviesHome />
    </>
  );
}

export default Home;
