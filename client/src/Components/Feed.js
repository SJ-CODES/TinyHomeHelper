import React, { useState, useEffect } from "react";
import "./CSS/Feed.css";
import CreatePost from "./CreatePost";
import Post from "./Post";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPosts } from "../actions/postActions"

function Feed() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


//   const [posts, getPosts] = useState([]);
//   const getAllPosts = () => {
//     axios
//       .get(`${url}posts`)
//       .then((response) => {
//         const allPosts = response.data.posts.allPosts;
//         //add our data to the state
//         getPosts(allPosts);
//       })
//       .catch((error) => console.error(`Error: ${error}`));
//   };

  return (
    //map through posts
    <div className="feed">
      <CreatePost />
      <Post />
    </div>
  );
}

export default Feed;
