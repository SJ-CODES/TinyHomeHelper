import React, { useState, useEffect } from "react";
import "./CSS/Feed.css";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions"

function Feed() {
//   const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const allPosts = useSelector(state => state.posts)
  console.log(allPosts)

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    //map through posts
    <div className="feed">
      <CreatePost />
      {allPosts.map(post => <Post key={post?._id} post={post}/>)}
    </div>
  );
}

export default Feed;
