# Cmung : 크멍 - 반려동물 케어 서비스 플랫폼
![]()  <br/>
## 🐶 프로젝트 소개 🐱
![]()
<details>
<summary>WireFrame</summary>
<div markdown="1">       

![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2d485701-a5c3-4775-b17e-07a3b8a566f6%2FGroup_92.png?table=block&id=a6aba688-5b29-47e9-9d6d-954ef0fc1852&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F93ab93fa-37c4-4188-9b03-55802f6abc18%2FGroup_90.png?table=block&id=99b0ad57-1ee1-4eab-b0cc-9141633c9fde&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F11f344b6-a6b1-490c-aef4-f634359eb7f0%2FGroup_91.png?table=block&id=a7ace84b-6c82-44e7-8c3e-d0f4cfbe7467&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe02a8647-9457-4e84-940d-d00b63f2092f%2FGroup_89.png?table=block&id=b88ad5f7-1c2d-4f28-8744-06abccb5226e&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F82c1317d-8978-426f-8339-ef1c26454f56%2FGroup_88.png?table=block&id=524fb72a-d5e2-48f2-9459-4f7521e4dd04&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)
![](https://auberosee.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd54203b8-7927-4887-991c-3252277dbe31%2FGroup_87.png?table=block&id=0ade5b5a-2c5c-4299-a5e9-42996e78eb02&spaceId=5c714921-48ac-4f28-adf7-bc2ef118cfb6&width=2000&userId=&cache=v2)

</div>
</details>

![]()
<details>
<summary>Project Tree</summary>
<div markdown="1">

![](
  ```
final-project
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ db.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ components
│  │  ├─ element
│  │  │  ├─ Button.jsx
│  │  │  ├─ Grid.js
│  │  │  ├─ Image.jsx
│  │  │  ├─ infinityScroll.js
│  │  │  ├─ input.jsx
│  │  │  ├─ ValidBtnInput.jsx
│  │  │  └─ ValidInput.jsx
│  │  ├─ features
│  │  │  ├─ AddPetInfo.jsx
│  │  │  ├─ AddUserPic.jsx
│  │  │  ├─ Content.jsx
│  │  │  ├─ EditDetail.jsx
│  │  │  ├─ EditPetInfo.jsx
│  │  │  ├─ Form.jsx
│  │  │  ├─ KakaoLogin.js
│  │  │  ├─ MyContent.jsx
│  │  │  ├─ mypageTab.jsx
│  │  │  ├─ NaverLogin.js
│  │  │  ├─ OAuth2RedirectHandler.js
│  │  │  ├─ PetInfo.jsx
│  │  │  ├─ PostList.jsx
│  │  │  ├─ SearchList.jsx
│  │  │  └─ UserInfo.jsx
│  │  ├─ hooks
│  │  │  ├─ useImgUpload.jsx
│  │  │  └─ useInput.jsx
│  │  ├─ Layout
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Layout.jsx
│  │  └─ modal
│  │     ├─ modal.js
│  │     ├─ modalApply.js
│  │     ├─ modalContainer.js
│  │     └─ useModal.js
│  ├─ img
│  │  ├─ account_circle.svg
│  │  ├─ add-user.png
│  │  ├─ arrow_back.svg
│  │  ├─ chat.svg
│  │  ├─ edit_square.svg
│  │  ├─ home.svg
│  │  ├─ logout.svg
│  │  ├─ online.png
│  │  ├─ pets.png
│  │  ├─ photoIMG.png
│  │  └─ user.png
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ pages
│  │  ├─ chatting
│  │  │  ├─ ChatCard.jsx
│  │  │  ├─ ChatRoomPage.jsx
│  │  │  ├─ ChatSubmitBox.jsx
│  │  │  └─ element
│  │  │     └─ GlobalHeaderChat.jsx
│  │  ├─ Detail.jsx
│  │  ├─ Home.jsx
│  │  ├─ MainLogin.jsx
│  │  ├─ MyPage.jsx
│  │  ├─ Search.jsx
│  │  ├─ SignIn.jsx
│  │  └─ SignUp.jsx
│  ├─ redux
│  │  ├─ config
│  │  │  └─ configStore.js
│  │  └─ modules
│  │     ├─ chattingSlice.js
│  │     ├─ listSlice.js
│  │     ├─ mypageSlice.js
│  │     ├─ postSlice.js
│  │     ├─ searchSlice.js
│  │     └─ userSlice.js
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ shared
│     ├─ Apis.js
│     ├─ Cookie.js
│     ├─ regex.js
│     └─ Router.js
└─ yarn.lock

```
)
</div>
</details>
<br/>

## 🎯 주요 기능
<!-- ![]() -->
|기능1|기능2|기능3|
|------|---|---|
|시연1|시연2|시연3|
<br/>

|기능1|기능2|기능3|
|------|---|---|
|시연1|시연2|시연3|
<br/>


## 📢 개발 포인트
<!-- ![]() -->
- s
- s
- s 

## 🛠️ 기술 스택
<!-- ![]() -->
#### 🖥️ Front-End

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black"/></a> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/></a> <img src="https://img.shields.io/badge/Create%20React%20App-09D3AC?style=for-the-badge&logo=Create%20React%20App&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white"/></a> 
<img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=React%20Hook%20Form&logoColor=white"/></a> <img src="https://img.shields.io/badge/React%20Redux-0088CC?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux.js%20Toolkit-4000BF?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></a>  
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=white"/></a> <img src="https://img.shields.io/badge/BootStrap-7952B3?style=for-the-badge&logo=BootStrap&logoColor=white"/></a> <img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"/></a> <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white"/></a> <img src="https://img.shields.io/badge/@stomp/stompjs-66595C?style=for-the-badge&logo=@stomp/stompjs&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React%20Intersection%20Observer-68BC71?style=for-the-badge&logo=React&logoColor=white"/></a>
<br/>

#### 🎨 Front-End & Web Design
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"/></a>
<br/>

#### 🎚️Back-End
<img src="https://img.shields.io/badge/Java-F80000?style=for-the-badge&logo=Java&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=Spring%20Security&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JWT-FBBA00?style=for-the-badge&logo=JWT&logoColor=white"/></a> <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=Auth0&logoColor=white"/></a> <img src="https://img.shields.io/badge/Stomp-66595C?style=for-the-badge&logo=Stomp&logoColor=white"/></a> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/></a> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"/></a> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white"/></a> <img src="https://img.shields.io/badge/restful%20API-1287B1?style=for-the-badge&logo=restful%20API&logoColor=white"/></a>
<br/>

### 📝 기술스택 및 라이브러리 사용 이유
<!-- ![]() -->
<details>
<summary>WireFrame</summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary>WireFrame</summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary>WireFrame</summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary>WireFrame</summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary>WireFrame</summary>
<div markdown="1">

![](0)
</div>
</details>
<details>
<summary>WireFrame</summary>
<div markdown="1">

![](0)
</div>
</details>
<br/>


#### ⚙️ Front-End
|스택 및 라이브러리|Ver|사용이유|
|------|---|---|
|<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/></a> <img src="https://img.shields.io/badge/Create%20React%20App-09D3AC?style=for-the-badge&logo=Create%20React%20App&logoColor=white"/></a>|<img src="https://img.shields.io/badge/18.2.0-E8E8E8?style=flat-square&logo=React&logoColor=black"/></a> <img src="https://img.shields.io/badge/5.0.1-E8E8E8?style=flat-square&logo=Create%20React%20App&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=React%20Router&logoColor=white"/></a>|<img src="https://img.shields.io/badge/6.4.3-E8E8E8?style=flat-square&logo=React&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=React%20Hook%20Form&logoColor=white"/></a>|<img src="https://img.shields.io/badge/7.39.4-E8E8E8?style=flat-square&logo=React%20Hook%20Form&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/React%20Redux-0088CC?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/></a>|<img src="https://img.shields.io/badge/8.0.4-E8E8E8?style=flat-square&logo=Redux&logoColor=black"/></a> <img src="https://img.shields.io/badge/4.2.0-E8E8E8?style=flat-square&logo=Redux&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/Redux.js%20Toolkit-4000BF?style=for-the-badge&logo=Redux&logoColor=white"/></a> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/></a>|<img src="https://img.shields.io/badge/1.8.6-E8E8E8?style=flat-square&logo=Redux&logoColor=black"/></a> <img src="https://img.shields.io/badge/1.1.3-E8E8E8?style=flat-square&logo=Axios&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styled%20components&logoColor=white"/></a> <img src="https://img.shields.io/badge/BootStrap-7952B3?style=for-the-badge&logo=BootStrap&logoColor=white"/></a>|<img src="https://img.shields.io/badge/5.3.6-E8E8E8?style=flat-square&logo=Styled%20Components&logoColor=black"/></a> <img src="https://img.shields.io/badge/5.2.2-E8E8E8?style=flat-square&logo=Bootstrap&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/.ENV-ECD53F?style=for-the-badge&logo=.ENV&logoColor=white"/></a>|<img src="https://img.shields.io/badge/10.1.0-E8E8E8?style=flat-square&logo=.ENV&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white"/></a> <img src="https://img.shields.io/badge/@stomp/stompjs-66595C?style=for-the-badge&logo=@stomp/stompjs&logoColor=white"/></a>|<img src="https://img.shields.io/badge/1.6.1-E8E8E8?style=flat-square&logo=Socket.Io&logoColor=black"/></a> <img src="https://img.shields.io/badge/6.1.2-E8E8E8?style=flat-square&logo=@Stomp/Stompjs&logoColor=black"/></a>|테스트3|
|<img src="https://img.shields.io/badge/React%20Intersection%20Observer-68BC71?style=for-the-badge&logo=React&logoColor=white"/></a>|<img src="https://img.shields.io/badge/9.4.1-E8E8E8?style=flat-square&logo=React&logoColor=black"/></a>|테스트3|
<br/>

#### ⚙️ Back-End
|스택 및 라이브러리|Ver|사용이유|
|------|---|---|
|<img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring%20Boot&logoColor=white"/></a> <img src="https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=Spring%20Security&logoColor=white"/></a>|테스트2|테스트3|
|<img src="https://img.shields.io/badge/JWT-FBBA00?style=for-the-badge&logo=JWT&logoColor=white"/></a> <img src="https://img.shields.io/badge/Auth0-EB5424?style=for-the-badge&logo=Auth0&logoColor=white"/></a>|테스트2|테스트3|
|<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/></a>|테스트2|테스트3|
|<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white"/></a> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"/></a>|테스트2|테스트3|
|<img src="https://img.shields.io/badge/Stomp-66595C?style=for-the-badge&logo=Stomp&logoColor=white"/></a>|테스트2|테스트3|
|<img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white"/></a> <img src="https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white"/></a>|테스트2|테스트3|
<br/>

## ⚔️ 트러블슈팅
<!-- ![]() -->
##### 🚀 01) 트러블슈팅 1
- Case :
- Solve :

##### 🚀 01) 트러블슈팅 2
- Case :
- Solve :

##### 🚀 01) 트러블슈팅 3
- Case :
- Solve :

##### 🚀 01) 트러블슈팅 4
- Case :
- Solve :

## 🗓️ 프로젝트 기간
<!-- ![]() -->
* 개발기간 : 
* 런칭날짜 : 
* 유저 피드백 : 
* 추가 업데이트 : 
<br>

## 👩‍💻 Team Members 👨‍💻
<!-- ![]() -->
#### 항해 9기 C반 Team02
* Leader - BE / 이도운
* Vice Leader - FE / 최토빈
### Front-End
|FE Leader|Member 1|Member 2|
|------|---|---|
|최토빈|김현진|조민지|
<!-- |![이미지 이름](이미지 URL)|![이미지 이름](이미지 URL)|![이미지 이름](이미지 URL)| -->
<br/>

### Back-End
|BE Leader|Member 1|Member 2|Member3|
|------|---|---|---|
|이도운|김시연|원민재|주재정|
<!-- |![](이미지 URL)|![이미지 이름](이미지 URL)|![이미지 이름](이미지 URL)|![이미지 이름](이미지 URL)| -->
<br/>

### Web-Design
|Designer|
|------|
|정미경|
<!-- |![이미지 이름](이미지 URL)| -->
<br/>
