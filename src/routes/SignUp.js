import { createNextState } from "@reduxjs/toolkit";
import React from "react";
import {useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/users";
import { Link } from "react-router-dom";
import "../App.css";
import styles from "../styles/SignUp/SignUp.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserItem = React.memo(function UserItem({user}) {
  return (
    <ul>
      <li>{user.id}</li>
      <li>{user.nickname}</li>
      <li>{user.password}</li>
    </ul>
  );
});

const UserList = React.memo(function UserList({users}) {
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  )
})

const SignUp = () => {
  const nextId = useRef(1);
  const [inputs, setInputs] = useState({
    nickname: "",
    password: ""
  });
  const { nickname, password } = inputs;
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const onCreateUser = user => dispatch(addUser(user));

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onSubmit = () => {
    const user = {
      id: nextId.current,
      nickname: nickname,
      password: password,
      profilePicture: require("../images/profile.jpeg")
    };
    onCreateUser(user);

    setInputs({
      nickname: "",
      password: ""
    });
    nextId.current += 1;
  };
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
          <input className={cx("Input")} name="password" type="password" placeholder="비밀번호" onChange={onChange} value={password} required />
        </div>
        <div className={cx("Item")}>
          <span className={cx("Text")}>비밀번호 확인</span>
          <input className={cx("Input")} name="password" type="password" placeholder="비밀번호 확인" required />
        </div>
        <div className={cx("Item")}>
        <span className={cx("Text")}>닉네임</span>
        <input className={cx("Input")} name="nickname" type="text" placeholder="닉네임" onChange={onChange} value={nickname} required />
        </div>
      </div>

      <Link to="/">
        <button className={cx("Submit")} onClick={onSubmit}>가입하기</button>
      </Link>
      <div>사용자 리스트</div>
      <UserList users={users} />
    </div>
  );
};

export default SignUp;
