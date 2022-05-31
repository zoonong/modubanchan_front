import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";

axios.defaults.withCredentials = true;
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
