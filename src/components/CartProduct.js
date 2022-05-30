import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/Cart/Cart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CartProduct = ({ cartId, productId, productNum }) => {
  const [cartProductDetail, setCartProductDetail] = useState({
    pid: productId,
    name: "",
    price: 0,
    picture: null,
    cartId: cartId,
    productNum: productNum,
  });

  const getCartProductDetail = () => {
    axios
      .get(`http://127.0.0.1:8000/product/`)
      .then(function (response) {
        console.log(response);
        response.data
          .filter((product) => product.id === productId)
          .map((product) => {
            console.log(product);
            setCartProductDetail({
              ...cartProductDetail,
              name: product.name,
              price: product.price,
              picture: product.picture,
            });
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateCartProduct = () => {
    axios
      .put(`http://127.0.0.1:8000/cart/${cartProductDetail.cartId}/`, {
        id: cartProductDetail.cartId,
        user: JSON.parse(localStorage.getItem("logInUserId")),
        productNum: cartProductDetail.productNum,
        productList: cartProductDetail.pid,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteCartProduct = () => {
    axios
      .delete(`http://127.0.0.1:8000/cart/${cartProductDetail.cartId}/`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getCartProductDetail();
  }, []);

  useEffect(() => {
    updateCartProduct();
  }, [cartProductDetail.productNum]);

  // useEffect(() => {

  // }, [cartProductDetail])

  return (
    <div className={cx("cartproduct")}>
      <img className={cx("img")} src={`http://localhost:8000${cartProductDetail.picture}`} alt="상품 이미지" />
      <div className={cx("div1")}>{cartProductDetail.name}</div>
      <div className={cx("div1")}>{`${cartProductDetail.price}원`}</div>
      <div className={cx("div1")}>{`${cartProductDetail.productNum}`}</div>
      <span className={cx("PlusMinus")}>
        <button
          className={cx("btn1", "Button")}
          type="text"
          onClick={() => {
            setCartProductDetail({
              ...cartProductDetail,
              productNum: cartProductDetail.productNum + 1,
            });
          }}
        >
          +
        </button>
        <button
          className={cx("btn1", "Button")}
          type="text"
          onClick={() => {
            if (cartProductDetail.productNum !== 1) {
              setCartProductDetail({
                ...cartProductDetail,
                productNum: cartProductDetail.productNum - 1,
              });
            }
          }}
        >
          -
        </button>
      </span>

      <button className={cx("btn2", "Button")} type="text" onClick={deleteCartProduct}>
        삭제
      </button>
      <span className={cx("deliveryFee")}>3000원</span>
    </div>
  );
};

export default CartProduct;
