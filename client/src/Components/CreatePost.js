import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./CSS/CreatePost.css";
// import axios from "axios";

function CreatePost() {
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (event) => {
    //this prevents the page from refreshing
    event.preventDefault();

    //put data in the database here

    setInput("");
    setImageURL("");
  };

  return (
    <div className="createPost">
      <div className="createPost__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What's on your mind?"
          />
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Enter
          </button>
        </form>
      </div>

      <div className="createPost__bottom"></div>
    </div>
  );
}

export default CreatePost;
