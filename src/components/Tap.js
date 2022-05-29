import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../styles/Tap/Tap.module.scss";
import classNames from "classnames/bind";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";

const cx = classNames.bind(styles);

const Tap = () => {
  const logOut = () => {
    sessionStorage.setItem("auth", false);
    sessionStorage.setItem("logInUserId", 0);
    console.log("로그아웃됨");
    console.log(JSON.parse(sessionStorage.getItem("auth")));
    console.log(JSON.parse(sessionStorage.getItem("logInUserId")));

    axios.post(`http://127.0.0.1:8000/accounts/logout/`, {})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  return (
    <header className={cx("Tap")}>
      <nav className={cx("Bar")}>
        <Link to="/">
          <img
            src={require("../images/logo.png")}
            alt="home"
            className={cx("Title")}
          />
        </Link>
        <Link to="/Feed">
          <button className={cx("Following")}>Following</button>
        </Link>
        <input type="text" className={cx("Input")} />
        {JSON.parse(sessionStorage.getItem("auth")) ? (
          <div className={cx("Icons")}>
            <Link to="/MyPage">
              <IoPersonOutline size="28" color="18ab4b" className={cx("Icon")}>
                마이페이지
              </IoPersonOutline>
            </Link>
            <Link to="/Cart">
              <AiOutlineShoppingCart
                size="30"
                color="18ab4b"
                className={cx("Icon")}
              >
                장바구니
              </AiOutlineShoppingCart>
            </Link>
            <Link to="/">
              <IoIosLogOut
                size="30"
                color="18ab4b"
                className={cx("Icon")}
                onClick={logOut}
              >
                로그아웃
              </IoIosLogOut>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/SignIn">
              <button className={cx("Item")}>로그인/회원가입</button>
            </Link>
          </div>
        )}
      </nav>
      <nav className={cx("Category")}>
        <Link to="/Garment">
          <button className={cx("Item")}>의류</button>
        </Link>
        <Link to="/Furniture">
          <button className={cx("Item")}>가구</button>
        </Link>
        <Link to="/Props">
          <button className={cx("Item")}>소품</button>
        </Link>
        <Link to="/DIY">
          <button className={cx("Item")}>DIY</button>
        </Link>
      </nav>
    </header>
  );
};
export default Tap;
