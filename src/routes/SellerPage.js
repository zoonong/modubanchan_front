import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import styles from "../styles/SellerPage/SellerPage.module.scss";
import classNames from "classnames/bind";
import UserProducts from "../components/UserProducts";
import Profile from "./Profile";
import RenderingProducts from "../components/RenderingProducts";

const cx = classNames.bind(styles);

const SellerPage = () => {
  const location = useLocation();
  const [followText, setFollowText] = useState("Follow");

  const followingSeller = () => {
    axios.post(`http://127.0.0.1:8000/mypage/follow/${location.state.sId}`, {})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
    if(followText === "Follow") {
      console.log("팔로우");
      setFollowText("UnFollow");
    } else{
      console.log("언팔로우");
      setFollowText("Follow");
    }
  }

  return (
    <div className={cx("SellerPage")}>
      <Profile userId={location.state.sId}/>
      <button className={cx("Following")} onClick={followingSeller}>{followText}</button>
      <RenderingProducts />
      <p>{`판매자가 등록한 상품`}</p>
      <UserProducts uId={location.state.sId} />
    </div>
  );
};

export default SellerPage;
