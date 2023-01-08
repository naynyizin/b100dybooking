import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header({ type }) {
  const [opendate, setOpendate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination, setDestionation] = useState("");
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  function handleOption(name, operation) {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  }

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, option } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header-container list-mode" : "header-container"
        }
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Air Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            {" "}
            <h1 className="header-title">
              A Lifetime of discounts? It's Genius.
            </h1>
            <p className="header-desc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free B100DYbooking account
            </p>
            <button className="header-btn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearch-item">
                <FontAwesomeIcon icon={faBed} className="headerSearch-icon" />
                <input
                  type="text"
                  placeholder="Where are you going"
                  className="header-search-input"
                  onChange={(e) => {
                    setDestionation(e.target.value);
                  }}
                />
              </div>

              <div className="headerSearch-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerSearch-icon"
                />
                <span
                  className="header-search-text"
                  onClick={() => {
                    setOpendate(!opendate);
                  }}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {opendate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    className="date"
                  />
                )}
              </div>

              <div className="headerSearch-item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerSearch-icon"
                />
                <span
                  className="header-search-text"
                  onClick={() => {
                    setOpenOption(!openOption);
                  }}
                >
                  {`${option.adult} ${option.adult <= 1 ? "adult" : "adults"} ${
                    option.children
                  } ${option.children <= 1 ? "children" : "child"} ${
                    option.room
                  } ${option.room <= 1 ? "room" : "rooms"}`}
                </span>

                {openOption && (
                  <div className="option">
                    <div className="option-item">
                      <span className="option-text">Adult</span>
                      <div className="room">
                        <button
                          disabled={option.adult <= 1}
                          className="option-btn"
                          onClick={() => {
                            handleOption("adult", "d");
                          }}
                        >
                          -
                        </button>
                        <span className="option-count">{option.adult}</span>
                        <button
                          disabled={option.adult >= 30}
                          className="option-btn"
                          onClick={() => {
                            handleOption("adult", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option-item">
                      <span className="option-text">Children</span>
                      <div className="room">
                        <button
                          disabled={option.children <= 0}
                          className="option-btn"
                          onClick={() => {
                            handleOption("children", "d");
                          }}
                        >
                          -
                        </button>
                        <span className="option-count">{option.children}</span>
                        <button
                          disabled={option.children >= 10}
                          className="option-btn"
                          onClick={() => {
                            handleOption("children", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option-item">
                      <span className="option-text">Room</span>
                      <div className="room">
                        <button
                          disabled={option.room <= 1}
                          className="option-btn"
                          onClick={() => {
                            handleOption("room", "d");
                          }}
                        >
                          -
                        </button>
                        <span className="option-count">{option.room}</span>
                        <button
                          disabled={option.adult >= 30}
                          className="option-btn"
                          onClick={() => {
                            handleOption("room", "i");
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearch-item">
                <button className="header-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
