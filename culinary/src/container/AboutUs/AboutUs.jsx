import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We embrace innovation and creativity in our culinary creations, constantly exploring new flavors, techniques, and presentations to surprise and delight our guests.
          In Hospitality and Service our team is dedicated to providing warm, welcoming hospitality and exceptional service to ensure that every guest feels valued and cared for throughout their dining experience.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">From humble beginnings as a small neighborhood eatery, we quickly gained recognition for our commitment to quality ingredients, innovative cuisine, and exceptional hospitality. Over the years, we have grown and evolved, expanding our menu offerings, refining our techniques, and creating a welcoming atmosphere that feels like home to our guests.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;