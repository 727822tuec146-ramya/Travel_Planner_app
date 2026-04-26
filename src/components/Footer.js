import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const branchLoc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2195600952487!2d75.12117641437735!3d15.364590962016948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7356f725b09%3A0xe85a2e8c0e433478!2sOaks%202.0!5e0!3m2!1sen!2sin!4v1633436419361!5m2!1sen!2sin";
  return (
    <>
      <div className="footer">
        <div className="fbox">
          <div className="aboutus">
            <h2>
              <span id="fdiff">A</span>bout us
            </h2>
            <p>
            At TravelPl, we are dedicated to making your travel planning experience seamless and enjoyable. Our mission is to help you create unforgettable journeys by bringing together the best deals, destinations, and itineraries, all in one place. 
            </p>
          </div>
          <div className="branch">
            <h2>
              <span id="fdiff">G</span>oogle Map
            </h2>
            <iframe
              src={branchLoc}
              style={{ border: 0 }}
              id="map"
              allowFullScreen="https://www.google.co.in/maps/place/The+Residency+Towers,+Coimbatore/@11.0104827,76.9779739,17z/data=!3m1!4b1!4m9!3m8!1s0x3ba859b3ef7279f9:0x16decb0885576006!5m2!4m1!1i2!8m2!3d11.0104827!4d76.9805488!16s%2Fg%2F11fyxsn20k?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
              loading="lazy"
              title="Brach Location"
            ></iframe>
          </div>
          <div className="quicklinks">
            <h2>
              <span id="fdiff">Q</span>uick Links
            </h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/book">Book</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          
        </div>
        <hr />
        
      </div>
    </>
  );
};
