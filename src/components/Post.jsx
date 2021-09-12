import React from "react";

const Post = ({ post }) => {
  return (
    <article className="post-excerpt">
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}</p>
    </article>
  );
};

export default Post;
