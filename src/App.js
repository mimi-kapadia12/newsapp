import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />

          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="general"
                  key="general"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="general"
                  key="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="health"
                  key="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="science"
                  key="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="technology"
                  key="technology"
                />
              }
            />
            <Route
              exactPageSize={6}
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="sports"
                  key="sports"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  PageSize={6}
                  Country="in"
                  Category="business"
                  key="business"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
