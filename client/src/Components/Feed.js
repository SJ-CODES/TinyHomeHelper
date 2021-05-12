import React from 'react'
import "./CSS/Feed.css";
import CreatePost from "./CreatePost"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
