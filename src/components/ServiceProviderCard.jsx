import React from "react";
import FashionImage from "../assets/img/fashion-photoshoot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const ServiceProviderCard = () => {
  return (
    <div>
      <div
        className="p-4 my-3 d-flex flex-column align-items-center text-center"
        style={{ maxWidth: "300px" }}
      >
        <img
          src={FashionImage}
          alt="fashion photoshoot"
          width="100px"
          height="auto"
          className=""
        />
        {/* Title of the card */}
        <h6 className="py-2" style={{ fontSize: "18px" }}>
          <b>Photography & Videography</b>
        </h6>
        <p style={{ fontSize: "16px" }}>
          The best place for the best talented Photographers
        </p>
        <div
          className="py-3 ms-auto text-secondary"
          style={{ fontSize: "14px" }}
        >
          <FontAwesomeIcon icon={faCalendarDays} />
          <p className="d-inline-block ms-2">150 Ads</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceProviderCard;
