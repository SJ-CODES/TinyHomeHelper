import React, {useState, useEffect} from "react";
import "./CSS/Feed.css";
import CreatePost from "./CreatePost";
import Post from "./Post";
import axios from "axios";

function Feed() {
  useEffect(() => {
    getAllPosts();
  }, []);

  const [posts, getPosts] = useState([]);

  //what is the url for our mongo db??
  const url = "";

  const getAllPosts = () => {
    axios
      .get(`${url}posts`)
      .then((response) => {
        const allPosts = response.data.posts.allPosts;
        //add our data to the state
        getPosts(allPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
      //map through posts
    <div className="feed">
      <CreatePost />
      <Post />
    </div>
  );
}

export default Feed;
