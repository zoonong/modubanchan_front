import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import styles from "../styles/SellerPage/SellerPage.module.scss";
import classNames from "classnames/bind";
import UserProducts from "../components/UserProducts";
import Profile from "./Profile";
import RenderingProducts from "../components/RenderingProducts";
import { SettingsSystemDaydream } from "@mui/icons-material";

const cx = classNames.bind(styles);

const SellerPage = () => {
  const location = useLocation();
  const [isMe, setIsMe] = useState(false);
  const [profile, setProfile] = useState({
    uid: JSON.parse(localStorage.getItem("logInUserId")),
    followingIdList: [],
  });
  const [followText, setFollowText] = useState("Follow");

  const followingSeller = () => {
    axios
      .post(`http://127.0.0.1:8000/mypage/follow/${location.state.sId}`, {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    if (followText === "Follow") {
      console.log("팔로우");
      setFollowText("UnFollow");
    } else {
      console.log("언팔로우");
      setFollowText("Follow");
    }
  };

  const getFollowingList = () => {
    axios
      .get(`http://127.0.0.1:8000/mypage/following_list/`)
      .then(function (response) {
        console.log(response);
        console.log("서버에서 가져온 팔로잉 아이디 배열");
        console.log(response.data.followings);
        response.data.followings.map((following) => {
          if (following === location.state.sId) {
            setFollowText("UnFollow");
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (location.state.sId === JSON.parse(localStorage.getItem("logInUserId"))) {
      setIsMe(true);
    }
    getFollowingList();
  }, []);

  return (
    <div className={cx("SellerPage")}>
      <Profile userId={location.state.sId} />
      {isMe ? (
        <div>본인이라서 팔로우 버튼 안나옴</div>
      ) : (
        <button className={cx("Following")} onClick={followingSeller}>
          {followText}
        </button>
      )}

      <RenderingProducts />
      <p>{`판매자가 등록한 상품`}</p>
      <UserProducts uId={location.state.sId} />
    </div>
  );
};

export default SellerPage;
