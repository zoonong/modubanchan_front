import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../reducers/users";
import { useState, useRef } from "react";

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

const Home = () => {
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
      password: password
    };
    onCreateUser(user);

    setInputs({
      nickname: "",
      password: ""
    });
    nextId.current += 1;
  };

  return (
    <div>
      <div>Home</div>
      <input
          name="nickname"
          type="text"
          placeholder="닉네임"
          onChange={onChange}
          value={nickname}
        />
        <input
          name="password"
          type="text"
          placeholder="비밀번호"
          onChange={onChange}
          value={password}
        />
        <button type="text" onClick={onSubmit}>사용자 추가</button>
      <div>사용자 리스트</div>
      <UserList users={users} />
    </div>
  );
};

export default Home;
