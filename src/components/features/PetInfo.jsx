import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __getMyPet } from "../../redux/modules/mypageSlice";

// 마이페이지 반려동물 정보 - 최대 3마리까지 가능함 (여기는 기본 정보 컨텐츠만)

const Profile = ({ myPet }) => {
  // 여기에 있는 마이페이지 프로필에 담기는 정보들을 props로 다른 컴포넌트에 전달한다. (자식이 부모한테)
  // 받는(다른) 컴포넌트에서는 import해서 사용한다.

  console.log("myPet", myPet);
  const dispatch = useDispatch();

  // GET으로 리스트에 붙일 마이페이지 정보들을 받아와서 브라우저에 뿌려준다.
  useEffect(() => {
    dispatch(__getMyPet());
  }, [dispatch]);

  return (
    <div>
      <PetInfo className="pet-info">
        <div>
          <h3>{myPet.category}</h3>
          <span>{myPet.name}</span>
        </div>

        <div>
          <span> {myPet.age}</span>
        </div>
      </PetInfo>
    </div>
  );
};

export default Profile;

const PetInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
