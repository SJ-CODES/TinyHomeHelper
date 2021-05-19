import React from "react";
import { Link } from "react-router-dom";
import "./CSS/ForumHeader.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import { Avatar } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { search } from '../actions/postActions';

function ForumHeader({ search, value }) {

    const filteredPosts = useSelector(state => state.posts)
    const dispatch = useDispatch()

  return (
    <div className="forumHeader">
      <div className="header__left">
        <Link to="/">
        <h1><HomeIcon fontSize="large" />YourTinyHomeHelper</h1>
        </Link>
        <div className="header__center">
        <div className="header__input">
          <input type="text" placeholder="Search" onChange={(e) => search(e.target.value)} value={value}></input>
            <SearchIcon/>
            <button onClick={() => dispatch(search(value))}/>
            {/* <SearchIcon onclick={searchPost} /> */}
        </div>

          <div className="header__option">
            <a href="/photoGallery">
              {/* <PhotoLibraryIcon fontSize="large" /> */}
            </a>
          </div>
          
        </div>
        <div className="header__right">
        <Link>
              <button>
                <h3>Login</h3>
              </button>
            </Link>

            <Link>
              <button>
                <h3>Sign Up</h3>
              </button>
            </Link>

          <div className="header__links">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumHeader;
