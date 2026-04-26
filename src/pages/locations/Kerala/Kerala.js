import './Kerala.css'
import { TravelCard } from "../../../components/locations/TravelCard";
import { GoaImages } from "../../../media/goa/GoaImages";
import PackCard from "../../../components/locations/PackCard";
import contactimg from "../../../media/contactus.png";
import { Link } from "react-router-dom";

export const Kerala=()=>{
    const placeInfo = [
        {
          placeName: "Kerala",
          tagline: "Gods own country",
          desc: "Discover Kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now! ",
        },
      ];
      const packageInfo = [
        {
          img: GoaImages.dp1,
          location: "kerala",
          price: "INR 3000",
          desc: "Discover kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp2,
          location: "kerala",
          price: "INR 5000",
          desc: "Discover kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp3,
          location: "kerala",
          price: "INR 6000",
          desc: "Discover kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
        },
        {
          img: GoaImages.dp4,
          location: "kerala",
          price: "INR 9000",
          desc: "Discover kerala, with world-class tourism and magnificent tailored destinations. Explore a wide range of choices and start planning your trip now!",
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
                A trip to Kerala offers a perfect blend of nature, culture, and tranquility. Start your journey in Kochi, exploring its historical sites like Fort Kochi and the Mattancherry Palace. Head to Munnar to enjoy the lush tea plantations and stunning hill views. In Thekkady, experience wildlife at Periyar National Park, followed by a serene backwater cruise in Alleppey on a houseboat. 
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
          <span id="fdiff">N</span>ature
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
                  <span id="fdiff">N</span>ature at its best
                  <hr />
                </h2>
                <p>
                Kerala, often referred to as "God's Own Country," is a haven for nature lovers, with its diverse landscapes ranging from lush green hills to serene backwaters. The Western Ghats, draped in emerald forests and dotted with tea and spice plantations, create a breathtaking backdrop for the hill stations like Munnar. Kerala’s backwaters, a network of tranquil lagoons, rivers, and lakes, offer a unique ecosystem teeming with life, best experienced on a traditional houseboat in Alleppey. 
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="beaches">
          <span id="fdiff">B</span>eaches
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
                Kerala is home to some of India's most picturesque beaches, each offering its own unique charm. Kovalam Beach, with its crescent-shaped coastline, is famous for its lighthouse and calm, shallow waters, making it ideal for swimming and sunbathing. Varkala Beach, perched beneath dramatic cliffs, is known for its natural springs and spiritual atmosphere, where visitors often partake in yoga and Ayurvedic treatments. 
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
          <span id="fdiff">T</span>emples
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
                  <span id="fdiff">F</span>amous temples
                  <hr />
                </h2>
                <p>
                Kerala is home to numerous temples that reflect the state's rich spiritual heritage and architectural splendor. The Sree Padmanabhaswamy Temple in Thiruvananthapuram is one of the most iconic, dedicated to Lord Vishnu and renowned for its intricate Dravidian architecture and immense wealth. The Guruvayur Temple in Thrissur, dedicated to Lord Krishna, is a major pilgrimage site, often called the "Dwarka of the South," and is famous for its elephant sanctuary and vibrant festivals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr id="line" />

        <h2 className="heading" id="indubai">
          <span id="fdiff">F</span>ood
          <hr />
        </h2>
        <div className="t-row">
          <div className="infobox module">
            <div className="box">
              <div className="title">
                <h2>
                  <span id="fdiff">I</span>nteresting foods to try
                  <hr />
                </h2>
                <p>
                A traditional feast served on a banana leaf, featuring a variety of vegetarian dishes such as Avial (mixed vegetable curry), Olan (pumpkin and cowpea stew), and Payasam (sweet rice pudding). It's a celebration of flavors and textures.
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
            Kerala, often referred to as "God's Own Country," is a diverse and vibrant state in southern India, known for its natural beauty, rich culture, and unique traditions. Here’s what’s included in the essence of Kerala:
            </p>
            <p>
            Backwaters: A network of tranquil lagoons, lakes, and rivers best explored by houseboats in places like Alleppey and Kumarakom.
Beaches: Stunning coastal stretches like Kovalam, Varkala, and Cherai, with golden sands and clear waters.
Hill Stations: Lush green highlands such as Munnar and Wayanad, famous for tea plantations and scenic views.
Forests and Wildlife: Rich biodiversity in wildlife sanctuaries like Periyar and Wayanad, with opportunities to see elephants, tigers, and exotic birds.
            </p>
            <p>
            Houseboat Cruises: Scenic rides through the backwaters, offering a serene and immersive experience.
Trekking and Nature Walks: Exploring the Western Ghats and national parks.
Shopping: Markets for spices, tea, and traditional handicrafts.
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