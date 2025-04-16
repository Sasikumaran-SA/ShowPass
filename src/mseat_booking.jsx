import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./mseat_booking.css";

const seatMap = [
  {
    label: "Rs. 330 Royal Recliner",
    rows: [
      {
        row: "A",
        seats: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          null,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
        ],
      },
    ],
  },
  {
    label: "Rs. 180 Royal",
    rows: [
      {
        row: "B",
        seats: [
          1,
          2,
          3,
          4,
          null,
          null,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "C",
        seats: [
          1,
          2,
          3,
          4,
          null,
          null,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "D",
        seats: [
          1,
          2,
          3,
          4,
          null,
          null,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "E",
        seats: [
          1,
          2,
          3,
          4,
          null,
          null,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "F",
        seats: [
          1,
          2,
          3,
          4,
          null,
          null,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
    ],
  },
  {
    label: "Rs. 180 Club",
    rows: [
      {
        row: "G",
        seats: [
          3,
          4,
          null,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "H",
        seats: [
          3,
          4,
          null,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "I",
        seats: [
          3,
          4,
          null,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "J",
        seats: [
          3,
          4,
          null,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "K",
        seats: [
          3,
          4,
          null,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "L",
        seats: [
          3,
          4,
          null,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
        ],
      },
      {
        row: "M",
        seats: [
          5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        ],
      },
    ],
  },
  {
    label: "Rs. 160 Executive",
    rows: [
      {
        row: "N",
        seats: [
          5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        ],
      },
      {
        row: "O",
        seats: [
          5,
          6,
          7,
          8,
          9,
          10,
          "♿",
          "♿",
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          "♿",
          "♿",
        ],
      },
    ],
  },
];

const bookedSeats = ["A15", "B7", "D13", "J18", "O♿"];

function MSeat_booking() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (!seatId || bookedSeats.includes(seatId)) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div className="seat-container">
      <h1 className="title">Movie: Vidaamuyarchi - (Tamil)</h1>
      <div className="detail">
        <p className="text">
          Place: INOX: LUXE Phoenix Market City - Velachery
        </p>
        <p className="text">Date & Time: 19 Apr, 11:45 AM</p>
      </div>
      <h2 className="subtitle">Select Your Seats</h2>
      <div className="legend">
        <span className="legend-item available">Available</span>
        <span className="legend-item selected">Selected</span>
        <span className="legend-item booked">Sold</span>
      </div>
      <div className="screen">
        {seatMap.map((section) => (
          <div key={section.label} className="section">
            <div className="section-label">{section.label}</div>
            {section.rows.map(({ row, seats }) => (
              <div key={row} className="seat-row">
                <span className="row-label">{row}</span>
                {seats.map((seatNum, idx) => {
                  if (seatNum === null)
                    return <div key={idx} className="gap"></div>;
                  const seatId = `${row}${seatNum}`;
                  const isBooked = bookedSeats.includes(seatId);
                  const isSelected = selectedSeats.includes(seatId);
                  return (
                    <button
                      key={seatId}
                      onClick={() => handleSeatClick(seatId)}
                      className={`seat-btn ${
                        isBooked
                          ? "booked"
                          : isSelected
                          ? "selected"
                          : "available"
                      }`}
                    >
                      {seatNum}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
        <h2 className="screen-label">Screen</h2>
      </div>
      <div className="summary-box">
        <h2 className="summary-title">Booking Summary</h2>
        {selectedSeats.length === 0 ? (
          <p>No seats selected.</p>
        ) : (
          <>
            <p>Selected Seats: {selectedSeats.join(", ")}</p>
            <p>Total: ₹{selectedSeats.length * 180}</p>
          </>
        )}
        <button className="book-btn" disabled={selectedSeats.length === 0}>
          Proceed to Book
        </button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("mseat-booking")).render(<MSeat_booking />);
