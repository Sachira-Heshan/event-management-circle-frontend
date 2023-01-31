import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="pt-4" style={{ backgroundColor: "#333333" }}>
      <div className="container text-white">
        <div className="py-3 d-flex justify-content-between">
          <div className="">
            <ul
              className="list-unstyled mb-3 d-flex flex-column gap-3"
              style={{}}
            >
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Home
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  About Us
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Contact Us
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Blog
                </a>
              </li>
            </ul>
            <div className="fs-2 d-flex gap-4">
              <a className="text-white" href="/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="text-white" href="/">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a className="text-white" href="/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="text-white" href="/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="">
            <ul
              className="list-unstyled mb-3 d-flex flex-column gap-3"
              style={{}}
            >
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Register
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Login
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  My Account
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Post an AD
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul
              className="list-unstyled mb-3 d-flex flex-column gap-3"
              style={{}}
            >
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Terms & Conditions
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Q & A
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Privacy Policy
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Site Map
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Careers
                </a>
              </li>
              <li className="">
                <a className="text-decoration-none text-white" href="/">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="w-50 mx-auto" />
        <div className="py-4 d-flex justify-content-center">
          <p>&#169; 2022 || All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
