import "./properties.css";

export default function Properties() {
  return (
    <div className="properties">
      <h1 className="properties-title">Browse by property type</h1>
      <div className="properties-container">
        <div className="properties-item">
          <img
            src={"/assets/properties/propimg-1.jpeg"}
            alt=""
            className="prop-img"
          />
          <div className="proptext">
            <h4>Hotels</h4>
            <span>926, 766 hotels</span>
          </div>
        </div>

        <div className="properties-item">
          <img
            src={"/assets/properties/propimg-2.jpeg"}
            alt=""
            className="prop-img"
          />
          <div className="proptext">
            <h4>Apartments</h4>
            <span>891, 486 apartments</span>
          </div>
        </div>

        <div className="properties-item">
          <img
            src={"/assets/properties/propimg-3.jpeg"}
            alt=""
            className="prop-img"
          />
          <div className="proptext">
            <h4>Resorts</h4>
            <span>18, 278 resorts</span>
          </div>
        </div>

        <div className="properties-item">
          <img
            src={"/assets/properties/propimg-4.jpeg"}
            alt=""
            className="prop-img"
          />
          <div className="proptext">
            <h4>Villas</h4>
            <span>478, 867 villas</span>
          </div>
        </div>

        <div className="properties-item">
          <img
            src={"/assets/properties/propimg-5.jpeg"}
            alt=""
            className="prop-img"
          />
          <div className="proptext">
            <h4>Cabins</h4>
            <span>37, 172 cabins</span>
          </div>
        </div>

        {/* <div className="properties-item">
          <img
            src={"/assets/properties/propimg-6.jpeg"}
            alt=""
            className="prop-img"
          />
          <div className="proptext">
            <h4>Cottages</h4>
            <span>523, 772 cottages</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
