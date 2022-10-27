import React, { Component } from 'react';

import i24 from '../../images/image 24.png';
import G23 from '../../images/Group 23.png';
import Slogo from '../../images/Group 1.png';
import Gmail from '../../images/Gmail logo.png';
import instaLogo from '../../images/Instagram logo.png';
import G3 from '../../images/Group 3.png';
import i25 from '../../images/image 25.png';
import './Blog.css'

const cutStyle={
    height : '100px'
}

class Blog extends Component {

   

    render() {
        return (<div>
      <h1>Stay Informed with informative blogs curated by SAE IIT BHU</h1>
      <div className="latest-blog">
        <div className="latest-blog-head">
          <h1>LATEST BLOG</h1>
          <img src={i24} />
        </div>
        <div className="latest-blog-body">
          <p><span className="topics">Topics : EVs , IC engines</span><span className="date">Date : 27/12/2022</span></p>
        <h2>Bookings for the New Maruti Grand Vitara variant bear out consumer </h2>
        <img src={i25} />
        <div className="blog-desc">In the Indian SUV market, which clocked around 1.2 million units in FY22, the midsize SUV holds a special place. It has a share of 18% and growing ..
          In the Indian SUV market, which clocked around 1.2 million units in FY22, the midsize SUV holds a special place. It has a share of 18% and growing ..
          In the Indian SUV market, which clocked around 1.2 million units in FY22, the midsize SUV holds a special place. It has a share of 18% and growing ..In the Indian SUV market, which clocked around 1.2 million units in FY22, the midsize SUV holds a special place. It has a share of 18% and growing ..</div>
        </div>
        

      </div>
      <div style={cutStyle}></div>

      <div className="footer">
        <hr />
        <div className="footer-box">
          <div className="contact-us">
            <div className="footer-logo">
              <img src={G23} alt="" />
              <img src={Slogo} alt="" />
            </div>
            <div className="contact-us-desc">
              <h2>Contact Us</h2>
              Indian Institute Of Technology
              <br />
              (Banaras Hindu University)
              <br />
              Varanasi. India
              <br />
              PIN: 221005
              <br />
              <br />
              <span>+91 7558525641</span>
            </div>
          </div>
          <div className="connect">
            <h2>
              SAE Collegiate Club 2022
              <br /> IIT (BHU) Varanasi
            </h2>
            <h4>Mail us at-</h4>
            <a href="/">
              <img src={Gmail} alt="" className="gmail-logo" />
              saecollegiateclub.iitbhu@gmail.com
            </a>
            <br />
            <h4>
              Connect to us on :
              <a href="/">
                <img src={instaLogo} alt="" className="insta-logo" />
              </a>
              <a href="/">
                <img src={G3} alt="" className="linkedin-logo" />
              </a>
            </h4>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <h4>
              Check out our&nbsp;
              <span>
                <a href="/">Blog</a>&nbsp;
              </span> 
              with weekly updates
            </h4>
            <a href="/">Projects</a> &nbsp;<a href="/">Events</a>
            <br />
            <a href="/">Alumni</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/">Gallery</a>
            <br />
            <a href="/">About us</a>
            <a href="/">Workshops</a>
            <br />
            <p className="return-to-top">
              <a href="/">Return to top ↑ </a>
            </p>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default Blog;