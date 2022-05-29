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
  //const [myCartIdList, setMyCartIdList] = useState([]);
  const [cartList, setCartList] = useState([{
    cartId: 0, // 장바구니 id
    productId: 0, // 상품 번호
    productNum: 0, // 상품 개수
  }]);
  
  const [init, setInit] = useState(false);

  const getLogInUser = () => {
    axios.get(`http://127:0.0.1:8000/`)
  }

  const getProductsInCart = () => {
    axios.get(`http://127.0.0.1:8000/cart/`)
    .then(function(response) {
      console.log(response);
      response.data.filter((productInCart) => productInCart.user === JSON.parse(localStorage.getItem("logInUserId")))
      .map((productInCart) => {
        console.log("productInCart");
        console.log(productInCart);
        //setMyCartIdList([...myCartIdList, productInCart]);
        cartList.push({
          ...cartList,
          cartId: productInCart.id,
          productId: productInCart.productList,
          productNum: productInCart.productNum,
        });
      })
      setInit(true);
      // setCart({
      //   ...cart,
      //   productId: response.data.productList,
      //   productNum: response.data.productNum,
      //   userId: response.data.user,
      // });
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  useEffect(() => {
    setLogInUserId(JSON.parse(localStorage.getItem("logInUserId")));
    console.log(JSON.parse(localStorage.getItem("logInUserId")));
    getProductsInCart();
  }, []);
  return (
    <div className={cx("Cart")}>
      <h1>장바구니</h1>
      {init ? cartList.map((cart) =>
        <CartProduct key={cart.cartId} cartId={cart.cartId} productId={cart.productId} productNum={cart.productNum} />
      ) : <div>장바구니 목록을 가져오는 중...</div>}
      
      <div>
        <div>{`logInUserId : ${logInUserId}`}</div>
        <button type="text" onClick={getProductsInCart}>장바구니 받아오기</button>
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
