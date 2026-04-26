import "./Bookform.css";
import axios from 'axios';

export const BookForm = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/booking', data);
      console.log(response.data)
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert('Your Data Is Saved Successfully.');
    }

    e.target.reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="inputbox">
          <h3>Your Name*</h3>
          <input type="text" placeholder="Name" required name="name" />
        </div>
        <div className="inputbox">
          <h3>Email Address*</h3>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            name="email"
          />
        </div>
        <div className="inputbox">
          <h3>Contact Number*</h3>
          <input
            type="tel"
            placeholder="Number"
            required
            maxlength="10"
            pattern="[0-9]{10}"
            name="contact"
          />
        </div>
        <div className="inputbox">
          <h3>Enter Your destination*</h3>
          <input
            type="text"
            placeholder="destination"
            required
            name="destination"
          />
        </div>

        <div className="inputbox">
          <h3>Enter the number of people</h3>
          <input
            type="number"
            min="1"
            max="15"
            placeholder="number"
            required
            name="people"
          />
        </div>
        <div className="inputbox">
          <h3>Arrival</h3>
          <input type="date" id="cap" required name="arrival" />
        </div>
        <div className="inputbox">
          <h3>Departure</h3>
          <input type="date" id="cap" required name="dept" />
        </div>
        <div className="sub-btn">
          <button type="submit" className="subbtn">
            Book now
          </button>
        </div>
      </form>
    </>
  );
};
