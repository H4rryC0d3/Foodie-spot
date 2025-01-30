import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
    <div className="container">
        <div className="banner">
           <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The Only thing we're serious about is food.</p>
           </div>
           <p className="mid">
           Welcome to HARRY's Restaurant where great food meets warm hospitality! We pride ourselves on serving fresh,
            high-quality dishes crafted with love and locally sourced ingredients. Our cozy ambiance and attentive service
             make us the perfect spot for family gatherings, casual outings, or special occasions. At HARRY's Restaurant 
             every meal is a celebration of flavor and togetherness. Come dine with us and experience the difference!
           </p>
           <Link to={"/"}>
             Explore Menu{""} 
             <span>
             < HiOutlineArrowNarrowRight/>
             </span>
           </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
    </div>
    </section>
    
  );
};

export default About;
