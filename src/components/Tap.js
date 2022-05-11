import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Tap = ({ isLoggedIn }) => {
  return (
    <header>
      <Link to="/">
        <p className="pe">기사</p>
      </Link>
      <nav>
        <Link to="/Feed">
          <button>팔로잉</button>
        </Link>
        <input type="text" />
        {isLoggedIn ? (
          <div>
            <Link to="/MyPage">
              <button>마이페이지</button>
            </Link>
            <Link to="/Cart">
              <button>장바구니</button>
            </Link>
            <button>로그아웃</button>
          </div>
        ) : (
          <div>
            <Link to="/SignIn">
              <button>로그인/회원가입</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Tap;
