import React, { useState, useEffect } from "react";
import axios from "./axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const movieList = movies.map((movie) => {
    return (
      <img
        className="row_poster"
        src={`${baseUrl}${movie.poster_path}`}
        alt={movie.name}
      />
    );
  });

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">{movieList}</div>
    </div>
  );
}

export default Row;
