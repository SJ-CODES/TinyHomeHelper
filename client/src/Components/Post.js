import React from "react";
import "./CSS/Post.css";
import { Avatar, Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPost, likePost, deletePost } from '../actions/postActions';
import DeleteIcon from '@material-ui/icons/Delete';
import postsReducer from '../reducers/postsReducer';

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const postTrial = useSelector(state => state.posts)
  console.log(postTrial)
  //map through

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
    <div className="post">
      <div className="post__top">
        {/* <Avatar src={} className="post__avatar" /> */}
        <div className="post__topInfo">
          <h2>{postTrial.tags}</h2>
          {/* <h3>{post.user}</h3> */}
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>
      <div className="post__bottom">
        {/* <p>{post.message.split(' ').splice(0, 20).join(' ')}...</p> */}
        <p>Post Body</p>
      </div>
      <div className="post__options">
          <div className="post__option">
            <ThumbUpIcon disabled={!user?.result} onClick={() => dispatch(likePost(post._id))} />
            <Likes />
          </div>
          <div className="post__option">
            <ChatBubbleOutlineIcon />
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
  )
}

export default Post;
