import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes >
            <Route path="/" element = {<News PageSize = {6} Country = "in" Category = "general" key="general"/>}/>
            <Route exact path="/entertainment" element = {<News PageSize = {6} Country = "in" Category = "entertainment" key="entertainment"/>}/>
            <Route exact path="/general" element = {<News PageSize = {6} Country = "in" Category = "general" key="general"/>}/>
            <Route exact path="/health" element = {<News PageSize = {6} Country = "in" Category = "health" key="health"/>}/>
            <Route exact path="/science" element = {<News PageSize = {6} Country = "in" Category = "science" key="science"/>}/>
            <Route exact path="/technology" element = {<News PageSize = {6} Country = "in" Category = "technology" key="technology"/>}/>
            <Route exact path="/sports" element = {<News PageSize = {6} Country = "in" Category = "sports" key="sports"/>}/>
            <Route exact path="/business" element = {<News PageSize = {6} Country = "in" Category = "business" key="business"/>}/>
          </Routes>
          </Router>
      </div>
    )
  }
}

export default App