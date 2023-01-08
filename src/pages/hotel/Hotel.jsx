import Navbar from "./../../components/navbar/Navbar";
import Header from "./../../components/header/Header";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Maillist from "../../components/maillist/Maillist";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { useState } from "react";

export default function Hotel() {
  const photos = [
    { src: "/assets/hotelpage/hotel-img-1.jpg" },
    { src: "/assets/hotelpage/hotel-img-2.jpg" },
    { src: "/assets/hotelpage/hotel-img-3.jpg" },
    { src: "/assets/hotelpage/hotel-img-4.jpg" },
    { src: "/assets/hotelpage/hotel-img-5.jpg" },
    { src: "/assets/hotelpage/hotel-img-6.jpg" },
  ];

  const [countslider, setCountslider] = useState(null);
  const [openslide, setOpenslide] = useState(false);

  const handleslider = (i) => {
    setCountslider(i);
    setOpenslide(true);
  };

  const handlecount = (iord) => {
    let newcount;
    if (iord === "l") {
      countslider === 0 ? (newcount = 5) : (newcount = countslider - 1);
    } else {
      countslider === 5 ? (newcount = 1) : (newcount = countslider + 1);
    }

    setCountslider(newcount);
  };

  return (
    <div className="hotel-page">
      <Navbar />
      <Header type={"list"} />
      {openslide && (
        <div className="slide">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="cross"
            onClick={() => {
              setOpenslide(false);
            }}
          />
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="left-arrow"
            onClick={(l) => {
              handlecount();
            }}
          />
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="right-arrow"
            onClick={(r) => {
              handlecount();
            }}
          />
          <img src={photos[countslider].src} alt="" />
        </div>
      )}
      <div className="hotel-container">
        <div className="hotel-wrapper">
          <button className="desc-btn a-btn">Reserve or Book Now!</button>
          <h2 className="hotel-title">Mabi City Centre Hotel</h2>
          <small>
            <FontAwesomeIcon icon={faLocationDot} />{" "}
            <span>
              Kleine Gracht 24, Boschstraatkwartier, 6211 CB Maastricht,
              Netherlands –
            </span>
          </small>
          <p className="loc">Excellent location – 500 meter from center</p>
          <p className="free-set">
            Book a stay over $112 at this property and get a free airport taxi
          </p>

          <div className="hotel-images">
            {photos.map((photo, ind) => {
              return (
                <img
                  key={ind}
                  src={photo.src}
                  alt="hotel-img"
                  className="hotel-img"
                  onClick={() => handleslider(ind)}
                />
              );
            })}
          </div>

          <div className="hotel-desc">
            <div className="desc-left">
              <h2>All gonna be fun !</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur, nam laborum natus cumque, debitis ullam vero
                voluptatem temporibus facere fugit et dolorum eaque omnis
                impedit ratione cupiditate sint nihil soluta exercitationem eius
                dolores atque quibusdam. Fuga, amet incidunt voluptate
                reiciendis similique odit alias voluptatum. Quos ab officiis
                placeat beatae ad porro itaque velit eveniet ipsam atque ea,
                voluptatem eligendi voluptates odio hic. Dolorem dicta eaque
                quia sunt, porro nostrum omnis ratione voluptatibus officia,
                enim totam cupiditate possimus qui dolores quasi.
              </p>
            </div>

            <div className="desc-right">
              <div className="desc-right-wrapper">
                <h3>Perfect for a 9-nights stay!</h3>
                <p>
                  Located in the best-rated area in Maastricht, this hotel has
                  an excellent location score of 9.5
                </p>
                <div>
                  <span>$925</span>
                  (9 nights)
                </div>
                <button className="desc-btn">Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Maillist />
      <div className="f-con">
        <Footer />
      </div>
    </div>
  );
}
