import React, { useEffect } from "react";
import { useState } from "react";
import Feed from "./UserFeed";
import "../App.css";
import axios from "axios";
import styles from "../styles/RenderingProducts/RenderingProducts.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const UserFeeds = ({ uId }) => {
  const pid = [];
  const [pidpid, setpidpid] = useState([]);

  function categoryProducts() {
    axios
      .get(`http://127.0.0.1:8000/product/`)
      .then(function (response) {
        response.data
          .filter((product) => product.user === uId)
          .map((product) => pid.push(product.id));
        setpidpid(pid);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    categoryProducts();
  }, []);
  console.log(pidpid);
  return (
    <div className={cx("RenderingProducts")}>
      <div className="PP">
        {pidpid.map((id) => (
          <div>
            <Feed pid={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeeds;
