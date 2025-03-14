import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar.jsx";

import HeroSection from "../../components/ui/Hero/HeroSection.jsx";
import FeatSection from "../../components/ui/Features/FeatSection.jsx";
import MoviesHome from "../../components/ui/Movies/MoviesHome.jsx";
import MoviesUpcoming from "../../components/ui/Movies/MoviesUpcoming.jsx";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <FeatSection />
      <MoviesHome />
      <MoviesUpcoming />
    </>
  );
}

export default Home;
