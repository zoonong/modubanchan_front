import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "../styles/RenderingProduct/RenderingProduct.scss";

const cx = classNames.bind(styles);

const RenderingProduct = ({ pid }) => {
  const history = useHistory();
  const [product, setProduct] = useState({
    pid: pid,
    name: "",
    price: 0,
    description: "",
    feedText: "",
    category: "",
    picture: null,
  });
  function productDetailInfo() {
    axios
      .get(`http://127.0.0.1:8000/product/${product.pid}/`)
      .then(function (response) {
        console.log(response);
        setProduct({
          ...product,
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
          feedText: response.data.feedText,
          category: response.data.category,
          picture: response.data.picture,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    productDetailInfo();
  }, []);
  return (
    <div className={cx("RenderingProduct")}>
      <div className={cx("imgBox")}>
        <img
          onClick={() =>
            history.push({
              pathname: "/ProductDetail",
              state: {
                pid: product.pid,
              },
            })
          }
          src={`http://localhost:8000${product.picture}`}
          alt={product.name}
        />
      </div>
      <div className={cx("midBox")}>
        <div className={cx("nameBox")}>
          <div className={cx("name")}>{product.name}</div>
        </div>
        <div className={cx("price")}>{`${product.price}원`}</div>
        <Button
          className={cx("btn")}
          variant="success"
          onClick={() =>
            history.push({
              pathname: "/ProductDetail",
              state: {
                pid: product.pid,
              },
            })
          }
        >
          {`Show More >`}
        </Button>
      </div>
    </div>
  );
};

export default RenderingProduct;
