import React, { useEffect, useState } from "react";
import Card from "../Card/Card.js";
import { useParams } from "react-router-dom";
import "./movieList.css";
import useData from "../../HOC/useData.js";

const MovieList = () => {
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState(null);
  const { type } = useParams();
  // const data = useData();

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      const data = await response.json();
      setmovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <div className="movie__list">
      <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list__cards">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
