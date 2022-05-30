// Profile.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Profile/Profile.module.scss";
import classNames from "classnames/bind";
import RenderingProduct from "../components/RenderingProduct";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const cx = classNames.bind(styles);

const Profile = ({ userId, isProfileNameChanged, setIsProfileNameChanged }) => {
  const [profile, setProfile] = useState({
    id: userId,
    nickname: "",
    introduce: "",
    profilePicture: "",
  });
  //const users = useSelector((state) => state.users);

  function getProfileName() {
    axios
      .get(`http://127.0.0.1:8000/mypage/${userId}/`)
      .then(function (response) {
        console.log("response");
        console.log(response);
        let first_name = "닉네임이 등록되지 않았습니다.";
        let last_name = "소개글이 등록되지 않았습니다.";

        if (first_name !== "") {
          first_name = response.data.first_name;
        }
        if (last_name !== "") {
          last_name = response.data.last_name;
        }
        setProfile({
          ...profile,
          nickname: first_name,
          introduce: last_name,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getProfileName();
  }, [isProfileNameChanged]);

  return (
    <div>
      <div className={cx("Profile")}>
        <div className={cx("ProfilePicture")}>
          {profile.profilePicture !== "" ? (
            <img src={profile.profilePicture} alt="프로필 사진" />
          ) : (
            <BsPersonCircle size="100" color="#dcdcdc" />
          )}
        </div>
        <div className={cx("ProfileDetails")}>
          <div className={cx("NickName")}>{profile.nickname}</div>
          <p className={cx("Introduction")}>{profile.introduce}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
