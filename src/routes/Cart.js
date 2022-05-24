import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [text, setText] = useState([]);

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

function loginInput() {
  axios.post("http://127.0.0.1:8000/accounts/login/", {
      email: "udayeon@naver.com",
      password: "qwer1234!",
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

  function getNotice() {
    axios.get("http://127.0.0.1:8000/product/")
      .then((response) => {
        setText([...response.data]);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <button type="text" onClick={accountsInput}>accountsInput 클릭</button>
      <button type="text" onClick={loginInput}>loginInput 클릭</button>      
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
