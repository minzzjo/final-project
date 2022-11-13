import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 게시글 1개에 들어가는 내용 작성
const Content = () => {
  const posts = useSelector((state) => state.post.post);
  const navigate = useNavigate();

  return (
    <div key={posts.postId}>
      <div className="writer-info">
        <span>{posts.nickname}</span>
        <span>
          {posts.name}/{posts.age}/{posts.category}
        </span>
      </div>

      <div className="multi-img">
        <div></div>
      </div>

      <div className="content-body">
        <span>{posts.title}</span>
        <span>{posts.content}</span>
      </div>

      <button
        onClick={() => {
          navigate("/chat");
        }}
      >
        작성자와 1:1 채팅 바로가기
      </button>
    </div>
  );
};

export default Content;
