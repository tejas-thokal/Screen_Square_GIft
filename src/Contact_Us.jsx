import React from "react";
import "./Contact_US.css"; // Assuming the CSS below is saved here

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="cards">
        <div className="card">
          <h3>Find Us</h3>
          <p>
            Sr. No. 47, Nainadevi Homes Sankalp Soc, 1st Floor, Flat No. 2, Lane
            No. 1, Behind Dwarka Garden Mangal Karyalaya, Sunita Nagar, Wadgaon
            Sheri, Pune, Maharashtra 411014
          </p>
          <button>
            <i className="fas fa-map-marker-alt"></i>
            <a
              href="https://maps.app.goo.gl/t11mfM3oT1L5xHNA9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Maps
            </a>
          </button>
        </div>
        <div className="card">
          <div className="number">
            <h3>Call Us</h3>
            <p>+91 9923660003</p>
          </div>
          <button>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+919923660003">Call Now</a>
          </button>
        </div>
        <div className="card">
          <div className="e-mail">
            <h3>Mail Us</h3>
            <p>info@screensquaregifts.com</p>
          </div>
          <button>
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@screensquaregifts.com">Mail Us</a>
          </button>
        </div>
      </div>
    </div>
  );
}
