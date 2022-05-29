import { React, useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const MyPage = () => {
  const [profileInfo, setProfileInfo] = useState({
    firstName: "Yoo",
    lastName: "Dayeon",
  });

  function registerProfile() {
    axios
      .post("http://127.0.0.1:8000/mypage/", {
        first_name: profileInfo.firstName,
        last_name: profileInfo.lastName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function getProfile() {
    axios
      .get("http://127.0.0.1:8000/mypage/")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className={cx("MyPage")}>
      <div>My Page</div>
      <span>My Feed</span>
      <Link to="MyPage/CreateProduct">
        <button>+</button>
      </Link>
      <button type="text" onClick={registerProfile}>
        프로필 등록
      </button>
      <button type="text" onClick={getProfile}>
        프로필을 가져오기
      </button>
      <Profile />
    </div>
  );
};
export default MyPage;
