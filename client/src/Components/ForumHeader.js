import React from "react";
import { Link } from "react-router-dom";
import "../ForumHeader.css";
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { Avatar } from '@material-ui/core';

function ForumHeader() {
  return (
    <div className="forumHeader">
      <div className="header__left">
        <Link to="/">
          <h1>Tiny Homes</h1>
        </Link>
        <div className="header__input">
            <SearchIcon />
            <input type="text" placeholder="Search">

            </input>
      </div>

      <div className="header__center">
        <div className="header__option">
            <HomeIcon fontSize="large"/>
        </div>
        
        <div className="header__option">
            <PhotoLibraryIcon fontSize="large"/>
        </div>

        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar fontSize="large"/>
                <h4>Username</h4>
            </div>
            <div className="header__links">
                <Link>
                    <h3>Login</h3>
                </Link>
                <Link>
                    <h3>Sign Up</h3>
                </Link>
            </div>
        </div>


      </div>
    </div>
  );
}

export default ForumHeader;
