import React, { PureComponent } from "react";
import defaultImg from "./DefaultImage.png";
export class NewsItem extends PureComponent {
  render() {
    let { title, description, url, newsUrl, author, date, source } = this.props;
    //   let defaultImg = "C://Users//Mansi Kapadiya//Documents//React//newsapp//public//DefaultImage.png";
    return (
      <div
        className="card my-2"
        style={{
          maxWidth: "150%",
          height: "470px",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <span
          className="position-absolute badge bg-dark"
          style={{ right: "10px", top: "2%" }}
        >
          {source}
        </span>
        <img
          src={!url ? defaultImg : url}
          className="card-img-top"
          alt="..."
          style={{ height: "180px", width: "100%" }}
        />
        <div className="card-body">
          <div style={{ height: "220px" }}>
            <h5 className="card-title" style={{ width: "100%" }}>
              {title}
            </h5>
            <p className="card-text" style={{ width: "100%" }}>
              {!description ? "" : description.slice(0, 100)}
            </p>
            <p className="card-text" style={{ width: "100%" }}>
              by {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </p>
          </div>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            style={{ float: "right", top: "1%" }}
            className="btn btn-sm btn-dark"
          >
            Read More...
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
