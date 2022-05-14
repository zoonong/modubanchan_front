import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../styles/SignIn/SignIn.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SignIn = () => {
  return (
    <div className={cx("SignIn")}>
      <div className={cx("Title")}>Sign In</div>
      <p className={cx("Logo")}>모두의 반찬</p>

      <div className={cx("Form")}>
        <input className={cx("Input")} name="ID" type="email" placeholder="아이디" required />
        <input className={cx("Input")} name="password" type="password" placeholder="비밀번호" required />
        <button className={cx("Submit")}>로그인</button>
      </div>
      
      <p className={cx("Text")}>
        <span>회원이 아니신가요?</span>
        <Link to="/SignUp">
          <span className={cx("Toggle")}>회원가입</span>
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
