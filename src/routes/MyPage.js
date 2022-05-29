import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const MyPage = () => {
  const [profileInfo, setProfileInfo] = useState({
    nickname: "",
    introduce: "",
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

  return (
    <div className={cx("MyPage")}>
      <Link to="MyPage/CreateProduct">
        <button>상품 추가하기</button>
      </Link>
      <Link to="CreateProfile">
        <button>프로필 등록</button>
      </Link>
      <Profile profileInfo={profileInfo} />
    </div>
  );
};
export default MyPage;
