import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "../pages/Notfound.css";

const Notfound = () => {
  return (
    <section className="notfound">
      <div className="container">
        <img src="/notFound.svg" alt="Not Found" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <Link to="/">
          Back to Home{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Notfound;
