import React from "react";
import { Outlet } from "react-router";
function AuthTemplate() {
  return (
    <>
      <div className="div"></div>
      <main
        className="min-h-screen flex flex-col items-center justify-center px-5 py-8 relative bg-cover bg-center bg-fixed bg-[url(https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/backgrounds/marvel.png?raw=true)]"
        // style={{
        //   backgroundImage:
        //     "url('https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/backgrounds/marvel.png?raw=true')",
        // }}
      >
        {/* Logo */}
        <div className="mb-8 text-center relative z-10">
          <img
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tizkitz_signin.svg"
            alt="tickitz sign in"
            className="max-w-[180px] h-auto"
          />
        </div>
        {/* <div className="relative z-10"> */}
        <Outlet />
        {/* </div> */}
      </main>
    </>
  );
}

export default AuthTemplate;
