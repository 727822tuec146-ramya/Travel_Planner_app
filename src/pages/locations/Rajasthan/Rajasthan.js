import './Rajasthan.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { RajasthanImages } from "../../../media/rajasthan/RajasthanImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Rajasthan=()=>{
    const placeInfo = [
        {
          placeName: "Rajasthan",
          tagline: "Padharo mhare desh",
          desc: "Discover Rajasthan, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: RajasthanImages.dp1,
          location: "Rajasthan",
          price: "INR 5999",
          desc: "Discover Rajasthan, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: RajasthanImages.dp2,
          location: "Rajasthan",
          price: "INR 7000",
          desc: "Discover Rajasthan, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: RajasthanImages.dp3,
          location: "Rajasthan",
          price: "INR 8500",
          desc: "Discover Rajasthan, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: RajasthanImages.dp4,
          location: "Rajasthan",
          price: "INR 10,000",
          desc: "Discover Rajasthan, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
      ];
    return(
        <>
            <div className="t-container">
        {placeInfo.map((place) => {
          return (
            <TravelCard
              name={place.placeName}
              tagline={place.tagline}
              desc={place.desc}
            />
          );
        })}
      </div>

      <div className="t-info">
        <h2>
          <span id="diff">E</span>verything you need to know
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="diff">S</span>tart Planning Your Trip!
                  <hr />
                </h2>
                <p>
                Rajasthan is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={RajasthanImages.d1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={RajasthanImages.d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">C</span>ultures
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={RajasthanImages.dc1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={RajasthanImages.dc2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">D</span>iscover new cultures
                  <hr />
                </h2>
                <p>
                  The culture of Rajasthan, an emirate of the United Arab Emirates.
                  The UAE culture mainly revolves around the religion of Islam
                  and traditional Arab culture. The influence of Islamic and
                  Arab culture on its architecture, music, attire, cuisine, and
                  lifestyle are very prominent as well.
                </p>
                <p>
                  Five times every day, Muslims are called to prayer from the
                  minarets of mosques which are scattered around the country.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">F</span>amous
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est beaches to visit
                  <hr />
                </h2>
                <p>
                Rajasthan is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={RajasthanImages.db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={RajasthanImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">F</span>ood
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={RajasthanImages.dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={RajasthanImages.dh2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting foods to try 
                  <hr />
                </h2>
                <p>
                Rajasthanis open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Rajasthan
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting things to do
                  <hr />
                </h2>
                <p>
                Rajasthan is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={RajasthanImages.do1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={RajasthanImages.do2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />

        <div className="more">
          <h2 className="heading">
            What's included
            <hr id="line" />
          </h2>

          <div className="cont">
            <p>
            Rajasthan, the largest state in India, is a land of rich cultural heritage, vibrant traditions, and majestic history. Known as the "Land of Kings," Rajasthan's culture is deeply rooted in its royal past, with a legacy of grandeur and valor that is reflected in its palaces, forts, and festivals.
            </p>
            <p>
            The state's culture is characterized by its colorful attire, intricate jewelry, and distinctive art forms. Traditional clothing, such as the vibrant turbans for men and the ornate ghagras and odhnis for women, showcases the region's love for bright colors and intricate designs. Rajasthan's jewelry, including the famous kundan and meenakari work, is renowned for its craftsmanship.


            </p>
            <p>
            Rajasthan's festivals, such as Diwali, Teej, and the Desert Festival, are celebrated with great enthusiasm, marked by elaborate processions, folk performances, and traditional rituals. The Pushkar Camel Fair and the Jaipur Literature Festival are globally recognized events that draw visitors from around the world.
            </p>
          </div>
        </div>
      </div>
      <hr id="line" />
      <div className="container3" id="packages">
        <section className="packages">
          <h2>Best deals for you</h2>
          <div className="outerbox">
            <div className="row1">
              {packageInfo.map((pack) => {
                return (
                  <PackCard
                    img={pack.img}
                    loc={pack.location}
                    price={pack.price}
                    desc={pack.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <hr id="line" />

      <div className="container5" id="contact">
        <section className="t-contact">
          <h1>Book Your tickets</h1>
          <div className="rowlast">
            <div className="contimg">
              <img src={contactimg} alt={""} id="contimg" />
            </div>

            <div className="box">
              <h2>
                Book your tickets
                <hr />
              </h2>

              <p>
                One step away from booking your trip! What are you waiting for?
              </p>
              <Link to="/book">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
        </>
    )
}