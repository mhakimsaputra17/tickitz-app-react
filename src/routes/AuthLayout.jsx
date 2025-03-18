import { Outlet } from "react-router";
import { Link } from "react-router";
function AuthLayout() {
  return (
    <>
      <div className="container flex items-center justify-center gap-10">
        <Link to="/auth/signin">
          <h1 className="text-center text-blue-500">LOGIN </h1>
        </Link>

        <Link to="/auth/signup">
          <h1 className="text-center text-blue-500">Register </h1>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default AuthLayout;
