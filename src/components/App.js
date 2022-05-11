import { useState, useEffect } from "react";
import AppRouter from "./Router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);
  return <div>
    <AppRouter
    isLoggedIn={isLoggedIn}
    />
  </div>;
}

export default App;
