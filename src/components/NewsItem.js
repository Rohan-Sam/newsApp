import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className="card text-bg-light border-dark h-100 p-2">
        <img
          src={
            !imgUrl
              ? "https://png.pngtree.com/element_our/sm/20180516/sm_5afc4cd0dcaca.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div
          className="card-body d-flex flex-column"
          style={{ backgroundColor: "#fbf8ee" }}
        >
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text align-self-start">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author}
              <br />
              Last updated {date.slice(0, 10)}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark align-self-start rounded-pill"
            style={{ marginTop: "auto", backgroundColor: "#BBAB8C" }}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
