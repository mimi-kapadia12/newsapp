import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Snipper from "./Snipper";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalRecords: 0,
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    let url = `https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.Category}&apiKey=0c88232fcf8440a3be5b994e06fb07a0&page=1&pageSize=${this.props.PageSize}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          loading: false,
          page: 1,
          totalRecords: json.totalResults,
        });
      });
  }

  HandlePrevClick = async () => {
    this.setState({
      loading: true,
    });

    let url = `https://newsapi.org/v2/top-headlines?Country=${
      this.props.country
    }&category=${
      this.props.Category
    }&apiKey=0c88232fcf8440a3be5b994e06fb07a0&page=${
      this.state.page - 1
    }&pageSize=${this.props.PageSize}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          loading: false,
          page: this.state.page - 1,
        });
      });
  };

  HandleNextClick = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?Country=${
      this.props.country
    }&category=${
      this.props.Category
    }&apiKey=0c88232fcf8440a3be5b994e06fb07a0&page=${
      this.state.page + 1
    }&pageSize=${this.props.PageSize}`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          loading: false,
          page: this.state.page + 1,
        });
      });
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center"> NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Snipper className="" />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItem
                    title={e.title ? e.title : ""}
                    description={e.description ? e.description : ""}
                    url={e.urlToImage}
                    newsUrl={e.url}
                    date={e.publishedAt}
                    author={e.author}
                    source={e.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="Container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.HandlePrevClick}
          >
            {" "}
            &larr; Prev
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalRecords / this.props.PageSize)
            }
            className="btn btn-dark"
            onClick={this.HandleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
