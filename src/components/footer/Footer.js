import React from "react";
import { Container } from "react-bootstrap";
import logoImage from "../../assets/titleLogo.png";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <div className="top d-flex">
            <div className="logo">
              <img src={logoImage} alt="logo" width="178px" height="38px" />
            </div>
            <div className="link-list company">
              <h4>Company</h4>
              <ul className="unstyled">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Principles</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Educators</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
              </ul>
            </div>
            <div className="link-list product">
              <h4>Product</h4>
              <ul className="unstyled">
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Security</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
              </ul>
              <ul className="unstyled social">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom d-flex">
            <ul className="unstyled info-links">
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Accessibility</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                &copy;
                {new Date().getFullYear()}, MERN Stack
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};
