import { createRoot } from "react-dom/client";
import "./sport.css";

const Date = ["Today", "Tomorrow", "This Weekeend"];
const Categories = [
  "Running",
  "Cricket",
  "Chess",
  "Walking",
  "Basketball",
  "E Sports",
];
const Price = ["Free", "0 - 500", "500 - 2000", "Above 2000"];

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
    title: "Chess - Chai - Connect",
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
  {
    title: "KKR vs RR",
    location: "Eden Gardens, Kolkata",
    Categories: "Cricket",
    price: "900",
    img: "./src/assets/sport_6.avif",
  },
  {
    title: "RR vs LSG",
    location: "SAWAI Gardens, Rajasthan",
    Categories: "Cricket",
    price: "2400",
    img: "./src/assets/sport_7.avif",
  },
  {
    title: "Trail Blazers Marathon",
    location: "your place",
    Categories: "Running",
    price: "299",
    img: "./src/assets/sport_8.avif",
  },
];

const Main = () => {
  return (
    <div className="sports">
      <div className="filter-container">
        <p className="filter-text">Filters</p>

        <div className="filter">
          <p>Date</p>
          {Date.map((lang, idx) => (
            <label className="container" key={idx}>
              <input type="Radio" name="date" />
              {lang}
            </label>
          ))}
        </div>

        <div className="filter">
          <p>Categories</p>
          {Categories.map((genre, idx) => (
            <label className="container" key={idx}>
              <input type="checkbox" />
              {genre}
            </label>
          ))}
        </div>

        <div className="filter">
          <p>Price</p>
          {Price.map((format, idx) => (
            <label className="container" key={idx}>
              <input type="checkbox" />
              {format}
            </label>
          ))}
        </div>
      </div>

      <div className="sport-container">
        <p className="text">Sports in Chennai</p>

        <div className="sport-container1">
          {sports.map((sport, idx) => (
            <div className="box" key={idx}>
              <div className="box-img">
                <img src={sport.img} alt={sport.title} />
              </div>
              <div className="box1">
                <p className="box12">{sport.title}</p>
                <p className="box13">{sport.location}</p>
                <p className="box13">{sport.Categories}</p>
                <p className="box13">&#8377; {sport.price}</p>
                <div
                  className="btn3"
                  onClick={() => (window.location.href = "")}
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

createRoot(document.getElementById("main")).render(<Main />);
