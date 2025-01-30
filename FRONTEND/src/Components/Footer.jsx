import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="banner">
          <div className="left">HARRY'S</div>
          <div className="right">
            <p>Tower Chowk, Ujjain</p>
            <p>Open: 09:00 AM - 10:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Harsh Padiyar</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By @harshpadiyar.</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #f9fbf2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 20px 20px 10px 20px;

  .container {
    max-width: 1500px;
    min-width: 1500px;
    display: flex;
    flex-direction: column;
  }

  .banner {
    display: flex;
    justify-content: space-between;
  }

  .banner:first-child {
    padding-bottom: 30px;
    margin-bottom: 20px;
    position: relative;
  }

  .banner:first-child::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #111;
  }

  .banner:first-child .left {
    font-size: 1.75rem;
  }

  .banner:last-child .left {
    font-size: 18px;
    color: #333;
  }

  .banner:last-child .left a {
    color: #333;
  }

  .banner:last-child .left a:hover {
    color: #111;
    transition: 0.3s;
    font-weight: bold;
  }

  .banner .right {
    text-align: end;
    font-size: 18px;
    color: #333;
  }

  @media (max-width: 1520px) {
    .container {
      min-width: 100%;
      padding: 0 20px;
    }
  }

  @media (max-width: 530px) {
    .banner:first-child {
      flex-direction: column;
      gap: 15px;
    }
    .banner:first-child .left,
    .banner .right {
      text-align: center;
    }
    .banner {
      flex-direction: column;
      text-align: center;
      gap: 7px;
    }
  }
`;
