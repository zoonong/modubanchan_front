import { useState, useEffect } from "react";
import AppRouter from "./Router";
import "../App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logInUserId, setLogInUserId] = useState(0);

  useEffect(() => {
    console.log("로그인한 유저");
    console.log(logInUserId);
  }, [logInUserId]);

  useEffect(() => {
    console.log("로그인 상태");
    console.log(isLoggedIn);
  })

  return (
    <div className="app">
      <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} logInUserId={logInUserId} setLogInUserId={setLogInUserId} />
    </div>
  );
}

export default App;
