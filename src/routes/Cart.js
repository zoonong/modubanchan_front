import { React, useState, useDispatch } from "react";
import CartProduct from "../components/CartProduct";
import axios from 'axios';

const Cart = () => {
  const [email, setEmail] = useState("udayeon@naver.com");
  const [password, setPassword] = useState("qwer1234!");
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
      password: "qwer1234!"
    })
      .then(function (response) {
        console.log(response);
        const accessToken = response.data.access_token;
        console.log(accessToken);
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common['Authorization'] = accessToken;
        console.log(axios.defaults.headers.common);
  
        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch(function (error) {
        console.log(error);
    }); 
  }
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
