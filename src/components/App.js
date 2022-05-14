import { useState, useEffect } from "react";
import AppRouter from "./Router";
import "../App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const categoryList = [
    "dessert",
    "beverage",
    "alcohol",
    "sideDish",
    "mealKit",
    "ALP",
  ];

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <div className="app">
      <AppRouter isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
