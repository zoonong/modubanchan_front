import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./RenderingProduct";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "../styles/RenderingProducts/RenderingProducts.module.scss";

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
      <div>
        {pidpid.map((id) => (
          <div className={cx("product")}>
            <Product pid={id} key={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderingProducts;
