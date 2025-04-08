import React from "react";
import { Outlet } from "react-router-dom";
import ProfileNavbar from "../components/layout/Navbar/ProfileNavbar";
import Footer from "../components/layout/Footer/Footer";

function ProfileLayout() {
  return (
    <>
      <ProfileNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ProfileLayout;
