import React from "react";
import { createRoot } from "react-dom/client";
import "./movie_booking.css";

const name = "Vidaamuyarchi";
const language = "Tamil";
const tags = ["Action", "Crime", "Drama"];
const rate = "UA";
const dates = ["19 APR", "20 APR", "21 APR", "22 APR", "23 APR", "24 APR"];
const theaters = [
  {
    name: "INOX: LUXE Phoenix Market City - Velachery",
    features: ["M-Ticket", "Food & Beverage", "Cancellable"],
    shows: [
      "09:00 AM",
      "11:45 AM",
      "02:15 PM",
      "05:00 PM",
      "06:30 PM",
      "07:15 PM",
      "07:35 PM",
      "08:00 PM",
      "09:30 PM",
      "10:30 PM",
      "11:00 PM",
    ],
  },
  {
    name: "KC(KrishnaveniCinemas) RG3 LASER DOLBYATMOS - TNAGAR",
    features: ["M-Ticket", "Non Cancellable"],
    shows: ["09:00 AM", "12:30 PM", "06:00 PM", "10:30 PM"],
  },
  {
    name: "PVR: VR Chennai - Anna Nagar",
    features: ["M-Ticket", "Food & Beverage", "Non Cancellable"],
    shows: [
      "05:30 PM",
      "06:30 PM",
      "07:30 PM",
      "08:30 PM",
      "09:15 PM",
      "10:30 PM",
      "11:30 PM",
      "11:59 PM",
    ],
  },
];

function Main() {
  return (
    <div className="container">
      <h1>
        {name} - ({language})
      </h1>
      <div className="tags">
        <span className="tag">{rate}</span>
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="dates">
        {dates.map((date, index) => (
          <div className={`date1 ${index === 0 ? "active" : ""}`} key={date}>
            {date}
          </div>
        ))}
      </div>

      <div className="filters">
        <select
          id="Screen-type"
          className="select"
        >
          <option value="t2d">Tamil - 2D</option>
          <option value="t3d">Tamil - 3D</option>
          <option value="e2d">Englis - 2D</option>
        </select>
        <select
          id="Price-range"
          className="select"
        >
          <option value="">Price Range</option>
          <option value="p1">&#8377;0 - &#8377;100</option>
          <option value="p2">&#8377;100 - &#8377;250</option>
          <option value="p3">&#8377;250 - &#8377;500</option>
        </select>
        <select
          id="Pref-time"
          className="select"
        >
          <option value="">Preferred Time</option>
          <option value="t1">09:00 AM - 11:00 AM</option>
          <option value="t2">11:00 PM - 04:00 PM</option>
          <option value="t3">04:00 PM - 11:00 PM</option>
        </select>
      </div>

      <div className="legend">
        <span className="available"></span> AVAILABLE
        <span className="fast-filling"></span> FAST FILLING
      </div>

      {theaters.map((theater) => (
        <div className="theater" key={theater.name}>
          <div className="theater-header">
            <h3>{theater.name}</h3>
            <span className="info">INFO</span>
          </div>
          <div className="features">
            {theater.features.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
          <div className="shows">
            {theater.shows.map((time) => (
              <button key={time} onClick={() => location.href="mseat_booking"}>{time}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

createRoot(document.getElementById("main")).render(<Main />);
