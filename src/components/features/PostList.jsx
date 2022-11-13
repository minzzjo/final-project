import React from "react";
import styled from "styled-components";
import Content from "./Content";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <Content key={post.postId} post={post} />;
      })}
    </div>
  );
};

export default PostList;
