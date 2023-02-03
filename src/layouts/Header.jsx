import React from "react";
import Logo from "../assets/img/event-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="" style={{}}>
        <nav
          className="navbar navbar-expand-lg m-0 p-0"
          style={{ maxHeight: "160px" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img
                src={Logo}
                style={{ maxHeight: "100px", width: "auto" }}
                alt="event management circle logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarSupportedContent"
            >
              <div
                className="rounded border border-1 border-dark"
                style={{ width: "419px" }}
              >
                <form className="d-flex" role="search">
                  <input
                    className="form-control rounded-start border border-0"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                  />
                  <button className="btn" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </div>
              <div className="flex-fill mx-4">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
                  <div className="d-flex gap-4">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">
                        Manage Your Event
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blog">
                        Blog
                      </Link>
                    </li>
                  </div>
                  <div className="d-flex gap-4">
                    <li className="nav-item">
                      <Link
                        className="nav-link border border-1 border-dark rounded px-4"
                        to="/register"
                      >
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link rounded bg-dark text-white border border-dark px-4"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon icon={faUser} />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            Post an AD
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        EN
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/">
                            Sinhala
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/">
                            German
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
