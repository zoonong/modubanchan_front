import { React, useState, useDispatch } from "react";
import CartProduct from "../components/CartProduct";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  const [profile, setProfile] = useState({
    nickname: "",
    introduce: "",
  });
  const registerProfile = (e) => {
    e.preventDefault();
    axios
      .put("http://127.0.0.1:8000/mypage/profile_update/", {
        first_name: profile.nickname,
        last_name: profile.introduce,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          registerProfile(e);
        }}
      >
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <input
          name="nickname"
          type="text"
          placeholder="닉네임"
          value={profile.nickname}
          required
          onChange={onChange}
        />
        <input
          name="introduce"
          type="text"
          placeholder="한줄소개"
          value={profile.introduce}
          required
          onChange={onChange}
        />
        <button type="submit">프로필 등록</button>
        <Link to="/MyPage">
          <button>마이페이지로 돌아가기</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateProfile;
