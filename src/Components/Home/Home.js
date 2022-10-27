import React, { Component } from 'react';
import Slogo from '../../images/Group 1.png';
import Gmail from '../../images/Gmail logo.png';
import G3 from '../../images/Group 3.png';
import G6 from '../../images/Group 6.png';
import G23 from '../../images/Group 23.png';
import i24 from '../../images/image 24.png';
import i25 from '../../images/image 25.png';
import i26 from '../../images/image 26.png';
import i27 from '../../images/image 27.png';
import i28 from '../../images/image 28.png';
import i30 from '../../images/image 30.png';
import instaLogo from '../../images/Instagram logo.png';
import twitterLogo from '../../images/Twitter logo.png';
import v1 from '../../images/Vector (1).png';
import v2 from '../../images/Vector.png';
import w211 from '../../images/WhatsApp Image 2022-10-07 at 2.11.png';
import w212 from '../../images/WhatsApp Image 2022-10-07 at 2.12.png';
import w223 from '../../images/WhatsApp Image 2022-10-07 at 2.23.png';
import w447 from '../../images/WhatsApp Image 2022-10-07 at 4.47.png';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="first-page">
        <div className="container">
          <div className="box-1">
            <div className="left">
              <h1>Welcome to SAE Collegiate Club<br /> IIT BHU</h1>
              <h2>Checkout our latest <span>Workshops</span> and <span>Events</span></h2>
              <img src={G6} alt=''></img>
              <div className="first-box">
                <h4><img src={v2} alt='' /><b>WHAT WE DO</b></h4>SAE(Society of Automotive Engineers) aims to give a platform to people who wish to learn about and build automobiles. Our teams take part in various RC and automotive events all round the year....
                <br /><br />
                <a href="">Read More</a>
              </div>
            </div>
            <div className="right">
              <img src={w223} alt='' className="img1" />
              <img src={w447} alt='' className="img2" />
            </div>
          </div>
          <div className="box-2">
            <h2>A community of people in love with cars and everything about them!</h2>
            <div className="second-box"><h4><img src={v1} alt='' /><b>LATEST BLOG</b>
            </h4>Modern vehicles are growing increasingly complex. As well as the electrified powertrain, advanced electronics and networked technologies are becoming.....
              <br /><br /><br />
              <a href="">Read More</a>
            </div>
            <img src={w211} alt='' className="img4" />
            <div className="currents">Currently we are working on various projects, including <br /><br />

              <span>SAE student formula racing car -</span> A racing car is made from scratch for upcoming competitions like Supra SAE and Formula Bharat<br /><br />

              <span>RC car project -</span> Work has been ongoing on RC cars for upcoming iit Bombay Techfest.<br /><br />

              <span>L Roboatics - </span>A project on automatic controlled boats has been ongoing for upcoming iit Bombay Techfest giving well curated content via our blogs. To learn more, visit <a href=""><span>Projects</span></a></div>
          </div>
        </div>
      </div>
      <div className="second-page">
        <div className="news">
          <h1>LATEST IN AUTO TECHNOLOGY<img src={i24} alt='' /></h1>
          <div className="news-1">
            <div className="left-1">
              <img src={i25} alt='' />
            </div>
            <div className="right-1">

              <a href=""><h2>Bookings for the New Maruti Grand Vitara
                variant bear out consumer bent for hybrids;
                SUV sells 4800 units in debut month</h2></a>
              <p>In the Indian SUV market, which clocked around 1.2 million units in FY22, the midsize SUV holds a special place. It has a share of 18% and growing ..</p>
            </div>
          </div>
          <hr />
          <div className="news-2">
            <div className="left-2">
              <img src={i26} alt='' />
            </div>
            <div className="right-2">
              <a href=""><h2>Elon Musk set to showcase Tesla’s
                humanooid robot after delay</h2></a>
              <p>Elon Musk unveils prototype of Tesla's humanoid robot Optimus, says it will cost less than a car.<br /> Elon Musk showed off a new humanoid robot Friday at a Tesla Inc. artificial-intelligence event, <br />part of the chief executive's effort to shape public perce.....</p>
            </div>
          </div>
        </div>
      </div>
      <div className="third-page">
        <h1>READY SET GO →</h1>
        <div className="cards">
          <div className="card-1 card">
            <div className='headcard'>
              <img src={i28} alt='' />
              <h2>LEARN</h2>
            </div>
            <br />
            <p>With the Resources provided you can start exploring various fields in automative technology and get ready to discover this new and exciting world of cars</p>
            <br />
            <a href="">Get more info →</a>

          </div>
          <div className="card-2 card">

            <img src={i27} alt='' />
            <h2>INNOVATE</h2>
            <br />
            <p>After getting familiar with the basics of whatever field you like, brainstorm a project on any idea you find needs to be solved. Familiarize yourself with practical skills needed to bring your ideas to life</p>
            <br />
            <a href="">Get more info →</a>
          </div>
          <div className="card-3 card">

            <img src={i30} alt='' />
            <h2>BUILD</h2>
            <br />
            <p>After all the brainstorming, its time to make the prototypes. You can work with us to create actual models and make the world your race course.</p>
            <br />
            <a href="">Get more info →</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <hr />
        <div className="footer-box">
          <div className="contact-us">
            <div className="footer-logo">
              <img src={G23} alt='' />
              <img src={Slogo} alt='' />
            </div>
            <div className="contact-us-desc">
              <h2>Contact Us</h2>
              Indian Institute Of Technology<br />
              (Banaras Hindu University)<br />
              Varanasi. India<br />
              PIN: 221005<br /><br />
              <span>+91 7558525641</span>
            </div>
          </div>
          <div className="connect">
            <h2>SAE Collegiate Club 2022<br /> IIT (BHU) Varanasi</h2>
            <h4>Mail us at-</h4>
            <a href=""><img src={Gmail} alt='' className="gmail-logo" />saecollegiateclub.iitbhu@gmail.com</a><br />
            <h4>Connect to us on : <a href=""><img src={instaLogo} alt='' className="insta-logo" /></a>
              <a href=""><img src={G3} alt='' className="linkedin-logo" /></a>
            </h4>
          </div>
          <div className="quick-links">
            <h2>Quick Links</h2>
            <h4>Check out our <span><a href="">Blog</a></span> with weekly updates</h4>
            <a href="">Projects</a> &nbsp;<a href="">Events</a><br />
            <a href="">Alumni</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Gallery</a><br />
            <a href="">About us</a><a href="">Workshops</a><br />
            <p className="return-to-top"><a href="">Return to top ↑ </a></p>


          </div>
        </div>
        </div>
            </div>
        );
    }
}

export default Home;