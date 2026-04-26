import "./Locations.css";
import himachal from "../media/himachalbg.jpg";
import dubai from "../media/dubai.jpg";
import europe from "../media/europebg.jpg";
import kerala from "../media/keralabg.jpg";
import maldives from "../media/himachalbg.jpg";
import rajasthan from "../media/rajasthan.jpg";
import thailand from "../media/thailandbg.jpg";
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
           
  const packageInfoRow1 = [
    {
      place: "delhi",
      info: "Delhi, where history whispers through every monument.",
      img: goa,
      price: "10,000-15,000 INR",
    },
    {
      place: "goa",
      info: "Beach vibes and endless tides—Goa, you’re a dream come true.",
      img: kerala,
      price: "8000-11,000 INR",
    },
    {
      place: "himachal",
      info: "Exploring the hidden gems of Himachal, where nature reigns supreme.",
      img: himachal,
      price: "8000-10,000 INR",
    },
    {
      place: "rajasthan",
      info: "In the land of kings, where history and grandeur reign supreme—Rajasthan.",
      img: rajasthan,
      price: "4000-5000 INR",
    },
    {
      place: "dubai",
      info: "Exploring the glittering skyline and golden sands of Dubai.",
      img: dubai,
      price: "25,000-30,000 INR",
    },
    {
      place: "thailand",
      info: "From bustling Bangkok to tranquil Phuket—Thailand, you’re unforgettable.",
      img: thailand,
      price: "20,000-25,000 INR",
    },
    {
      place: "maldives",
      info: "Living the island dream in the crystal-clear lagoons of the Maldives.",
      img: maldives,
      price: "15,000-18,000 INR",
    },
    {
      place: "europe",
      info: "Wandering through Europe, where every city feels like a storybook.",
      img: europe,
      price: "22,000-24,000 INR",
    },
    {
      place: "uttarakhand",
      info: "From the sacred Ganges to the snow-capped peaks—Uttarakhand, you inspire awe.",
      img: dubai,
      price: "6000-8000 INR",
    },
    {
      place: "jammu",
      info: "Exploring Jammu, the gateway to heaven on Earth.",
      img: goa,
      price: "9000-12,000 INR",
    },
    {
      place: "chennai",
      info: "Embracing the charm of Chennai, where tradition meets the sea.",
      img: himachal,
      price: "2000-3000 INR",
    },
    {
      place: "gujrat",
      info: "In Gujrat, every step is a journey through rich heritage and natural beauty.",
      img: rajasthan,
      price: "9000-10,000 INR",
    },
    
    
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
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
        </div>
      </section>
    </>
  );
};
