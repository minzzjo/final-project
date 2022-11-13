import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Post from "../pages/Post";
import Chatroom from "../pages/Chatroom"
import MyPage from "../pages/MyPage";
import ProfileEdit from "../pages/ProfileEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 서버 연결 후 다시 수정해야 함 */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/posts" element={<Post />} />
        <Route path="/chat" element={<Chatroom />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/profileedit" element={<ProfileEdit/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
