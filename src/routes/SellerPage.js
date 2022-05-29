import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import Profile from "./Profile";

const cx = classNames.bind(styles);

const SellerPage = () => {
  const location = useLocation();
  const [sellerInfo, setsellerInfo] = useState({
    nickname: "닉네임이 등록되지 않았습니다.",
    introduce: "소개글이 등록되지 않았습니다.",
  });
  console.log(location.state.sId);
  function getProfile() {
    axios
      .get(`http://127.0.0.1:8000/mypage/${location.state.sId}/`)
      //.get("http://127.0.0.1:8000/mypage/2/")
      .then(function (response) {
        setsellerInfo({
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
  console.log(sellerInfo);
  return (
    <div className={cx("MyPage")}>
      <Profile profileInfo={sellerInfo} />
    </div>
  );
};

export default SellerPage;
