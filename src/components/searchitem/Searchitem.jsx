import { useNavigate } from "react-router-dom";
import "./searchitem.css";

export default function Searchitem() {
  const navigate = useNavigate();
  return (
    <div className="search-result">
      <div className="search-result-wrapper">
        <img
          src={"/assets/searchresult/search-result.jpg"}
          alt="result-img"
          className="result-img"
        />

        <div className="result-desc">
          <h3 className="desc-title">Mabi City Centre Hotel</h3>
          <small>500m from center</small>
          <span className="free-section">free airport taxi</span>
          <span className="room">Standard Double Room</span>
          <small>1 queen bed</small>
          <span className="cancel">free cancellation</span>
          <small className="cancel-text">
            You can cancel later,so lock in this great price today
          </small>
        </div>
        <div className="detail">
          <div className="detail-upper">
            <h3>Excellent</h3>
            <span>8.9</span>
          </div>
          <div className="detail-bottom">
            <p>$112</p>
            <small>includes taxes and fees</small>
            <button
              onClick={() => {
                navigate("/hotels/blabla");
              }}
            >
              See availabilty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
