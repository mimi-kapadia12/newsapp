import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Snipper from "./Snipper";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalRecords: 0,
    };
    document.title =
      this.capitalizeFirstLetter(`${this.props.Category}`) + " - NewsMonkey";
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt().toUpperCase() + string.slice(1);
  };

  UpdateNews = async () => {
console.log(this.props.apiKey)
    this.props.setProgress(10);
    this.setState({
      loading: true
    });
    const url = `https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.Category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: json.articles,
          loading: false,
          totalRecords: json.totalResults
        });
      });

    this.props.setProgress(100)
  };

  async componentDidMount() {
    this.UpdateNews();
  }

  fetchMoreData = async () => {
    this.props.setProgress(10);
    this.state.page +=this.state.page
    const url = `https://newsapi.org/v2/top-headlines?Country=${this.props.country}&category=${this.props.Category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.PageSize}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles: this.state.articles.concat(json.articles),
          loading: false,
          totalRecords: json.totalResults,          
        });
      });
      this.props.setProgress(100);
  };
  
  render() {
    return (
      <>
        <h2 className="text-center">
          {" "}
          NewsMonkey - Top{" "}
          {this.capitalizeFirstLetter(`${this.props.Category}`)} Headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalRecords}
          loader={<Snipper />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((e) => {
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
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
