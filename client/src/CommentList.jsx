import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentList = ({ postID }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(
        `http://localhost:4001/posts/${postID}/comments`
      );
      setComments(res.data);
      console.log("hello");
    };
    fetchComments();
  }, [postID]);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.comment}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
