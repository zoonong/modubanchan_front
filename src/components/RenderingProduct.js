import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../App.css";
import axios from "axios";

const RenderingProduct = ({pid}) => {
  const history = useHistory();
  const [product, setProduct] = useState({
    pid: pid,
    name: "",
    description: "",
    feedText: "",
    category: "",
    picture: require(`../images/i${pid}.png`)
  });
  function productDetailInfo() {
    axios.get(`http://127.0.0.1:8000/product/${product.pid}/`)
    .then(function (response) {
      console.log(response);
      setProduct({
        ...product,
        name: response.data.name,
        description: response.data.description,
        feedText: response.data.feedText,
        category: response.data.category
      });
      console.log(product);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  useEffect(() => {
    productDetailInfo();
  }, []);
  return (
    <>
      <button
        onClick={() =>
          history.push({
            pathname: "/ProductDetail",
            state: {
              pid: pid
            },
          })
        }
      >상품 상세 페이지</button>
      <div>
        <img src={product.picture} alt={product.name} />
        <span>{product.name}</span>
        <p>{product.description}</p>
        <p>{product.feedText}</p>
        <span>{product.category}</span>
      </div>
    </>
  );
};

export default RenderingProduct;
