import './Components/CSS/App.css';
import React, {Component} from 'react'
import TinyHomeChecklist from './Components/TinyHomeChecklist'
import UploadForm from './Components/UploadForm';
import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from "./Components/AboutUs";
// import TinyHomeChecklist from "./Components/TinyHomeChecklist"
import PhotoGallery from "./Components/PhotoGallery"
// import UploadForm from './Components/UploadForm';
import CommunityForum from './Components/CommunityForum';

function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter> 
          <Switch>
              <Route exact path="/" component={App}>
                  <Header/>
                  <Home/>
                  <Footer/>
                </Route>
                <Route exact path="/about-us" component={AboutUs}>
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

    </div>
  );
}

export default App;
