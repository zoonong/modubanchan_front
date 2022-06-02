import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./RenderingProduct";
import axios from "axios";
import styles from "../styles/UserProducts/UserProducts.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const RenderingProducts = ({ uId }) => {
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
  //console.log(pidpid);
  return (
    <div className={cx("UserProducts")}>
      <div>
        {pidpid.map((id) => (
          <div className={cx("UP")}>
            <Product pid={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderingProducts;
