import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Searchitem from "../../components/searchitem/Searchitem";
import "./list.css";

export default function List() {
  const location = useLocation();

  const [opendate, setOpendate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [option, setOption] = useState(location.state.option);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="list-container">
        <div className="list-wrapper">
          <div className="list-search">
            <h3 className="list-title">Search</h3>
            <div className="list-item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="list-item">
              <label>Check of Date</label>
              <span
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
                  className="list-date"
                />
              )}
            </div>

            <div className="list-item">
              <p>Options</p>
              <div className="option-wrapper">
                <div className="lis-option-item">
                  <span>
                    Min price <small>per night</small>
                  </span>
                  <input type="text" />
                </div>
                <div className="lis-option-item">
                  <span>
                    Max price <small>per night</small>
                  </span>
                  <input type="text" />
                </div>
                <div className="lis-option-item">
                  <span>Adult</span>
                  <input type="number" min={1} placeholder={option.adult} />
                </div>
                <div className="lis-option-item">
                  <span>child</span>
                  <input type="number" min={0} placeholder={option.children} />
                </div>
                <div className="lis-option-item">
                  <span>Room</span>
                  <input type="number" min={1} placeholder={option.room} />
                </div>
              </div>
            </div>
            <button type="button" className="list-btn">
              Search
            </button>
          </div>
          <div className="list-result">
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
            <Searchitem />
          </div>
        </div>
      </div>
    </div>
  );
}
