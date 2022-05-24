import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import styles from "../styles/SignIn/SignIn.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const SignIn = ({ isLoggedIn, setIsLoggedIn }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  
  const [loginURL, setLoginURL] = useState("");
  const users = useSelector(state => state.users);
  function userLogin() {
    axios.post("http://127.0.0.1:8000/accounts/login/", {
      email: inputs.email,
      password: inputs.password
    })
      .then(function (response) {
        console.log(response);
        const accessToken = response.data.access_token;
        console.log(accessToken);
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common['Authorization'] = accessToken;
        console.log(axios.defaults.headers.common);
        
        setIsLoggedIn(true); // 로그인 상태 true로 설정
        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch(function (error) {
        console.log("로그인 실패!");
        console.log(error);
        setLoginURL("SignIn");
    }); 
  }
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 user 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };
  const onLoginSubmit = () => {
    userLogin();
    setInputs({
      ...inputs,
      email: "",
      password: ""
    });
  };
  const onKeyUp = (event) => {
    // 'enter'키의 keycode는 13
    if (event.keyCode === 13) {
      onLoginSubmit();
    }
  };
  return (
    <div className={cx("SignIn")}>
      <img src={require("../images/logo.png")} alt="home" className={cx("Logo")}/>
      <div className={cx("Title")}>Sign In</div>

      <div className={cx("Form")}>
        <input className={cx("Input")} name="email" type="email" placeholder="이메일" value={inputs.email} required onChange={onChange} />
        <input className={cx("Input")} name="password" type="password" placeholder="비밀번호" value={inputs.password} required onChange={onChange} onKeyUp={onKeyUp} />
        <Link to={`/${loginURL}`}>
          <button className={cx("Submit")} type="text" onClick={onLoginSubmit}>로그인</button>
        </Link>
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
