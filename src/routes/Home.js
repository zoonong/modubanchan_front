import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "../reducers/users";
import { useState } from "react";

const UserItem = React.memo(function UserItem({user}) {
  return (
    <ul>
      <li>1</li>
      <li>{user.nickname}</li>
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
  const [user, setUser] = useState({
    id: 1,
    nickname: 'd'
  });
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const onCreateUser = user => dispatch(addUser(user));
  
  return (
    <div>
      <div>사용자 리스트</div>
      <UserList users={users} />
      <button type="text" onClick={
        setUser({
          ...user,
          nickname: "hi"
      })}>
        사용자 이름 설정</button>
      <button type="text" onClick={onCreateUser(user)}>사용자 추가</button>
    </div>
  );
};

export default Home;
