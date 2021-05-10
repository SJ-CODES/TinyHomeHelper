import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from "./Components/AboutUs";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header/>
            <Home/>
          <Footer/>
        </Route>
        <Route exact path="/about-us">
          <Header/>
          <AboutUs/>
          <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
