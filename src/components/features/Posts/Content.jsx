import React, { useState } from "react";
import styled from "styled-components";
import "../../../FullHTML.css";
import { useDispatch, useSelector } from "react-redux";
import {
  __getPostTime,
  __getKeyword,
  __getCategory,
} from "../../../redux/modules/postSlice";
import PostList from "../Posts/PostList";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import { ReactComponent as SearchIcon } from "../../../img/search.svg";
import All from "../../../img/all.png";

// 검색
const Content = () => {
  const posts = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  //검색
  const [getSearch, setGetSearch] = useState({ search: "" });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setGetSearch({ ...getSearch, [name]: value });
  };

  //키워드검색 #제목 #내용 #지역
  const onClickSearch = () => {
    if (getSearch.search.trim() === "") {
      return alert("내용을 입력해주세요.");
    }
    dispatch(__getKeyword(getSearch.search));
  };

  const onClickAll = () => {
    //전체검색
    dispatch(__getPostTime());
  };

  const onClickBig = () => {
    //대형검색
    const data = posts.response.filter((item) => item.category === "대형");
    dispatch(__getCategory(data));
  };

  return (
    <Layout>
      <Header />
      <Search className="검색">
        <input
          type="text"
          name="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        />

        <div onClick={onClickSearch}>
          <SearchIcon />
        </div>
      </Search>

      <MenuBtn>
        <Category type="button" onClick={onClickAll}>
          전체
        </Category>
        <Category type="button" name="대형" onClick={onClickBig}>
          대형
        </Category>
        <Category type="button" name="중형" onClick={onClickBig}>
          중형
        </Category>
        <Category type="button" name="소형" onClick={onClickBig}>
          소형
        </Category>
      </MenuBtn>
      <ImgAll src={All} alt="all" />
      <PostList posts={posts} key={posts.postId} />
      <Footer />
    </Layout>
  );
};

export default Content;

const Layout = styled.div`
  /* background-color: #ED9071; */
  max-width: 360px;
  height: 239px;
`;

const Search = styled.div`
  width: 319.93px;
  height: 24.99px;
  border: 1px solid black;
  border-radius: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 14px auto 15px;

  input {
    width: 230px;
    border: none;
    background-color: transparent;
    margin-right: 10px;
  }
`;

const MenuBtn = styled.div`
  width: 319.9px;
  height: 30px;
  margin: 0 20px;
`;

const Category = styled.button`
  box-sizing: border-box;

  width: 79.9px;
  height: 30px;

  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 16.71px;

  background: #ed9071;
  border-radius: 15px;
  border: none;
  position: relative;
  z-index: 100;
`;

const ImgAll = styled.img`
  z-index: 0;
  margin-top: -15px;
  width: 360px;
`;
