import React from "react";
import defaultImg from "./DefaultImage.png";
const NewsItem = (props) => {
  let { title, description, url, newsUrl, author, date, source } = props;
  return (
    <div
      className="card my-2"
      style={{
        maxWidth: "150%",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <span
        className="position-absolute badge bg-dark"
        style={{ left: "10px", top: "2%" }}
      >
        {source}
      </span>
      <img
        src={!url ? defaultImg : url}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", height: "180px" }}
      />
      <div className="card-body">
        <div>
          <h5 className="card-title" style={{ width: "100%" }}>
            {title}
          </h5>
          <p className="card-text" style={{ width: "100%" }}>
            {!description ? "" : description.slice(0, 100)}
          </p>
          <p className="card-text" style={{ width: "100%" }}>
            by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
          </p>
        </div>
        <a
          href={newsUrl}
          target="_blank"
          rel="noreferrer"
          style={{ float: "left" }}
          className="btn btn-sm btn-dark mt-3"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
