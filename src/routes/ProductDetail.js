import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const data = useLocation().state.productNum;
  return (
    <>
      <div>ProductDetail</div>
      <p>{data}</p>
    </>
  );
};

export default ProductDetail;
