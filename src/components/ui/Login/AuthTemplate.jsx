import React from "react";
import { Outlet } from "react-router";
function AuthTemplate() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center px-5 py-8 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/backgrounds/marvel.png?raw=true')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tizkitz_signin.svg"
            alt="tickitz sign in"
            className="max-w-[180px] h-auto"
          />
        </div>
        <Outlet />
      </main>
    </>
  );
}

export default AuthTemplate;
