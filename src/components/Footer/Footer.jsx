import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="app-store-play">
        <h1>Raghavendra Patil</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia
          eius est sunt consectetur rem possimus officia minima reiciendis
          perspiciatis! Soluta corrupti nesciunt suscipit repellendus adipisci
          reiciendis veritatis, accusantium saepe?
        </p> 
      </div>

      <div className="">
        <h2>About Us</h2>
        <ul>
          <li>Careers</li>
          <li>Our Stories</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
     
      <div className="">
        <h2>Contact Us</h2>
        <ul>
          <li>Teachers colony, Rayadurg</li>
          <li className="contact-info-flex">
            <a
              target="_blank"
              href="mailto:raghavendrapatil135@gmail.com"
              className="icon-flex phone-icon"
            >
              raghavendrapatil135@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
            Phone :{" "}
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=7993842375"
              className="icon-flex phone-icon"
            >
              +91 7993842375
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
