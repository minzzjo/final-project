import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPost } from "../../redux/modules/mypageSlice";

// 내가 쓴 게시글 1개
const MyPosts = ({ post }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(__getMyPost());
  // }, [dispatch]);
  console.log("post", post);
  return (
    <>
      {post.length > 0 &&
        post.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div>
                  <h3>{item.state}</h3>
                  <span>{item.title}</span>
                </div>
                <span>{item.date}</span>
              </div>

              <span>{item.createdAt}</span>
            </div>
          );
        })
      }
    </>
    
  );
}

export default MyPosts;