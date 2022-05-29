import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./RenderingProduct";
import "../App.css";
import axios from "axios";
import styles from "../styles/RenderingProducts/RenderingProducts.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const RenderingProducts = ({ flag }) => {
  const pid = [];
  const [pidpid, setpidpid] = useState([]);

  function categoryProducts() {
    axios
      .get(`http://127.0.0.1:8000/product/`)
      .then(function (response) {
        response.data
          .filter((product) => product.category === flag)
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
          <Product pid={id} key={id} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default RenderingProducts;
