
import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">As a restaurant, we believe in delivering exceptional culinary experiences that delight our guests and create lasting memories. Our philosophy revolves around several core principles:</p>
        </div>
        <p className="p__opensans"> 
          We believe in being active members of our community and are committed to sustainability practices that minimize our environmental impact and support local producers.
          We strive to stay true to our culinary roots while also embracing diversity and celebrating global flavors, ensuring that each dish reflects authenticity and integrity.
          We are also dedicated to continuous improvement and learning, constantly seeking feedback and refining our offerings to exceed our guests' expectations.
          Overall, our restaurant is a place where food lovers can come together to savor delicious cuisine, enjoy genuine hospitality, and create memorable moments with friends and family.





 </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;