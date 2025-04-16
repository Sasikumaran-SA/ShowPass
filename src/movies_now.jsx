import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./movies.css";

const QuickBook = () => {
  const [activeTab, setActiveTab] = useState("movie");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedTiming, setSelectedTiming] = useState("");

  const handleBookNow = () => {
    if (selectedMovie && selectedDate && selectedCinema && selectedTiming) {
      alert(
        `Booking ${selectedMovie} on ${selectedDate} at ${selectedCinema} for ${selectedTiming}`
      );
    } else {
      alert("Please complete all selections before booking.");
    }
  };

  return (
    <div className="Quick-Book-Container">
      <div style={{ alignSelf: "center" }}>
        <p style={{ margin: 0 }}>Quick Book</p>
      </div>
      <div className="movi-cine">
        <button
          style={{ border: 0, backgroundColor: "transparent" }}
          onClick={() => setActiveTab("movie")}
        >
          <span
            id="movi-id"
            className={activeTab === "movie" ? "movi active" : "movi"}
          >
            Movie
          </span>
        </button>
        <button
          style={{ border: 0, backgroundColor: "transparent" }}
          onClick={() => setActiveTab("cinema")}
        >
          <span
            id="cine-id"
            className={
              activeTab === "cinema" ? "movi active" : "movi-cine-inactive"
            }
          >
            Cinema
          </span>
        </button>
      </div>

      <select
        id="select-movie"
        className="select"
        value={selectedMovie}
        onChange={(e) => setSelectedMovie(e.target.value)}
      >
        <option value="">Select Movie</option>
        <option value="VIDAAMUYARCHI">VIDAAMUYARCHI</option>
        <option value="THANDEL">THANDEL</option>
        <option value="INTERSTELLAR">INTERSTELLAR</option>
        <option value="KUDUMBASTHAN">KUDUMBASTHAN</option>
        <option value="MR. HOUSEKEEPING">MR. HOUSEKEEPING</option>
        <option value="DEVA">DEVA</option>
        <option value="SKY FORCE">SKY FORCE</option>
      </select>

      <select
        id="select-date"
        className="select"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      >
        <option value="">Select Date</option>
        <option value="Today, 8 Feb">Today, 8 Feb</option>
        <option value="Tomorrow, 9 Feb">Tomorrow, 9 Feb</option>
        <option value="Mon, 10 Feb">Mon, 10 Feb</option>
        <option value="Tue, 11 Feb">Tue, 11 Feb</option>
        <option value="Wed, 12 Feb">Wed, 12 Feb</option>
        <option value="Thur, 13 Feb">Thur, 13 Feb</option>
        <option value="Fri, 14 Feb">Fri, 14 Feb</option>
      </select>

      <select
        id="select-cinema"
        className="select"
        value={selectedCinema}
        onChange={(e) => setSelectedCinema(e.target.value)}
      >
        <option value="">Select Cinema</option>
        <option value="INOX: LUXE PHOENIX MARKET CITY, VELACHERY">
          INOX: LUXE PHOENIX MARKET CITY, VELACHERY
        </option>
        <option value="PVR: VR CHENNAI, ANNA NAGAR">
          PVR: VR CHENNAI, ANNA NAGAR
        </option>
        <option value="AGS CINEMAS OMR: NAVLUR">AGS CINEMAS OMR: NAVLUR</option>
        <option value="INOX NATIONAL: ARCOT ROAD">
          INOX NATIONAL: ARCOT ROAD
        </option>
        <option value="KASI TALKIES DOLBY ATOMS: ASHOK NAGAR">
          KASI TALKIES DOLBY ATOMS: ASHOK NAGAR
        </option>
      </select>

      <select
        id="select-timing"
        className="select"
        value={selectedTiming}
        onChange={(e) => setSelectedTiming(e.target.value)}
      >
        <option value="">Select Timing</option>
        <option value="10:15 A.M.">10:15 A.M.</option>
        <option value="02:00 P.M.">02:00 P.M.</option>
        <option value="06:00 P.M.">06:00 P.M.</option>
        <option value="09:45 P.M.">09:45 P.M.</option>
      </select>

      <button className="book-now" onClick={handleBookNow}>
        Book Now
      </button>
    </div>
  );
};

export default QuickBook;

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
    title: "Vidaamuyarchi",
    genres: "Action, Crime, Drama",
    duration: "2h 55m",
    language: "Tamil UA",
    img: "./src/assets/Movie_1.avif",
  },
  {
    title: "Thandel",
    genres: "Romatic, Drama",
    duration: "2h 45m",
    language: "Telugu UA",
    img: "./src/assets/Movie_2.avif",
  },
  {
    title: "Conclave",
    genres: "Action, Crime, Adventure",
    duration: "2h 15m",
    language: "English UA",
    img: "./src/assets/Movie_3.avif",
  },
  {
    title: "Deva",
    genres: "Crime, Drama",
    duration: "2h 35m",
    language: "Hindi A",
    img: "./src/assets/Movie_4.avif",
  },
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
    title: "Madha Gadha Raja",
    genres: "Romatic, Drama",
    duration: "2h 45m",
    language: "Tamil UA",
    img: "./src/assets/Movie_7.avif",
  },
  {
    title: "Top Gun",
    genres: "Action, Crime, Adventure",
    duration: "2h 15m",
    language: "English UA",
    img: "./src/assets/Movie_8.avif",
  },
  {
    title: "Captain America",
    genres: "Crime, Drama",
    duration: "2h 35m",
    language: "English A",
    img: "./src/assets/Movie_9.avif",
  },
  {
    title: "Chhaava",
    genres: "Action, Thriller",
    duration: "1h 45m",
    language: "Telugu UA",
    img: "./src/assets/Movie_10.avif",
  },
  {
    title: "Interstellar",
    genres: "Action, Crime, Drama",
    duration: "2h 55m",
    language: "English UA",
    img: "./src/assets/Movie_11.avif",
  },
  {
    title: "Deran",
    genres: "Romatic, Drama",
    duration: "2h 45m",
    language: "Hindi UA",
    img: "./src/assets/Movie_12.avif",
  },
  {
    title: "Kudumbasthan",
    genres: "Action, Crime, Adventure",
    duration: "2h 15m",
    language: "Tamil UA",
    img: "./src/assets/Movie_13.avif",
  },
  {
    title: "2K Love Story",
    genres: "Crime, Drama",
    duration: "2h 35m",
    language: "Tamil A",
    img: "./src/assets/Movie_14.avif",
  },
  {
    title: "Kadhal Enpadhu",
    genres: "Action, Thriller",
    duration: "1h 45m",
    language: "English UA",
    img: "./src/assets/Movie_15.avif",
  },
];

const Main = () => {
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
          onClick={() => (window.location.href = "movies_soon")}
        >
          <h3>Movies coming soon!</h3>
        </div>
      </div>

      <div className="movie-container">
        <p className="text">Movies in Chennai</p>

        <div
          className="labels"
          onClick={() => (window.location.href = "movies_soon")}
        >
          <div className="labels-1">
            <h1>Coming Soon</h1>
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
                <div
                  className="btn3"
                  onClick={() => (window.location.href = "movie_booking")}
                >
                  Book
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById("quick-book")).render(<QuickBook />);

createRoot(document.getElementById("main")).render(<Main />);
