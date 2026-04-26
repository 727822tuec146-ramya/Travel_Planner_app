import "./PackageSection.css";
import { Link } from "react-router-dom";
import { PackageCard } from "./PackageCard";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";

export const PackageSection = () => {
  const packageInfoRow1 = [
    {
      place: "delhi",
      info: "Delhi, where history whispers through every monument.",
      img: himachal,
      price: "10,000-15,000 INR",
    },
    {
      place: "goa",
      info: "Beach vibes and endless tides—Goa, you’re a dream come true.",
      img: goa,
      price: "8000-11,000 INR",
    },
    {
      place: "kerala",
      info: "Savoring the beauty of Kerala’s lush green tea plantations and tranquil backwaters.",
      img: kerala,
      price: "3000-5000 INR",
    },
    {
      place: "rajasthan",
      info: "In the land of kings, where history and grandeur reign supreme—Rajasthan.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
  ];
  const packageInfoRow2 = [
    {
      place: "dubai",
      info: "Exploring the glittering skyline and golden sands of Dubai.",
      img: dubai,
      price: "25,000-30,000 INR",
    },
    
    {
      place: "thailand",
      info: "From bustling Bangkok to tranquil Phuket-Thailand, you’re unforgettable.",
      img: thailand,
      price: "20,000-25,000 INR",
    },
    {
      place: "maldives",
      info: "Living the island dream in the crystal-clear lagoons of the Maldives.",
      img: maldives,
      price: "15,000-18,000 INR",
    },
  ];
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Best Selling Destinations!</h1>
          <div className="outerbox">
            <h2>
              Domestic
              <hr />
            </h2>
            <div className="row1">
              {packageInfoRow1.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <h2>
              International
              <hr />
            </h2>
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                );
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
