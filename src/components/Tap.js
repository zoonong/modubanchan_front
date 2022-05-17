import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../styles/Tap/Tap.module.scss";
import classNames from "classnames/bind";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const cx = classNames.bind(styles);

const Tap = ({ isLoggedIn }) => {
  return (
    <header className={cx("Tap")}>
      <nav className={cx("Bar")}>
        <Link to="/">
          <button className={cx("Title")}>모두의 반찬</button>
        </Link>
        <Link to="/Feed">
          <button className={cx("Following")}>팔로잉</button>
        </Link>
        <input type="text" className={cx("Input")} />
        {isLoggedIn ? (
          <div className={cx("Icons")}>
            <Link to="/MyPage">
              <IoPersonOutline size="28" color="1864ab" className={cx("Icon")}>마이페이지</IoPersonOutline>
            </Link>
            <Link to="/Cart">
              <AiOutlineShoppingCart size="30" color="1864ab" className={cx("Icon")}>장바구니</AiOutlineShoppingCart>
            </Link>
            <Link to="/">
              <IoIosLogOut size="30" color="1864ab" className={cx("Icon")}>로그아웃</IoIosLogOut>
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
          <Link to="/Category">
            <button className={cx("Item")}>반찬</button>
          </Link>
          <Link to="/Category">
            <button className={cx("Item")}>음료</button>
          </Link>
          <Link to="/Category">
            <button className={cx("Item")}>술</button>
          </Link>
          <Link to="/Category">
            <button className={cx("Item")}>디저트</button>
          </Link>
          <Link to="/Category">
            <button className={cx("Item")}>밀키트</button>
          </Link>
          <Link to="/Category">
            <button className={cx("Item")}>농축수산물</button>
          </Link>
        </nav>
    </header>
  );
};
export default Tap;
