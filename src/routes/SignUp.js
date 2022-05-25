import { createNextState } from "@reduxjs/toolkit";
import React from "react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/users";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../styles/SignUp/SignUp.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const UserItem = React.memo(function UserItem({ user }) {
  return (
    <ul>
      <li>{user.id}</li>
      <li>{user.email}</li>
      <li>{user.password}</li>
    </ul>
  );
});

const UserList = React.memo(function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
});

const SignUp = () => {
  const nextId = useRef(1);
  const [inputs, setInputs] = useState({
    email: "",
    password1: "",
    password2: "",
  });
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const onCreateUser = (user) => dispatch(addUser(user));

  function userAccounts() {
    axios
      .post("http://127.0.0.1:8000/accounts/", {
        email: inputs.email,
        password1: inputs.password1,
        password2: inputs.password2,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 user 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onSubmit = () => {
    const user = {
      id: nextId.current,
      email: inputs.email,
      password: inputs.password1,
      profilePicture: require("../images/profile.jpeg"),
    };
    userAccounts();
    onCreateUser(user);

    setInputs({
      ...inputs,
      email: "",
      password1: "",
      password2: "",
    });
    nextId.current += 1;
  };
  return (
    <div className={cx("SignUp")}>
      <div className={cx("Title")}>SignUp</div>
      <div className={cx("Form")}>
        <div className={cx("Item")}>
          <span className={cx("Text")}>이메일</span>
          <input
            className={cx("Input")}
            name="email"
            type="email"
            placeholder="이메일"
            onChange={onChange}
            value={inputs.email}
            required
          />
        </div>
        <div className={cx("Item")}>
          <span className={cx("Text")}>비밀번호</span>
          <input
            className={cx("Input")}
            name="password1"
            type="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={inputs.password1}
            required
          />
        </div>
        <div className={cx("Item")}>
          <span className={cx("Text")}>비밀번호 확인</span>
          <input
            className={cx("Input")}
            name="password2"
            type="password"
            placeholder="비밀번호 확인"
            onChange={onChange}
            value={inputs.password2}
            required
          />
        </div>
      </div>

      <Link to="/">
        <button className={cx("Submit")} onClick={onSubmit}>
          가입하기
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
