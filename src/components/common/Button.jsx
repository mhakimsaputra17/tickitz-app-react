import React from "react";

function Button() {
  return (
    <>
      {/* Auth Buttons - Desktop */}
      <div className="hidden md:flex flex-1 justify-end gap-3">
        <a
          href="/auth/signin"
          className="px-[18px] py-3 rounded border border-blue-primary text-blue-primary text-sm font-normal tracking-wider hover:bg-blue-50 transition-colors"
        >
          Sign in
        </a>
        <a
          href="/auth/signup"
          className="px-[18px] py-3 rounded bg-blue-primary border border-blue-primary text-white text-sm font-normal tracking-wider hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </a>
      </div>
    </>
  );
}

export default Button;
