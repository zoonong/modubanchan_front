import React from "react";

const CartProduct = ({cartId, productId, productNum}) => {
    return (
        <div>
            <div>카트에 있는 상품</div>
            <div>{`cartId : ${cartId}`}</div>
            <div>{`상품 id : ${productId}`}</div>
            <div>{`수량: ${productNum}`}</div>
            <p></p>
        </div>
    );
};

export default CartProduct;