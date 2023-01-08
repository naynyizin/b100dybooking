import "./featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featured-item">
        <img
          src={"/assets/explore/explore-img-1.jpg"}
          alt="explore-1"
          className="feauture-img"
        />
        <div className="feature-text">
          <span>Amsterdam</span>
          <img src={"/assets/explore/flag-1.png"} alt="" />
        </div>

        <div className="deals">
          <div>Deals start at</div>
          <div>US$30.23</div>
        </div>
      </div>

      <div className="featured-item">
        <img
          src={"/assets/explore/explore-img-2.jpg"}
          alt="explore-2"
          className="feauture-img"
        />
        <div className="feature-text">
          <span>Antwerp</span>
          <img src={"/assets/explore/flag-2.png"} alt="" />
        </div>

        <div className="deals">
          <div>Deals start at</div>
          <div>US$47.50</div>
        </div>
      </div>

      <div className="featured-item">
        <img
          src={"/assets/explore/explore-img-3.jpg"}
          alt="explore-3"
          className="feauture-img"
        />
        <div className="feature-text">
          <span>Aachen</span>
          <img src={"/assets/explore/flag-3.png"} alt="" />
        </div>

        <div className="deals">
          <div>Deals start at</div>
          <div>US$58.06</div>
        </div>
      </div>
    </div>
  );
}
