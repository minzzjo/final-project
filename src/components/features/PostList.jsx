import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { __getConimal } from"../../redux/modules/postSlice"

const PostList = () => {
  // const navigator = useNavigate();
  const dispatch = useDispatch()
  const mainList  = useSelector((state) => state.conimalList.postList)
  // console.log("셀렉",mainList);
  useEffect(() => {
    dispatch(
      __getConimal()
    );
  }, []);
  
  return (
      <>
        {mainList.map((post) =>  {
            // if (post.length !== 0)
            <div onClick={()=>{navigator(`/Detail/${post.postid}`)}} key={post.id} >
              <ul>
                <li>{post.title}</li>
                <li>{post.price}</li>
                <li>{post.category}</li>
                <li>{post.content}</li>
              </ul>
            </div>
        })}
      </>
  )
}

export default PostList ;

