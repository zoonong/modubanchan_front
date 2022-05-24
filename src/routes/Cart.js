import { React, useState, useDispatch } from "react";
import CartProduct from "../components/CartProduct";
import axios from 'axios';

const Cart = () => {
  
  function accountsInput() {
    axios.post("http://127.0.0.1:8000/accounts/", {
      email: "udayeon@naver.com",
      password1: "qwer1234!",
      password2: "qwer1234!"
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    }); 
  }
  
  return (
    <div>
      <button type="text" onClick={accountsInput}>accountsInput 클릭</button>
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
