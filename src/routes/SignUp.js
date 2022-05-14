import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SignUp = () => {
  return (
    <div className="signup">
      <p>SignUp</p>
      <p>아이디</p>
      <input name="ID" type="email" placeholder="아이디" required />
      <p>비밀번호</p>
      <input name="password" type="password" placeholder="비밀번호" required />
      <p>닉네임</p>
      <input name="nickname" type="text" placeholder="닉네임" required />
      <p> </p>
      <Link to="/">
        <button>가입하기</button>
      </Link>
    </div>
  );
};

export default SignUp;
