import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom CSS
import HotelIMG from "./assets/images/hotel-1.jpg";

function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="text-center hero">
        <div className="overlay p-5">
          <h1 className="display-4">
            Never Lose a Guest's Left-Behind Item Again.
          </h1>
          <p className="lead">
            EZ Ship Kiosk automates the return of forgotten items, saving your
            staff time and improving guest satisfaction.
          </p>
          <a className="btn btn-primary btn-lg mx-2" href="#contact">
            Get a Free Demo
          </a>
          <a className="btn btn-secondary btn-lg mx-2" href="#content">
            Learn More
          </a>
        </div>
      </header>

      {/* Key Value Proposition */}
      <section className="container mt-4 text-center px-4" id="content">
        <h2>What is EZ Ship Kiosk?</h2>
        <p>
          EZ Ship Kiosk is the ultimate solution for managing left-behind items
          in hotels. From logging to shipping, we automate the entire process,
          ensuring that guests easily recover their forgotten belongings while
          reducing the burden on hotel staff.
        </p>
      </section>

      {/* How It Works */}
      <section className="container mt-2 px-4">
        <h2>How It Works</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            Hotel staff logs left-behind items into the kiosk.
          </li>
          <li className="list-group-item">
            Guests receive an automated notification that takes them to the
            shipping portal.
          </li>
          <li className="list-group-item">
            Item is securely returned with minimal staff intervention.
          </li>
        </ol>
      </section>

      <section className="container text-center">
        <img src={HotelIMG} alt="How It Works" className="img-fluid" />
      </section>

      {/* Benefits for Hotels */}
      <section className="container mb-2 px-4">
        <h2>Benefits for Hotels</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Saves time: No more manual tracking or shipping processes for staff.
          </li>
          <li className="list-group-item">
            Improves guest experience: Guests appreciate quick, seamless
            returns.
          </li>
          <li className="list-group-item">
            Boosts hotel reputation: Positive reviews from happy guests who
            receive their forgotten items efficiently.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center my-5 px-4 call-to-action">
        <a className="btn btn-primary btn-lg mx-2" href="#contact">
          Request a Free Demo
        </a>
        <a className="btn btn-secondary btn-lg mx-2" href="#contact">
          Get a Quote
        </a>
        <a className="btn btn-info btn-lg mx-2" href="#contact">
          Contact Us for More Info
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-5">
        <h2 className="text-center" id="contact">
          Contact Us
        </h2>
        <form className="px-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="hotelName" className="form-label">
              Hotel Name
            </label>
            <input type="text" className="form-control" id="hotelName" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@ezshipkiosk.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
