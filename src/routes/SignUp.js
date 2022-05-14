import { createNextState } from "@reduxjs/toolkit";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../styles/SignUp/SignUp.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignUp = () => {
  return (
    <div className={cx("SignUp")}>
      <div className={cx("Title")}>SignUp</div>
      <div className={cx("Form")}>
        <div className={cx("Item")}>
          <span className={cx("Text")}>아이디</span>
          <input className={cx("Input")} name="ID" type="email" placeholder="아이디" required />
        </div>
        <div className={cx("Item")}>
          <span className={cx("Text")}>비밀번호</span>
          <input className={cx("Input")} name="password" type="password" placeholder="비밀번호" required />
        </div>
        <div className={cx("Item")}>
          <span className={cx("Text")}>비밀번호 확인</span>
          <input className={cx("Input")} name="password" type="password" placeholder="비밀번호" required />
        </div>
        <div className={cx("Item")}>
        <span className={cx("Text")}>닉네임</span>
        <input className={cx("Input")} name="nickname" type="text" placeholder="닉네임" required />
        </div>
      </div>

      <Link to="/">
        <button className={cx("Submit")}>가입하기</button>
      </Link>
    </div>
  );
};

export default SignUp;
