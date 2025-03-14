import React from "react";
import Navbar from "../../components/layout/Navbar/Navbar.jsx";

import HeroSection from "../../components/ui/Hero/HeroSection.jsx";
import FeatSection from "../../components/ui/Features/FeatSection.jsx";
import MoviesHome from "../../components/ui/Movies/MoviesHome.jsx";
import MoviesUpcoming from "../../components/ui/Movies/MoviesUpcoming.jsx";
import Newsletter from "../../components/ui/Newsletter/Newsletter.jsx";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <FeatSection />
      <MoviesHome />
      <MoviesUpcoming />
      <Newsletter />
    </>
  );
}

export default Home;
