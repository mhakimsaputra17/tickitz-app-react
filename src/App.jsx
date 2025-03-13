import React from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, BrowserRouter } from "react-router";
import SharedLayout from "./routes/SharedLayout";
import Movies from "./pages/movies/Movies";
import MovieDetail from "./pages/movies/MovieDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies">
              <Route index element={<Movies />} />
              <Route path="detail/:movieId" element={<MovieDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
