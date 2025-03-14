import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <>
      <h1 className="text-center text-blue-500">Layout Auth</h1>
      <Outlet />
    </>
  );
}

export default AuthLayout;
