import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Tap = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <Link to="/">
        <p>기사</p>
      </Link>
      <nav>
        <Link to="/Feed">
          <button className="followingbutton">팔로잉</button>
        </Link>
        <input type="text" />
        {isLoggedIn ? (
          <div className="right">
            <Link to="/MyPage">
              <button>마이페이지</button>
            </Link>
            <Link to="/Cart">
              <button>장바구니</button>
            </Link>
            <button>로그아웃</button>
          </div>
        ) : (
          <div className="right">
            <Link to="/SignIn">
              <button>로그인/회원가입</button>
            </Link>
          </div>
        )}
        <div className="categoty">
          <Link to="/Category">
            <p>반찬</p>
          </Link>
          <Link to="/Category">
            <p>음료</p>
          </Link>
          <Link to="/Category">
            <p>술</p>
          </Link>
          <Link to="/Category">
            <p>디저트</p>
          </Link>
          <Link to="/Category">
            <p>밀키트</p>
          </Link>
          <Link to="/Category">
            <p>농축수산물</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Tap;
