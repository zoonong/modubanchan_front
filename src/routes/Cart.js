import { React, useState, useDispatch } from "react";
import CartProduct from "../components/CartProduct";
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import styles from "../styles/Cart/Cart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cart = () => {
  return (
    <div className={cx("Cart")}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>장바구니로 이동하시겠습니까?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p></p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">No. Continue Shopping</Button>
          <Button variant="primary">Yes. Go to Cart</Button>
        </Modal.Footer>
      </Modal.Dialog>

      <span>장바구니</span>
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
