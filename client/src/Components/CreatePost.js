import React from 'react';
import { Avatar } from '@material-ui/core';
import "../CreatePost.css";

function CreatePost() {

    const handleSubmit = (event) => {
        //this prevents the page from refreshing
        event.preventDefault();
    }

    return (
        <div className="createPost">
            <div className="createPost__top">
                <Avatar/>
                <form>
                    <input type="text" placeholder="What's on your mind?"/>
                    <input type="text" placeholder="image URL (optional)"/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>

            <div className="createPost__bottom">
                
            </div>
        </div>
    )
}

export default CreatePost
