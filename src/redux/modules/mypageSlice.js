import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Apis from "../../shared/Apis"
import { current } from "@reduxjs/toolkit";

const initialState = {
  myInfo: {},
  myPet: [
    {
      petId: 0,
      name: "",
      age: "",
      category: "",
    },
  ],
  isLoading: false,
  error: null,

}

// 게시글 수정
export const __putMyPost = createAsyncThunk(
  "posts/__putPost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload-01", payload)
      const response = await Apis.putPostAX(payload)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 게시글 삭제
export const __deleteMyPost = createAsyncThunk(
  "posts/__deletePost",
  async (id, thunkAPI) => {
    try {
      console.log("payload-02", id)
      const response = await Apis.deletePostAX(id)
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


// 마이페이지 조회
export const __getMyPage = createAsyncThunk(
  "mypage/__getMyPage",
  async (payload, thunkAPI) => {
    try {
      console.log("payload-03", payload)
      const response = await Apis.getMyPageAX()
      console.log("response", response);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// 마이페이지 내 게시글 조회
export const __getMyPost = createAsyncThunk(
  "mypage/__getmypost",
  async (payload, thunkAPI) => {
    try {
      console.log("payload-04", payload)
      const response = await Apis.getMyPostAX(payload)
      console.log("내 게시글", response);
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 프로필 이미지 업로드
export const __postMyImg = createAsyncThunk(
  "mypage/__postMyImg",
  async (payload, thunkAPI) => {
    console.log("payload-05", payload)
    try {
      await Apis.postMyImgAX(payload)
        .then((response) => {
          return thunkAPI.fulfillWithValue(payload)
      })
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 조회
export const __getMyPet = createAsyncThunk(
  "mypage/__getMyPet",
  async (payload, thunkAPI) => {
    console.log("payload-06", payload)
    try {
      const response = await Apis.getMyPetAX(payload)
      console.log("반려동물 정보", response);
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 작성
export const __addMyPet = createAsyncThunk(
  "mypage/__addMyPet",
  async (payload, thunkAPI) => {
    console.log("payload-07", payload)
    try {
      const response = await Apis.postMyPetAX(payload)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)


// 마이페이지 반려동물 정보 수정
export const __putMyPet = createAsyncThunk(
  "mypage/__putMyPet",
  async (payload, thunkAPI) => {
    console.log("payload-08", payload)
    try {
      const response = await Apis.putMyPetAX(payload)
          return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 마이페이지 반려동물 정보 삭제
export const __deleteMyPet = createAsyncThunk(
  "mypage/__deleteMyPet",
  async (petId, thunkAPI) => {
    try {
      console.log("payload-09", petId)
      const response =  Apis.deleteMyPetAX(petId)
      return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
      alert(error.response)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const mypageSlice = createSlice({
  name: "mypage",
  initialState,
  reducers: {},
  extraReducers: {
    // 게시글 수정
    [__putMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post.response.push(action.payload.data)
    },
    [__putMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 게시글 삭제
    [__deleteMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.post = state.post.splice(action.payload, 1)
    },
    [__deleteMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 조회
    [__getMyPage.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPage.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log("mypage get", action.payload);
      state.myInfo = action.payload;
    },
    [__getMyPage.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 내 게시글 조회
    [__getMyPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      console.log(current(state));
      console.log("페이로드", action.payload.data);
      state.myInfo = action.payload.data;
    },
    [__getMyPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 프로필 이미지 업로드
    [__postMyImg.pending]: (state) => {
      state.isLoading = true;
    },
    [__postMyImg.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage = action.payload;
    },
    [__postMyImg.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 조회
    [__getMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage = action.payload.data;
    },
    [__getMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 작성
    [__addMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage = action.payload;
    },
    [__addMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 수정
    [__putMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__putMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage.response.push(action.payload.data);
    },
    [__putMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    },
    // 마이페이지 반려동물 정보 삭제
    [__deleteMyPet.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteMyPet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.mypage = state.mypage.splice(action.payload, 1)
    },
    [__deleteMyPet.rejected]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.id;
    },
  }
})

export default mypageSlice.reducer;