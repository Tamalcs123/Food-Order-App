import React from "react";
import Aboutphoto from "../images/photo.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Aboutphoto})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Inspired by the wine bars in Spain and Italy, Vinoteca serve simple
          yet imaginative food with characterful wine to drink in or take away.
          Opening in 2005, they now have five sites across London. “We are
          delighted with the Tevalis system installed in all of our restaurant
          and wine bars; it has been the perfect balance between intuitive user
          friendliness and the flexibility we need to have the system
          tailor-suited to our needs. Impressive indeed, we will be using the
          Tevalis EPOS solutions across further sites.”As we explore in this
          article, the very best POS systems empower your business to profit or
          upsell at every step of the customer sales journey and can be the
          cornerstone to sustained business growth.TouchBistro has been around
          since 2011 and has already claimed a number of awards – including the
          title of the top-selling app.
        </p>
      </div>
    </div>
  );
}

export default About;
