import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __deleteMyPet, __getMyPage, __getMyPet, __getMyPost } from "../redux/modules/mypageSlice";
import UserInfo from "../components/features/UserInfo";
import MyPosts from "../components/features/MyPosts";
import PetInfo from "../components/features/PetInfo";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

// 전체 마이페이지 뷰
const MyPage = () => {
  const mypage = useSelector((state) => state.mypage.myInfo);
  const myPet = useSelector((state) => state.mypage.myPet)
  console.log("마이페이지 정보", mypage);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 반려동물 정보 삭제
  const onDeletePetInfo = () => {
    dispatch(__deleteMyPet(myPet.petId))
    window.confirm("정말로 삭제하시겠습니까?")
    navigate("/mypage")
  }

  useEffect(() => {
    dispatch(__getMyPost());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getMyPet());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getMyPage());
  }, [dispatch]);


  return (
    <Layouts>
      <Header />
      <div>
        여기는 마이페이지
      </div>
      <div className="user-info">
        <UserInfo mypage={mypage} />
        <button>프로필 사진</button>
      </div>

      <div>
        <hr />
        <button>내가 쓴 글</button>
        <button>반려동물 정보</button>
        <hr />
      </div>

      {/* 내가 쓴 게시글 여러개 붙이기 */}
      <MyPosts post={mypage} />

      {/* 반려동물 정보 여러개 붙이기 */}
      {myPet !== undefined &&
        myPet.map((pet) => {
            <PetInfo key={pet.petId} myPet={pet} />;
        })}
      <div>
        <button>수정</button>
        <button onClick={onDeletePetInfo}>삭제</button>
      </div>
      <Footer />
    </Layouts>
  );
};

export default MyPage;

const Layouts = styled.div`
  width: 95%;
  max-width: 414px;
  height: 785px;
  margin: auto;
  /* background-color: lightpink; */
`;