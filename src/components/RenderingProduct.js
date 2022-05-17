import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const RenderingProduct = () => {
  const history = useHistory();
  const [product, setProduct] = useState({
    productNumber: 1,
    productName: "매니연 떡볶이",
    price: 10000,
    src: require("../tteokbokki.GIF"),
  });
  return (
    <>
      <div>RenderingProduct</div>
      <button
        onClick={() =>
          history.push({
            pathname: "/ProductDetail",
            state: {
              productNum: product.productNumber,
            },
          })
        }
      >
        <img src={product.src} alt="상품 사진" />
      </button>
      <p>{`${product.productName}`}</p>
      <p>{`${product.price}원`}</p>
    </>
  );
};

export default RenderingProduct;
