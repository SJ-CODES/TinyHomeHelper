import React from "react";
import "./CSS/Post.css"
import { Avatar, Button, Paper } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPost, likePost, deletePost } from '../actions/postActions';
import DeleteIcon from '@material-ui/icons/Delete';

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openPost = (e) => {
    dispatch(getPost(post._id, history));
    // history.push(`/posts/${post._id}`);
    console.log(post)
  };
    return (
      <Paper>
      <div className="post">
      <div className="post__top">
        {/* <Avatar src={} className="post__avatar" /> */}
        <div className="post__topInfo">
          <h2>{post?.title}</h2>
          {/* <h3>{post?.user}</h3> */}
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>
      <div className="post__bottom">
        <p>{post?.body}</p>
      </div>
      {/* <div className="post__image">
        <img src={image} alt="" />
      </div> */}
      <div className="post__options">
          <div className="post__option">
          <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}/>
            <Likes />
          </div>
          <div className="post__option">
            <ChatBubbleOutlineIcon />
            {/* so far we don't have comments enabled */}
            <p>Comment</p>
          </div>
          <div className="post__option">
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
              <DeleteIcon fontSize="small" /> &nbsp; Delete
            </Button>
            )}
          </div>
        </div>
    </div>
    </Paper>
    )
}

export default Post;