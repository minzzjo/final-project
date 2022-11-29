import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  __getPostTime,
  __getKeyword,
  __getCategory,
} from "../../redux/modules/postSlice";
import styled from "styled-components";
import "../../App.css";
import Carousel from "react-bootstrap/Carousel";

const Content = () => {
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

  const appKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickSearch();
    }
  };

  const onClickAll = () => {
    //전체검색
    dispatch(__getPostTime()); //문제 온클릭했을때 셋이되기전에 겟을 먼저한다
  };
  const onClickBig = () => {
    dispatch(__getCategory("대형"));
  };
  const onClickMiddle = () => {
    dispatch(__getCategory("중형"));
  };
  const onClickSmall = () => {
    dispatch(__getCategory("소형"));
  };

  return (
    <SearchListWrap>
      <InputBox>
        <Input
          onKeyPress={appKeyPress}
          type="text"
          name="search"
          defaultValue={getSearch.search || ""}
          onChange={onChangeHandler}
        />
        <Img
          onKeyPress={appKeyPress}
          onClick={onClickSearch}
          src={require("../../img/search.png")}
        />
      </InputBox>
      <Buttongroup>
        <Button type="button" onClick={onClickAll}>
          전체
        </Button>
        <Button type="button" name="대형" onClick={onClickBig}>
          대형
        </Button>
        <Button type="button" name="중형" onClick={onClickMiddle}>
          중형
        </Button>
        <Button type="button" name="소형" onClick={onClickSmall}>
          소형
        </Button>
      </Buttongroup>
      <Carouselwrap>
        <Carousel>
          <Carousel.Item>
            <SlideImg src={require("../../img/all.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../img/big.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../img/middle.png")} />
          </Carousel.Item>
          <Carousel.Item>
            <SlideImg src={require("../../img/small.png")} />
          </Carousel.Item>
        </Carousel>
      </Carouselwrap>
    </SearchListWrap>
  );
};

export default Content;

const SearchListWrap = styled.div`
  background-color: blue;
  position: relative;
  height: 172px;
`;
const Buttongroup = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 51px;
  z-index: 1;
  margin-left: 12px;
`;
const Button = styled.button`
  width: 79.9px;
  height: 26px;
  border: none;
  background-color: #ddd;
  border-radius: 15px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.71px;
  :hover {
    background-color: #ed9071;
    color: #fff;
  }
`;
const Carouselwrap = styled.div``;
const Input = styled.input`
  position: relative;
  border: none;
  outline: none;
  border: 1px solid #666;
  border-radius: 30px;
  width: 95%;
  min-width: 340px;
  height: 36px;
  text-indent: 12px;
  margin-left: 10px;
`;

const InputBox = styled.div`
  position: relative;
  align-items: center;
  margin-bottom: 40px;
`;
const Img = styled.img`
  position: absolute;
  top: 8px;
  right: 30px;
  width: 20px;
`;
const SlideImg = styled.img`
  object-fit: cover;
  width: 360px;
  height: 140px;
`;
