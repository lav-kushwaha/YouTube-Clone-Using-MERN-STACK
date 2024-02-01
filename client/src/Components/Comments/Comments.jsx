import React, { useCallback, useState } from "react";
import "./Comments.css";

const Comments = () => {
  const[commentText,setCommentText] = useState("");
  const handleOnSubmit = (e) =>{
     e.preventDefault();
  }
  return (
    <>
      <form className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={e=>setCommentText(e.target.value)}
          placeholder="add comment..."
          className="comment_ibox"
        />
        <input type="submit" value="add" className="comment_add_btn_comments" />
      </form>
      <div className="display_comment_container">
        
      </div>
    </>
  );
};

export default Comments;
