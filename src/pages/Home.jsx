import "../styles/Home.css";
import React from "react";
import HeroImage from "../assets/img/hero.png";
import GlobeImage from "../assets/img/globe.png";
import SriLankaImage from "../assets/img/srilanka.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ServiceProviderCard from "../components/ServiceProviderCard";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-9 py-3 px-0">
            <img
              src={HeroImage}
              alt="hero"
              width="100%"
              height="auto"
              className=""
            />
            <h5 className="py-4">
              <b>Find Your Service Provider</b>
            </h5>
            <div>
              <div className="input-group mb-3">
                <div
                  className="rounded border border-1 border-dark mx-auto"
                  style={{ width: "419px" }}
                >
                  <form className="d-flex" role="search">
                    <input
                      className="form-control rounded-start border border-0 fs-6"
                      type="search"
                      placeholder="Search Your Service Provider"
                      aria-label="Search"
                    />
                    <button className="btn" type="submit">
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
              <ServiceProviderCard />
              <ServiceProviderCard />
              <ServiceProviderCard />
              <ServiceProviderCard />
              <ServiceProviderCard />
              <ServiceProviderCard />
              <ServiceProviderCard />
              <ServiceProviderCard />
              <ServiceProviderCard />
            </div>
            <div className="text-center py-2">
              <a
                href="/"
                className="d-inline-block text-light bg-secondary py-2 px-4 mb-2 rounded-pill text-decoration-none"
              >
                View More <FontAwesomeIcon icon={faArrowRight} />{" "}
              </a>
            </div>
            <hr></hr>
            <div>
              <h5 className="py-4">
                <b>Manage Your Event</b>
              </h5>
              <p className="" style={{ fontSize: "16px" }}>
                Here you will find out details about the best service providers
                and their services according to your needs.Here you will find
                out details about the best service providers and their services
                according to your needs.
              </p>
            </div>
            <form>
              <div className="my-4">
                <div className="input-group my-3">
                  <label className="my-auto me-4" htmlFor="eventType">
                    Event Type
                  </label>
                  <select
                    className="form-select rounded"
                    style={{ maxWidth: "300px" }}
                    id="eventType"
                  >
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="input-group my-3">
                  <label htmlFor="pax" className="my-auto me-4">
                    Pax
                  </label>
                  <input
                    type="text"
                    className="form-control rounded"
                    id="pax"
                    style={{ maxWidth: "200px" }}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group my-3">
                  <label className="my-auto me-4" htmlFor="location">
                    Location
                  </label>
                  <select
                    className="form-select rounded me-4"
                    style={{ maxWidth: "200px" }}
                    id="location"
                  >
                    <option selected>Country</option>
                    <option value="1">USA</option>
                    <option value="2">Canada</option>
                    <option value="3">Australia</option>
                  </select>
                  <select
                    className="form-select rounded me-4"
                    style={{ maxWidth: "200px" }}
                  >
                    <option selected>Region</option>
                    <option value="1">USA</option>
                    <option value="2">Canada</option>
                    <option value="3">Australia</option>
                  </select>
                  <select
                    className="form-select rounded"
                    style={{ maxWidth: "200px" }}
                  >
                    <option selected>City</option>
                    <option value="1">USA</option>
                    <option value="2">Canada</option>
                    <option value="3">Australia</option>
                  </select>
                </div>
                <table className="my-5">
                  <thead>
                    <th>Service Category</th>
                    <th>Special Category</th>
                    <th>Services</th>
                    <th>List</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select
                          className="form-select rounded me-4"
                          style={{ maxWidth: "150px" }}
                          id=""
                        >
                          <option selected>Photography</option>
                          <option value="1">USA</option>
                          <option value="2">Canada</option>
                          <option value="3">Australia</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select rounded me-4"
                          style={{ maxWidth: "150px" }}
                          id=""
                        >
                          <option selected>Photography</option>
                          <option value="1">USA</option>
                          <option value="2">Canada</option>
                          <option value="3">Australia</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select rounded me-4"
                          style={{ maxWidth: "150px" }}
                          id=""
                        >
                          <option selected>Any</option>
                          <option value="1">USA</option>
                          <option value="2">Canada</option>
                          <option value="3">Australia</option>
                        </select>
                      </td>
                      <td className="">
                        <span>
                          Country <FontAwesomeIcon icon={faXmark} />
                        </span>
                        <span>
                          Country <FontAwesomeIcon icon={faXmark} />
                        </span>
                        <span>
                          Event Planning <FontAwesomeIcon icon={faXmark} />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select
                          className="form-select rounded me-4"
                          style={{ maxWidth: "150px" }}
                          id=""
                        >
                          <option selected>Photography</option>
                          <option value="1">USA</option>
                          <option value="2">Canada</option>
                          <option value="3">Australia</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select rounded me-4"
                          style={{ maxWidth: "150px" }}
                          id=""
                        >
                          <option selected>Photography</option>
                          <option value="1">USA</option>
                          <option value="2">Canada</option>
                          <option value="3">Australia</option>
                        </select>
                      </td>
                      <td>
                        <select
                          className="form-select rounded me-4"
                          style={{ maxWidth: "150px" }}
                          id=""
                        >
                          <option selected>Any</option>
                          <option value="1">USA</option>
                          <option value="2">Canada</option>
                          <option value="3">Australia</option>
                        </select>
                      </td>
                      <td className="">
                        <span>
                          Country <FontAwesomeIcon icon={faXmark} />
                        </span>
                        <span>
                          Country <FontAwesomeIcon icon={faXmark} />
                        </span>
                        <span>
                          Event Planning <FontAwesomeIcon icon={faXmark} />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn d-block my-5 bg-light px-4 py-2">
                  + Add Category
                </button>
                <button className="btn d-block my-5 bg-dark text-light px-4 py-2">
                  Advanced Options
                </button>
              </div>
            </form>
            <div className="text-center py-2 mt-4">
              <a
                href="/"
                className="d-inline-block text-light bg-secondary py-2 px-4 mb-2 rounded-pill text-decoration-none"
              >
                Search
              </a>
            </div>
            <hr></hr>
            <div>
              <h5 className="py-4">
                <b>Blog</b>
              </h5>
              <p className="" style={{ fontSize: "16px" }}>
                Here you will find out details about the best service providers
                and their services according to your needs.
              </p>
              <div className="my-5 d-flex flex-wrap justify-content-between">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
            <hr></hr>
            <div className="text-center py-2">
              <a
                href="/"
                className="d-inline-block text-light bg-secondary py-2 px-4 mb-2 rounded-pill text-decoration-none"
              >
                View More <FontAwesomeIcon icon={faArrowRight} />{" "}
              </a>
            </div>
          </div>
          <div className="col-3 py-3 mt-5">
            <div className="py-4 text-center">
              <img
                src={GlobeImage}
                style={{ maxWidth: "150px" }}
                height="auto"
                alt="globe"
              />
              <div className="my-3">
                <select
                  className="form-select rounded mx-auto"
                  style={{ maxWidth: "250px" }}
                  id="eventType"
                >
                  <option selected>Find your country</option>
                  <option value="1">Australia</option>
                  <option value="2">Canada</option>
                  <option value="3">USA</option>
                </select>
              </div>
            </div>
            <div className="py-4 text-center">
              <img
                src={SriLankaImage}
                style={{ maxWidth: "150px" }}
                height="auto"
                alt="sri lanka"
              />
              <div className="my-3">
                <select
                  className="form-select rounded mx-auto"
                  style={{ maxWidth: "250px" }}
                  id="eventType"
                >
                  <option selected>Find your location</option>
                  <option value="1">Australia</option>
                  <option value="2">Canada</option>
                  <option value="3">USA</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
