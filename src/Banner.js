import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNextlixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPostition: "center center",
      }}
    >
      <div className="banner-content">
        <h1></h1>
      </div>
      {/* header */}
      {/* div > 2 buttons */}
      {/* description */}
    </header>
  );
}

export default Banner;
