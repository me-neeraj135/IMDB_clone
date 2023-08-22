import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home.js";
import MovieList from "../components/MovieList/MovieList.js";
import Movie from "../pages/movieDetails/MovieDetail.js";

const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="movie/:id" element={<Movie />}></Route>
      <Route path="movies/:type" element={<MovieList />}></Route>
      <Route path="/*" element={<h1>Error Page</h1>}></Route>
    </Routes>
  );
};

export default AllRoutes;
