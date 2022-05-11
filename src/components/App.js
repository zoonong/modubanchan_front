import { useState, useEffect } from "react";
import AppRouter from "./Router";
import Tap from "./Tap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(true);
  }, []);
  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
