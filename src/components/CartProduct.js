import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

const CartProduct = ({cartId, productId, productNum}) => {
    const [cartProductDetail, setCartProductDetail] = useState({
        pid: productId,
        name: "",
        price: 0,
        picture: null,
        cartId: cartId,
        productNum: productNum,
    });

    const getCartProductDetail = () => {
        axios.get(`http://127.0.0.1:8000/product/`)
        .then(function(response) {
            console.log(response);
            response.data.filter((product) => product.id === productId)
            .map((product) => {
                console.log(product);
                setCartProductDetail({
                    ...cartProductDetail,
                    name: product.name,
                    price: product.price,
                    picture: product.picture
                });
            })
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    const updateCartProduct = () => {
        axios.put(`http://127.0.0.1:8000/cart/${cartProductDetail.cartId}/`, {
            id: cartProductDetail.cartId,
            user: JSON.parse(localStorage.getItem("logInUserId")),
            productNum: cartProductDetail.productNum,
            productList: cartProductDetail.pid
        })
        .then(function(response) {
            console.log(response);

        })
        .catch(function(error) {
            console.log(error);
        })
    }

    const deleteCartProduct = () => {
        axios.delete(`http://127.0.0.1:8000/cart/${cartProductDetail.cartId}/`)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    useEffect(() => {
        getCartProductDetail();
    }, []);

    return (
        <div>
            <div>카트에 있는 상품</div>
            <img src={`http://localhost:8000${cartProductDetail.picture}`} alt="상품 이미지"/>
            <div>{`cartId : ${cartProductDetail.cartId}`}</div>
            <div>{`상품 이름 : ${cartProductDetail.name}`}</div>
            <div>{`가격 : ${cartProductDetail.price}`}</div>
            <div>{`상품 id : ${cartProductDetail.pid}`}</div>
            <div>{`수량: ${cartProductDetail.productNum}`}</div>
            <button type="text" onClick={() => {
                setCartProductDetail({
                    ...cartProductDetail,
                    productNum: cartProductDetail.productNum + 1
                });
                updateCartProduct();
            }}>+</button>
            <button type="text" onClick={() => {
                setCartProductDetail({
                    ...cartProductDetail,
                    productNum: cartProductDetail.productNum - 1
                })
                updateCartProduct();
            }}>-</button>
            <p></p>
            <button type="text" onClick={deleteCartProduct}>삭제</button>
            <p></p>
        </div>
    );
};

export default CartProduct;