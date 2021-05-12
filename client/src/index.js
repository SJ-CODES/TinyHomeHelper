import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from "./components/AboutUs";
import TinyHomeChecklist from "./components/TinyHomeChecklist"
import PhotoGallery from "./components/PhotoGallery"
import App from './App'
import UploadForm from './components/UploadForm';
import CommunityForum from './Components/CommunityForum';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
            
          <Switch>
              <Route exact path="/" component={App}>
                  <Header/>
                  <Home/>
                  <Footer/>
                </Route>
                <Route exact path="/about-us"component={AboutUs} >
                  <Header/>
                  <AboutUs/>
                  <Footer/>
                </Route>
                <Route exact path="/TinyHomeChecklist" component= {TinyHomeChecklist}>
                  <Header/>
                </Route>
                <Route exact path ="/PhotoGallery" component= {PhotoGallery}>
                  <Header/>
                  <UploadForm />
                </Route>
                  <Route exact path="/community-forum">
                  <CommunityForum/>
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
