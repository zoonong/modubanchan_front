import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import UserProducts from "../components/UserProducts";
import axios from "axios";

const cx = classNames.bind(styles);

const MyPage = () => {
  const [profileInfo, setProfileInfo] = useState({
    nickname: "닉네임이 등록되지 않았습니다.",
    introduce: "소개글을 등록해주세요!",
  });

  function getProfile() {
    axios
      .get("http://127.0.0.1:8000/mypage/")
      .then(function (response) {
        setProfileInfo({
          nickname: response.data.first_name,
          introduce: response.data.last_name,
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    getProfile();
  }, []);
  console.log(JSON.parse(localStorage.getItem("logInUserId")));
  return (
    <div className={cx("MyPage")}>
      <Link to="MyPage/CreateProduct">
        <button>상품 추가하기</button>
      </Link>
      <Link to="CreateProfile">
        <button>프로필 등록</button>
      </Link>
      <Profile profileInfo={profileInfo} />
      <p>내가 등록한 상품</p>
      <UserProducts uId={JSON.parse(localStorage.getItem("logInUserId"))} />
    </div>
  );
};
export default MyPage;
