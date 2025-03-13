import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar/Navbar";

function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* footer soon */}
    </>
  );
}

export default SharedLayout;
