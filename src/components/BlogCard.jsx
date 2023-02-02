import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BlogImage from "../assets/img/blog-image-01.png";
import { faThumbsUp, faShare, faEye } from "@fortawesome/free-solid-svg-icons";

const BlogCard = () => {
  return (
    <div>
      <div className="my-4">
        <div
          className="mb-2 d-flex justify-content-between"
          style={{ fontSize: "13px" }}
        >
          <p>Entertainment</p>
          <p>12 May 2022</p>
        </div>
        <img
          src={BlogImage}
          alt="blog post"
          width="100%"
          height="auto"
          style={{ maxWidth: "250px" }}
        />
        <div
          className="d-flex justify-content-between mt-2"
          style={{ fontSize: "13px" }}
        >
          <span>
            45
            <FontAwesomeIcon className="ms-2" icon={faThumbsUp} />
          </span>
          <span>
            15
            <FontAwesomeIcon className="ms-2" icon={faShare} />
          </span>
          <span>
            <FontAwesomeIcon className="me-2" icon={faEye} />
            15 views
          </span>
        </div>
        <p className="mt-3" style={{ maxWidth: "250px" }}>
          How to properly plan your music event?
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
