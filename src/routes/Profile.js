import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Profile/Profile.module.scss";
import classNames from "classnames/bind";
import RenderingProduct from "../components/RenderingProduct";
import RenderingProducts from "../components/RenderingProducts";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";

const cx = classNames.bind(styles);

const Profile = ({ profileInfo, userId }) => {
  const [userObj, setUserObj] = useState({
    id: 0,
    nickname: profileInfo.nickname,
    introduce: profileInfo.introduce,
    followingList: [],
    profilePicture: "",
  });
  //const users = useSelector((state) => state.users);

  const followingSeller = () => {
    axios
      .post(`http://127.0.0.1:8000/mypage/follow/${userId}`, {})
      .then(function (response) {
        console.log(response);
        console.log("팔로우/언팔로우");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("userId");
    console.log(userId);
  }, []);

  return (
    <div>
      <div className={cx("Profile")}>
        <div className={cx("ProfilePicture")}>
          {userObj.profilePicture !== "" ? (
            <img src={userObj.profilePicture} alt="프로필 사진" />
          ) : (
            <BsPersonCircle size="100" color="#dcdcdc" />
          )}
        </div>
        <div className={cx("ProfileDetails")}>
          <div className={cx("NickName")}>{profileInfo.nickname}</div>
          <p className={cx("Introduction")}>{profileInfo.introduce}</p>
          <button className={cx("Following")} onClick={followingSeller}>
            Follow
          </button>
        </div>
      </div>
      <RenderingProducts />
    </div>
  );
};
export default Profile;
