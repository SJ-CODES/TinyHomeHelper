import React from "react";
import ForumHeader from "./ForumHeader";
import ForumSidebar from "./ForumSidebar";
import Feed from "./Feed";
import "./CSS/CommunityForum.css"

function CommunityForum() {
  return (
    <div className="communityForum">
      <div>
        <h1 className="forumTitle">Welcome to the Community Forum!</h1>
        <h4 className="forumTitle"><i>
          Sign in to ask a question or share your favorite tiny house obsession</i>
        </h4>
      </div>

      <div className="communityForum__body">
        <Feed />
      </div>
    </div>
  );
}

export default CommunityForum;