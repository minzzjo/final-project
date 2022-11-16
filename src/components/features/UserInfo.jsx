import React, { useEffect ,useState} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getMyPage } from "../../redux/modules/mypageSlice";

// 마이페이지 상단에 나타나는 회원정보
const UserInfo = () => {
  const dispatch = useDispatch();
  const [state1 , setState1] = useState(true);
  const mypage = useSelector((state) => state.mypage.myInfo);
  
  useEffect(() => {
    console.log("userInfo", mypage);
  }, [state1])
  
  

  return (
    <div>
      <button onClick={()=>{setState1(!state1)}}>아무거나 버튼</button>
      {/* <div>
        등록된 유저이미지가 없으면 기본 이미지를 보여주고, 유저이미지가 있으면 그걸로 보여준다
        {mypage[0].userImage !== undefined ? (
          <UserImg src={mypage[0].userImage} alt="profile" />
        ) : (
          <img src="../../img/user.png" alt="userImg" />
        )}
      </div>
      <div>
        <h2>{mypage[0].nickname}</h2>
        <UserRate>회원평점 : {mypage.rank}</UserRate>
      </div> */}
    </div>
  );
}

export default UserInfo;

const UserImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const UserRate = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px 0 20px 80px;
`;