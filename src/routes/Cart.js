import { React, useState, useEffect } from "react";
import CartProduct from "../components/CartProduct";
import axios from "axios";
import styles from "../styles/Cart/Cart.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cart = () => {
  const [logInUserId, setLogInUserId] = useState();
  const [cartList, setCartList] = useState([]);
  const [init, setInit] = useState(false);

  const getProductsInCart = () => {
    axios
      .get(`http://127.0.0.1:8000/cart/`)
      .then(function (response) {
        console.log(response);
        let tmpCartList = [];
        response.data
          .filter(
            (productInCart) =>
              productInCart.user ===
              JSON.parse(localStorage.getItem("logInUserId"))
          )
          .map((productInCart) => {
            tmpCartList.push({
              cartId: productInCart.id,
              productId: productInCart.productList,
              productNum: productInCart.productNum,
            });
          });
        setCartList(tmpCartList);
        setInit(true);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("렌더링");
  };

  const deleteCartProduct = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/cart/${id}/`)
      .then(function (response) {
        console.log(response);
        getProductsInCart();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    setLogInUserId(JSON.parse(localStorage.getItem("logInUserId")));
    getProductsInCart();
  }, []);

  return (
    <div className={cx("Cart")}>
      <p className={cx("Title")}>장바구니</p>
      <div className={cx("itemtitle")}>
        <p className={cx("box1")}>item</p>
        <p className={cx("box2")}>상품이름</p>
        <p className={cx("box3")}>가격</p>
        <p className={cx("box4")}>수량</p>
        <p className={cx("box5")}>배송비</p>
        <hr />
      </div>
      {cartList.map((cart) => (
        <CartProduct
          key={cart.cartId}
          cartId={cart.cartId}
          productId={cart.productId}
          productNum={cart.productNum}
          deleteCartProduct={deleteCartProduct}
        />
      ))}
    </div>
  );
};

export default Cart;
