import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, getPosts } from "../actions/postActions";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "./CSS/CreatePost.css";

function CreatePost({ currentId, setCurrentId }) {

  //setting the state for our posts to hold our data - this is the schema for mongo
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    body: "",
    tags: "",
    selectedFile: "",
  });

  //useSelector allows you to extract data from the Redux store state so here we're grabbing our data from the state
  const post = useSelector((state) =>
    currentId
      ? state.posts.posts.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const clear = () => {
    // setCurrentId(0);
    setPostData({ title: "", body: "", tags: "", selectedFile: "" });
  };

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);

  }, [post]);

  const handleSubmit = async (e) => {
    console.log(postData)
    e.preventDefault();

    // if (currentId === 0) {
    dispatch(createPost(postData));
    dispatch(getPosts());
    clear();
    
    // } else {
    //   dispatch(updatePost(currentId, postData));
    //   clear();
    // }
  };

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post?.title}"` : "Start a Discussion"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="body"
          variant="outlined"
          label="Body"
          fullWidth
          multiline
          rows={4}
          value={postData.body}
          onChange={(e) =>
            setPostData({ ...postData, body: e.target.value })
          }
        />
        {/* <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        /> */}
        {/* <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div> */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default CreatePost;