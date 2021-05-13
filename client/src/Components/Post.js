import React, {useState, useEffect} from "react";
import "./CSS/Post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';

//here we need to map through our database that has all of ours posts

function Post({ userPic, image, username, timestamp, message }) {

  const dispatch = useDispatch();

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={userPic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
