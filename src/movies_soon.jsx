import React from "react";
import { createRoot } from "react-dom/client";
import "./movies.css";
import QuickBook from './movies_now';

const languages = ["English", "Tamil", "Telugu", "Malayalam", "Hindi", "Odia"];
const genres = [
  "Drama",
  "Action",
  "Romatic",
  "Comedy",
  "Thriller",
  "Adventure",
  "Animation",
  "Family",
  "Crime",
];
const formats = ["2D", "3D", "IMAX 2D", "IMAX 3D"];

const movies = [
  {
    title: "Skyforce",
    genres: "Action, Thriller",
    duration: "1h 45m",
    language: "English UA",
    img: "./src/assets/Movie_5.avif",
  },
  {
    title: "Mufasa",
    genres: "Action, Crime, Drama",
    duration: "2h 05m",
    language: "English UA",
    img: "./src/assets/Movie_6.avif",
  },
  {
    title: "Top Gun",
    genres: "Action, Crime, Adventure",
    duration: "2h 15m",
    language: "English UA",
    img: "./src/assets/Movie_8.avif",
  },
  {
    title: "Chhaava",
    genres: "Action, Thriller",
    duration: "1h 45m",
    language: "Telugu UA",
    img: "./src/assets/Movie_10.avif",
  },
  {
    title: "Deran",
    genres: "Romatic, Drama",
    duration: "2h 45m",
    language: "Hindi UA",
    img: "./src/assets/Movie_12.avif",
  },
];

const MainCS = () => {
  return (
    <div className="main-movies-now">
      <div className="filter-container">
        <p className="filter-text">Filters</p>

        <div className="filter">
          <p>Language</p>
          {languages.map((lang, idx) => (
            <label className="container" key={idx}>
              <input type="checkbox" />
              {lang}
            </label>
          ))}
        </div>

        <div className="filter">
          <p>Genres</p>
          {genres.map((genre, idx) => (
            <label className="container" key={idx}>
              <input type="checkbox" />
              {genre}
            </label>
          ))}
        </div>

        <div className="filter">
          <p>Format</p>
          {formats.map((format, idx) => (
            <label className="container" key={idx}>
              <input type="checkbox" />
              {format}
            </label>
          ))}
        </div>

        <div
          className="labels"
          onClick={() => (window.location.href = "movies_now")}
        >
          <h3>Movies Now Showing...</h3>
        </div>
      </div>

      <div className="movie-container">
        <p className="text">Movies Soon in Chennai</p>

        <div
          className="labels"
          onClick={() => (window.location.href = "movies_now")}
        >
          <div className="labels-1">
            <h1>Now Showing</h1>
          </div>
          <div className="labels-2">
            <h1>View All →</h1>
          </div>
        </div>

        <div className="movies-now">
          {movies.map((movie, idx) => (
            <div className="mov" key={idx}>
              <div className="mov-img">
                <img src={movie.img} alt={movie.title} />
              </div>
              <div className="mov1">
                <p className="mov12">{movie.title}</p>
                <p className="mov13">{movie.genres}</p>
                <p className="mov13">{movie.duration}</p>
                <p className="mov13">{movie.language}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("quick-book")).render(<QuickBook />);

createRoot(document.getElementById("main")).render(<MainCS />);
