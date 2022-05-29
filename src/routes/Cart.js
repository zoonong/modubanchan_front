import { React, useState, useDispatch } from "react";
import CartProduct from "../components/CartProduct";
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import styles from "../styles/Cart/Cart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cart = () => {
  const [cart, setCart] = useState([{
    productId: 0, // 상품 번호
    productNum: 0, // 상품 개수
  }]);

  const getLogInUser = () => {
    axios.get(`http://127:0.0.1:8000/`)
  }

  const getCart = () => {
    axios.get(`http://127.0.0.1:8000/cart/`)
    .then(function(response) {
      console.log(response);
      setCart({
        ...cart,
        productId: response.data.productList,
        productNum: response.data.productNum,
        userId: response.data.user,
      });
    })
  };
  return (
    <div className={cx("Cart")}>
      <h1>장바구니</h1>
      <CartProduct />
      <CartProduct />
      <div>
        <button>전체 선택</button>
        <div>
          <span>상품 금액</span>
          <span>배송비</span>
          <span>결제 예정 금액</span>
        </div>
        <div>
          <span>15000원</span>
          <span> + </span>
          <span>5000원</span>
          <span> = </span>
          <span>20000원</span>
        </div>
        <span>주문하기</span>
      </div>
    </div>
  );
};

export default Cart;
