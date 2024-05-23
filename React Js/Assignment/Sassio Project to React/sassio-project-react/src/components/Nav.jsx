import React from 'react';

export default function Nav(props) {
  return (
    <header className="header row" id="top">
      <div className="col logo-col">
        <img src="assets/images/logo.png" alt="Your Image"/>
      </div>
      <button className="btn-white duplicate">Join</button>
      <div className="hamburger" tabIndex="0">
        <span className="material-symbols-outlined">menu</span>
        <div className="notification-down">
          <ul>
            <li><a href="index.html" className={props.activePage}>Home</a></li>
            <li><a href="about.html" className={props.activePage}>About Us</a></li>
            <li><a href="services.html" className={props.activePage}>Services</a></li>
            <li><a href="portfolio.html" className={props.activePage}>Portfolio</a></li>
            <li><a href="contact.html" className={props.activePage}>Contact Us</a></li>
            <li><a href="blog" className={props.activePage}>Blog</a></li>
            <li className="button"><a href="index.html">Get the App</a></li>
          </ul>              
        </div>
      </div>
      <div className="col navigation-col">
        <a href="index.html" className={props.activePage}>Home</a>
        <a href="about.html" className={props.activePage}>About Us</a>
        <a href="services.html" className={props.activePage}>Services</a>
        <a href="portfolio.html" className={props.activePage}>Portfolio</a>
        <a href="contact.html" className={props.activePage}>Contact Us</a>
        <a href="blog.html" className={props.activePage}>Blog</a>
      </div>
      <div className="col btn-primary">
        <button className="btn-white">Join</button>
        <button className="btn-black">Get the App</button>
      </div>
    </header>
  );
}