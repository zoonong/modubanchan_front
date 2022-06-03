import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import UserProducts from "../components/UserProducts";
import UserFeeds from "../components/UserFeeds";
import axios from "axios";
import CreateProfile from "./CreateProfile";
import FollowingList from "../components/FollowingList";

const cx = classNames.bind(styles);

const MyPage = () => {
  const [profile, setProfile] = useState({
    uid: JSON.parse(localStorage.getItem("logInUserId")),
    followingIdList: [],
  });

  const [isProfileNameChanged, setIsProfileNameChanged] = useState(0);

  return (
    <div className={cx("MyPage")}>
      <div className={cx("Profile")}>
        <div className={cx("ProfileInfo")}>
          <Profile
            userId={JSON.parse(localStorage.getItem("logInUserId"))}
            isProfileNameChanged={isProfileNameChanged}
            setIsProfileNameChanged={setIsProfileNameChanged}
          />
        </div>
        <div className={cx("ButtonGroup")}>
          <FollowingList
            className={cx("Button1")}
            profile={profile}
            setProfile={setProfile}
          />
          <CreateProfile
            className={cx("Button2")}
            isProfileNameChanged={isProfileNameChanged}
            setIsProfileNameChanged={setIsProfileNameChanged}
          />
        </div>
      </div>

      <div className={cx("ProductsContainer")}>
        <hr className={cx("Line")}></hr>
        <div className={cx("Title")}>내가 등록한 상품</div>
        <Link to="/CreateProduct">
          <button className={cx("Button", "AddProductBtn")}>
            상품 추가하기
          </button>
        </Link>
        <UserProducts uId={JSON.parse(localStorage.getItem("logInUserId"))} />
      </div>
    </div>
  );
};
export default MyPage;
