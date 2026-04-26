import './Goa.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Goa=()=>{
    const placeInfo = [
        {
          placeName: "Goa",
          tagline: "The mountains are calling",
          desc: "Discover Goa, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: GoaImages.dp1,
          location: "Goa",
          price: "INR 4999",
          desc: "Discover Goa, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp2,
          location: "Goa",
          price: "INR 5500",
          desc: "Discover Goa, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp3,
          location: "Goa",
          price: "INR 6500",
          desc: "Discover Goa, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp4,
          location: "Goa",
          price: "INR 10,000",
          desc: "Discover Goa, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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
                  Goa is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={GoaImages.d1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={GoaImages.d2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="cultures">
          <span id="fdiff">T</span>reks
          <hr />
        </h2>

        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={GoaImages.dc1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={GoaImages.dc2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">B</span>est Trekking camps 
                  <hr />
                </h2>
                <p>
                  The culture of Goa, an emirate of the United Arab Emirates.
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
          <span id="fdiff">N</span>ature
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
                  Goa is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={GoaImages.db1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={GoaImages.db2} alt={""} id="port2" />
            </div>
          </div>
        </div>
        <hr id="line" />
        <h2 className="heading" id="hotels">
          <span id="fdiff">H</span>otels
          <hr />
        </h2>
        <div className="t-row">
          <div className="images module">
            <div className="img1">
              <img src={GoaImages.dh1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={GoaImages.dh2} alt={""} id="port2" />
            </div>
          </div>
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">T</span>op hotels for you
                  <hr />
                </h2>
                <p>
                  Goa is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">O</span>nly in Himachal
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
                  Goa is open and ready to welcome you again to make new
                  memories and experiences , with iconic hotels, chic malls,
                  desert retreats and island getaways and the worderful beaches.
                </p>
              </div>
            </div>
          </div>
          <div className="images module">
            <div className="img1">
              <img src={GoaImages.do1} alt={""} id="port1" />
            </div>
            <div className="img2">
              <img src={GoaImages.do2} alt={""} id="port2" />
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
            Goa, located on the western coast of India, is renowned for its vibrant and eclectic culture, which is a unique blend of Indian and Portuguese influences. The region's 450 years of Portuguese colonial rule have left a lasting impact on its architecture, cuisine, religion, and traditions, making Goa distinct from other parts of India.
            </p>
            <p>
            The state's culture is marked by its laid-back, easygoing lifestyle, often associated with its picturesque beaches, lively festivals, and thriving music scene. Goan architecture showcases a fusion of Portuguese and Indian styles, with charming whitewashed churches, colorful houses with red-tiled roofs, and ornate temples dotting the landscape.
            </p>
            <p>
            Goa's festivals, such as Carnival, Christmas, and Sao Joao, reflect its deep-rooted Catholic heritage, while Hindu festivals like Diwali and Ganesh Chaturthi are also celebrated with equal fervor. Music and dance are integral to Goan life, with traditional forms like the Mando and Dulpod as well as the widespread influence of Western music, especially during beach parties and music festivals.
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