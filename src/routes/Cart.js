import { React, useState, useDispatch, useEffect } from "react";
import CartProduct from "../components/CartProduct";
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import styles from "../styles/Cart/Cart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cart = () => {
  const [logInUserId, setLogInUserId] = useState();
  const [cartList, setCartList] = useState([]);
  const [priceSum, setPriceSum] = useState(0);
  
  const [init, setInit] = useState(false);

  const getProductsInCart = () => {
    axios.get(`http://127.0.0.1:8000/cart/`)
    .then(function(response) {
      console.log(response);
      response.data.filter((productInCart) => productInCart.user === JSON.parse(localStorage.getItem("logInUserId")))
      .map((productInCart) => {
        console.log("productInCart");
        console.log(productInCart);
        cartList.push({
          ...cartList,
          cartId: productInCart.id,
          productId: productInCart.productList,
          productNum: productInCart.productNum,
        });
      })
      setInit(true);
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  useEffect(() => {
    setLogInUserId(JSON.parse(localStorage.getItem("logInUserId")));
    console.log(JSON.parse(localStorage.getItem("logInUserId")));
    console.log(cartList);
    console.log(cartList.length);
    if(cartList.length === 0) {
      getProductsInCart();
    }
  }, []);
  return (
    <div className={cx("Cart")}>
      <h1>장바구니</h1>
      <div>{`logInUserId : ${logInUserId}`}</div>
      {init ? cartList.map((cart) =>
        <CartProduct key={cart.cartId} cartId={cart.cartId} productId={cart.productId} productNum={cart.productNum} priceSum={priceSum} setPriceSum={setPriceSum} />
      ) : <div>장바구니 목록을 가져오는 중...</div>}
      
      <div>
        <button>전체 선택</button>
        <div>
          <span>상품 금액 </span>
          <span>배송비 </span>
          <span>결제 예정 금액</span>
        </div>
        <div>
          <span>15000원</span>
          <span> + </span>
          <span>5000원</span>
          <span> = </span>
          <span>{`${priceSum}원`}</span>
        </div>
        <span>주문하기</span>
      </div>
    </div>
  );
};

export default Cart;
