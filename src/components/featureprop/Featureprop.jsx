import "./featureprop.css";

export default function Featureprop() {
  return (
    <div className="fp">
      <h3>Stay at our top unique properties</h3>
      <div className="fp-container">
        <div className="fp-item">
          <img
            src={"/assets/featureprop/featureprop-1.jpg"}
            alt=""
            className="fp-img"
          />
          <h5>Casaprisco</h5>
          <div className="sp-text">Netherlands, Putten</div>
          <div className="mid-text">
            <span className="sp-text">Starting form</span>
            <h5 className="prize">US$127</h5>
          </div>
          <div className="b-text">
            <span className="rate">9.4</span>
            <span className="spec">Wonderful</span>
            <span className="review">72 reviews</span>
          </div>
        </div>
        <div className="fp-item">
          <img
            src={"/assets/featureprop/featureprop-2.jpg"}
            alt=""
            className="fp-img"
          />
          <h5>Regina Vught</h5>
          <div className="sp-text">Netherlands, Vught</div>
          <div className="mid-text">
            <span className="sp-text">Starting form</span>
            <h5 className="prize">US$104</h5>
          </div>
          <div className="b-text">
            <span className="rate">8.3</span>
            <span className="spec">Very Good</span>
            <span className="review">107 reviews</span>
          </div>
        </div>
        <div className="fp-item">
          <img
            src={"/assets/featureprop/featureprop-3.jpg"}
            alt=""
            className="fp-img"
          />
          <h5>B&B Puur Drenthe</h5>
          <div className="sp-text">Netherlands, Elp</div>
          <div className="mid-text">
            <span className="sp-text">Starting form</span>
            <h5 className="prize">US$142</h5>
          </div>
          <div className="b-text">
            <span className="rate">8.9</span>
            <span className="spec">Excellent</span>
            <span className="review">105 reviews</span>
          </div>
        </div>
        <div className="fp-item">
          <img
            src={"/assets/featureprop/featureprop-4.jpg"}
            alt=""
            className="fp-img"
          />
          <h5>B&B Op 't Eikenschoor</h5>
          <div className="sp-text">Netherlands, Soerendonk</div>
          <div className="mid-text">
            <span className="sp-text">Starting form</span>
            <h5 className="prize">US$90</h5>
          </div>
          <div className="b-text">
            <span className="rate">9.0</span>
            <span className="spec">Wonderful</span>
            <span className="review">130 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
}
