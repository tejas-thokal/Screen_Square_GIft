import React from "react";
import "./About_US.css";
import Bhumika from "./assets/Bhumika.jpg"

export default function PortfolioCard() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-card">
        {/* Profile Image Section */}
        <div className="profile-image-wrapper">
          <div className="profile-border">
            <img
              src={Bhumika}
              alt="Bhumika"
              className="profile-image"
            />
          </div>
          <div className="dot dot-orange"></div>
          <div className="dot dot-yellow"></div>
        </div>

        <div className="info-section">
          <button className="about-button">About US</button>
          <h1 className="headline">
            At Screen Square, we believe that the right gift can build lasting connections. Founded in 2019, we have been committed to helping businesses express appreciation and celebrate success through thoughtfully selected gifts.
          </h1>

          <button className="about-button">About US</button>
          <p className="description">
            To elevate business relationships by providing exceptional corporate gifts that reflect your brand’s values and appreciation
          </p>

          <div className="info-box">
            <div>
              <div className="label">Name:</div>
              <div>Bhumika Thokal</div>
            </div>
            <div>
              <div className="label">Phone:</div>
              <div>+91 9923660003</div>
            </div>
            <div>
              <div className="label">Email:</div>
              <div>info@screensquaregifts.com</div>
            </div>
            <div>
              <div className="label">Twitter:</div>
              <div>@Sairakarim001</div>
            </div>
          </div>

          <div className="button-row">
            <button className="contact-button">Contact me →</button>
            <button className="resume-button">Download my resume ⭳</button>
          </div>
        </div>
      </div>
    </div>
  );
}
