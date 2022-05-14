import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SignIn = () => {
  return (
    <div className="signin">
      <p>SignIn</p>
      <p>로고</p>
      <input name="ID" type="email" placeholder="아이디" required />
      <p></p>
      <input name="password" type="password" placeholder="비밀번호" required />
      <p></p>
      <button>로그인</button>
      <p>회원이 아니신가요? </p>
      <Link to="/SignUp">
        <p>회원가입</p>
      </Link>
    </div>
  );
};

export default SignIn;
