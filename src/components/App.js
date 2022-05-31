import { useState, useEffect } from "react";
import AppRouter from "./Router";
import "../App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("인증 여부");
    console.log(JSON.parse(localStorage.getItem("auth")));
    if (JSON.parse(localStorage.getItem("auth")) === true) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    console.log("로그인한 유저");
    console.log(JSON.parse(localStorage.getItem("logInUserId")));
  }, []);

  return (
    <div className="app">
      <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
