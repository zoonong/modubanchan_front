import React, { useEffect } from "react";
import { useState } from "react";
import Product from "./RenderingProduct";
import axios from "axios";
import classNames from "classnames/bind";
import { CardGroup } from "react-bootstrap";
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
      <div className={cx("divBox")}>
        <div className={cx("div1")}>
          {pidpid
            .filter((id) => id % 5 === 1)
            .map((id) => (
              <div>
                <CardGroup id="Card">
                  <Product pid={id} key={id} />
                </CardGroup>
              </div>
            ))}
        </div>
        <div className={cx("div2")}>
          {pidpid
            .filter((id) => id % 5 === 2)
            .map((id) => (
              <div>
                <CardGroup>
                  <Product pid={id} key={id} />
                </CardGroup>
              </div>
            ))}
        </div>
        <div className={cx("div3")}>
          {pidpid
            .filter((id) => id % 5 === 3)
            .map((id) => (
              <div>
                <CardGroup>
                  <Product pid={id} key={id} />
                </CardGroup>
              </div>
            ))}
        </div>
        <div className={cx("div4")}>
          {pidpid
            .filter((id) => id % 5 === 4)
            .map((id) => (
              <div>
                <CardGroup>
                  <Product pid={id} key={id} />
                </CardGroup>
              </div>
            ))}
        </div>
        <div className={cx("div5")}>
          {pidpid
            .filter((id) => id % 5 === 0)
            .map((id) => (
              <div>
                <CardGroup>
                  <Product pid={id} key={id} />
                </CardGroup>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RenderingProducts;
