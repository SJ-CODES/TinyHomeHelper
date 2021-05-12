import React from 'react';
import "bootswatch/dist/minty/bootstrap.min.css";
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import TinyHomeChecklist from './components/TinyHomeChecklist'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from "./Components/AboutUs";
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from "./components/AboutUs";
import TinyHomeChecklist from "./components/TinyHomeChecklist"
import PhotoGallery from "./components/PhotoGallery"
import App from './App'
import UploadForm from './components/UploadForm';
>>>>>>> 6fa0864d5edfbf0e95c66b0a8ed565bb9c3c77ff
import CommunityForum from './Components/CommunityForum';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
          <Route exact path='/TinyHomeChecklist' component= {TinyHomeChecklist}/>
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
        <Route exact path="/community-forum">
          <CommunityForum/>
          <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>
=======
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

>>>>>>> 6fa0864d5edfbf0e95c66b0a8ed565bb9c3c77ff
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
