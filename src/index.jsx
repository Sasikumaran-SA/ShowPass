import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.timer = null;
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  startAutoSlide = () => {
    this.timer = setTimeout(() => {
      this.nextSlide();
      this.startAutoSlide();
    }, 4000);
  };

  nextSlide = () => {
    const { slideIndex } = this.state;
    const nextIndex = (slideIndex + 1) % 4;
    this.setState({ slideIndex: nextIndex });
  };

  prevSlide = () => {
    const { slideIndex } = this.state;
    const prevIndex = (slideIndex - 1 + 4) % 4;
    clearTimeout(this.timer);
    this.setState({ slideIndex: prevIndex }, this.startAutoSlide);
  };

  render() {
    const { slideIndex } = this.state;
    const images = [
      "./src/assets/poster1.jpg",
      "./src/assets/poster2.jpg",
      "./src/assets/poster3.jpg",
      "./src/assets/poster4.jpg",
    ];

    return (
      <div className="slideshow-container">
        {images.map((img, i) => (
          <div
            key={i}
            className={`mySlides fade ${i === slideIndex ? "active" : ""}`}
            style={{ display: i === slideIndex ? "block" : "none" }}
          >
            <img src={img} alt={`Slide ${i}`} />
          </div>
        ))}
        <a className="slide-prev" onClick={this.prevSlide}>
          &#60;
        </a>
        <a className="slide-next" onClick={this.nextSlide}>
          &#62;
        </a>
        <div style={{ textAlign: "center" }}>
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === slideIndex ? "active" : ""}`}
              onClick={() => {
                clearTimeout(this.timer);
                this.setState({ slideIndex: i }, this.startAutoSlide);
              }}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

const movies = [
  {
    title: "Vidaamuyarchi",
    genres: "Action, Crime, Drama",
    duration: "2h 55m",
    language: "Tamil UA",
    image: "./src/assets/Movie_1.avif",
  },
  {
    title: "Thandel",
    genres: "Romatic, Drama",
    duration: "2h 45m",
    language: "Telugu UA",
    image: "./src/assets/Movie_2.avif",
  },
  {
    title: "Conclave",
    genres: "Action, Crime",
    duration: "2h 15m",
    language: "English UA",
    image: "./src/assets/Movie_3.avif",
  },
  {
    title: "Deva",
    genres: "Crime, Drama",
    duration: "2h 35m",
    language: "Hindi A",
    image: "./src/assets/Movie_4.avif",
  },
  {
    title: "Skyforce",
    genres: "Action, Thriller",
    duration: "1h 45m",
    language: "English UA",
    image: "./src/assets/Movie_5.avif",
  },
];

const Movies = () => {
  return (
    <div>
      <div className="recom-label">
        <h2 style={{ flex: 1 }}>Recommended Movies</h2>
        <div
          className="next-page"
          onClick={() => (window.location.href = "movies_now")}
        >
          <p>see all &gt;</p>
        </div>
      </div>
      <div className="recom">
        {movies.map((movie, index) => (
          <div className="mov" key={index}>
            <div className="mov-img">
              <img src={movie.image} alt={movie.title} />
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
  );
};

const sports = [
  {
    title: "KKR vs CSK",
    location: "Eden Gardens, Kolkata",
    Categories: "Cricket",
    price: "900",
    img: "./src/assets/sport_1.avif",
  },
  {
    title: "KKR vs GT",
    location: "Eden Gardens, Kolkata",
    Categories: "Cricket",
    price: "900",
    img: "./src/assets/sport_2.avif",
  },
  {
    title: "Chess - Chai",
    location: "Chai Galli, Chennai",
    Categories: "Chess",
    price: "249",
    img: "./src/assets/sport_3.avif",
  },
  {
    title: "LSG vs DC",
    location: "BRSABV stadium, Lucknow",
    Categories: "Cricket",
    price: "499",
    img: "./src/assets/sport_4.avif",
  },
  {
    title: "MI vs DC",
    location: "Wankhede, Mumbai",
    Categories: "Cricket",
    price: "999",
    img: "./src/assets/sport_5.avif",
  },
];

const Sports = () => {
  return (
    <div>
      <div className="recom-label">
        <h2 style={{ flex: 1 }}>Recommended Sports</h2>
        <div
          className="next-page"
          onClick={() => (window.location.href = "sport")}
        >
          <p>see all &gt;</p>
        </div>
      </div>
      <div className="recom">
        {sports.map((sport, index) => (
          <div className="mov" key={index}>
            <div className="mov-img">
              <img src={sport.img} alt={sport.title} />
            </div>
            <div className="mov1">
              <p className="mov12">{sport.title}</p>
              <p className="mov13">{sport.location}</p>
              <p className="mov13">{sport.Categories}</p>
              <p className="mov13">&#8377; {sport.price}</p>
              <div
                className="btn3"
                onClick={() => (window.location.href = "sport_booking")}
              >
                Book
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

createRoot(document.getElementById("carousel")).render(<Carousel />);

createRoot(document.getElementById("movies")).render(<Movies />);

createRoot(document.getElementById("sports")).render(<Sports />);
