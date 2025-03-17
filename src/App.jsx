import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router";
import SharedLayout from "./routes/SharedLayout";
import Movies from "./pages/movies/Movies";
import MovieDetail from "./pages/movies/MovieDetail";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./routes/AuthLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route index element={<Home />} />

            <Route path="movies">
              <Route index element={<Movies />} />
              <Route path="detail/:movieId" element={<MovieDetail />} />
            </Route>
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="/auth/signin" replace />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          /*{" "}
          <Route
            path="*"
            element={
              <h1 className="text-blue-500 text-5xl text-center font-bold flex justify-center items-center h-screen">
                <br />
                404 Page Not Found
              </h1>
            }
          />{" "}
          */
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
