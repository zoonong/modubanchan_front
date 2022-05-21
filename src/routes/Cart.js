import React from "react";

const Cart = () => {
  return (
    <div>
      <span>장바구니</span>
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
