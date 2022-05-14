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
  const [user, setUser] = useState({
    id: nextId.current,
    nickname: ""
  });
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const onCreateUser = user => dispatch(addUser(user));
  
  return (
    <div>
      <div>Home</div>
      <div>사용자 리스트</div>
      <UserList users={users} />
      <button type="text" onClick={() => {
        setUser({
          ...user,
          id: nextId.current
        });
        onCreateUser(user);
        nextId.current += 1
      }}>사용자 추가</button>
    </div>
  );
};

export default Home;
