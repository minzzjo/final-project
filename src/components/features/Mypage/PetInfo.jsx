import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteMyPet, __getMyPet } from "../../../redux/modules/mypageSlice";
import { ReactComponent as Edit } from "../../../img/edit.svg";
import { ReactComponent as Delete } from "../../../img/delete.svg";
import ModalPortal from "../../element/ModalPortal";
import EditPetInfo from "../Mypage/EditPetInfo"
import "../../element/MyModal.css";
// 마이페이지 반려동물 정보 - 최대 3마리까지 가능함 (여기는 기본 정보 컨텐츠만)

const PetInfo = ({ myPets }) => {
  const dispatch = useDispatch();

  console.log("형태가 뭐야 대체", myPets);
  console.log("길이가 나오나", myPets.length);

  // 나의 반려동물 삭제
  const onDeleteMyPet = (id) => {
    dispatch(__deleteMyPet(id));
    window.alert("반려동물 정보를 삭제하시겠습니까?");
    window.location.reload();
  };

  const [edit, setEdit] = useState(false);

  const openEditModal = () => {
    setEdit(true);
  };

  const closeEditModal = () => {
    setEdit(false);
  };

  // 반려동물 정보 조회
  useEffect(() => {
    dispatch(__getMyPet());
  }, []);

  return (
    <>
      <Layout>
        {myPets !== undefined &&
          myPets.map((pet) => {
            if (pet.length !== 0) {
              return (
                <Content key={pet.id}>
                  <Info>
                    <Category>{pet.category}</Category>
                    {/* <Category>
                      
                    </Category> */}
                    <Text>
                      <Main>
                        <Name>{pet.name}</Name>
                      </Main>
                      <Down>
                        <Age> {pet.age}살</Age>
                      </Down>
                    </Text>
                  </Info>
                  <Icon>
                    {/* 여기서 수정하기 버튼을 누르면 "EditPetInfo.jsx"로 이동해야 한다 */}
                    <Edit
                      onClick={openEditModal}
                      style={{ cursor: "pointer" }}
                    />
                    {edit && (
                      <ModalPortal>
                        <div className="MyModal">
                          <EditPetInfo onClose={closeEditModal} />
                        </div>                        
                      </ModalPortal>
                    )}
                    <Delete
                      onClick={() => onDeleteMyPet(pet.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </Icon>
                </Content>
              );
            } else {
              return null;
            }
          })}
      </Layout>
    </>
  );
};

export default PetInfo;

const Layout = styled.div`
  min-height: 225px;
  max-height: 226px;
  overflow-x: hidden;
  overflow-y: auto;
  /* 스크롤바 영역에 대한 설정 */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바 막대에 대한 설정 */
  ::-webkit-scrollbar-thumb {
    height: 20%;
    background-color: #d8d8d8;
    border-radius: 20px;
  }

  /* 스크롤바 뒷 배경에 대한 설정 */
  ::-webkit-scrollbar-track {
    background-color: #f6f0ee;
  }
`;
const Content = styled.div`
  width: 355px;
  height: 66px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  margin: 9px auto 1.59px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  padding: 17.39px 27.14px 14.68px 19.14px;
  display: flex;
  flex-direction: row;
  gap: 33.72px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const Category = styled.span`
  color: #ed9071;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  font-weight: 510;
  line-height: 16.71px;
  margin-right: 23.2px;
  padding-top: 8px;
`;

const Name = styled.span`
  width: 130px;
  height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.71px;
`;

const Down = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 129.49px;
  height: 12.01px;
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 10px;
  color: "#B0B0B0";
  margin-top: 8.32px;
  gap: 18.84px;
`;

const Age = styled.span`
  color: rgba(176, 176, 176, 1);
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-size: 10px;
  line-height: 11.93px;
  margin-top: -4px;
`;

const Icon = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
