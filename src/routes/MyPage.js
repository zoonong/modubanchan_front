import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import UserProducts from "../components/UserProducts";
import UserFeeds from "../components/UserFeeds";
import axios from "axios";

const cx = classNames.bind(styles);

const MyPage = () => {
  const [profileInfo, setProfileInfo] = useState({
    nickname: "닉네임이 등록되지 않았습니다.",
    introduce: "소개글을 등록해주세요!",
  });
  const [following, setFollowing] = useState([
    {
      nickname: "",
      introduce: "",
    },
  ]);

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
  const followingList = () => {
    axios
      .get("http://127.0.0.1:8000/mypage/following_list/")
      .then(function (response) {
        console.log(response.data.followings);
        axios
          .get(`http://127.0.0.1:8000/mypage/${response.data.followings}/`)
          //.get("http://127.0.0.1:8000/mypage/2/")
          .then(function (response) {
            setFollowing(response.data);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
    followingList();
  }, []);
  console.log(following);
  console.log(JSON.parse(localStorage.getItem("logInUserId")));
  return (
    <div className={cx("MyPage")}>
      <Link to="/CreateProduct">
        <button>상품 추가하기</button>
      </Link>
      <Link to="CreateProfile">
        <button>프로필 등록</button>
      </Link>
      <Profile profileInfo={profileInfo} />
      {/*{following.map((f, index) => {
        return (
          <div>
            <p key={index}>{`닉네임 : ${f.nickname}`}</p>
            <p key={index}>{`소개 : ${f.introduce}`}</p>
          </div>
        );
      })}*/}
      <p>내가 등록한 상품</p>
      <UserProducts uId={JSON.parse(localStorage.getItem("logInUserId"))} />
      <p>내가 등록한 피드</p>
      <UserFeeds uId={JSON.parse(localStorage.getItem("logInUserId"))} />
    </div>
  );
};
export default MyPage;
