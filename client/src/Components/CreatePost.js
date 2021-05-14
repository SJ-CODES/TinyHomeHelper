import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
// import FileBase from 'react-file-base64';
import { createPost, updatePost } from "../actions/postActions";
import { useHistory } from "react-router-dom";

//still need to add styling, but want to see how this looks in react first
//where are these props coming from??

function CreatePost({ currentId, setCurrentId }) {

  //setting the state for our posts to hold our data - this is the schema for mongo
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
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
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
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
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
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

// function CreatePost() {
//   const [input, setInput] = useState("");
//   const [imageURL, setImageURL] = useState("");

//   const handleSubmit = (event) => {
//     //this prevents the page from refreshing
//     event.preventDefault();

//     //put data in the database here

//     setInput("");
//     setImageURL("");
//   };

//   return (
//     <div className="createPost">
//       <div className="createPost__top">
//         <Avatar />
//         <form>
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             type="text"
//             placeholder="What's on your mind?"
//           />
//           <input
//             value={imageURL}
//             onChange={(e) => setImageURL(e.target.value)}
//             type="text"
//             placeholder="Image URL (Optional)"
//           />
//           <button onClick={handleSubmit} type="submit">
//             Enter
//           </button>
//         </form>
//       </div>

//       <div className="createPost__bottom"></div>
//     </div>
//   );
// }

// export default CreatePost;
