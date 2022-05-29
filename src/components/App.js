import { useState, useEffect } from "react";
import AppRouter from "./Router";
import "../App.css";

function App() {
  useEffect(() => {
    console.log("인증 여부");
    console.log(JSON.parse(sessionStorage.getItem("auth")));
  }, []);

  useEffect(() => {
    console.log("로그인한 유저");
    console.log(JSON.parse(sessionStorage.getItem("logInUserId")));
  }, []);

  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
