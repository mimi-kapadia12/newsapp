import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Snipper from "./Snipper";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt().toUpperCase() + string.slice(1);
  };

  const UpdateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?Country=${props.country}&category=${props.Category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.PageSize}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setArticles(json.articles);
        setLoading(false);
        setTotalResults(json.totalResults);
      });

    props.setProgress(100);
  };

  useEffect(() => {
    UpdateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?Country=${
      props.country
    }&category=${props.Category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.PageSize}`;
    setPage(page + 1);
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setArticles(articles.concat(json.articles));
        setLoading(false);
        setTotalResults(json.totalResults);
      });
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ marginTop: "80px", marginBottom: "30px" }}
      >
        {" "}
        NewsMonkey - Top {capitalizeFirstLetter(`${props.Category}`)} Headlines
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Snipper />}
      >
        <div className="container">
          <div className="row">
            {articles.map((e) => {
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
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
