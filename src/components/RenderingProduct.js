import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "../App.css";
import axios from "axios";

const RenderingProduct = ({ pid }) => {
  const history = useHistory();
  const [product, setProduct] = useState({
    pid: pid,
    name: "",
    price: 0,
    description: "",
    feedText: "",
    category: "",
    picture: null,
  });
  function productDetailInfo() {
    axios
      .get(`http://127.0.0.1:8000/product/${product.pid}/`)
      .then(function (response) {
        console.log(response);
        setProduct({
          ...product,
          name: response.data.name,
          price: response.data.price,
          description: response.data.description,
          feedText: response.data.feedText,
          category: response.data.category,
          picture: response.data.picture,
        });
        console.log(product);
      })
      .catch(function (error) {
        console.log(error);
      });
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
              pid: product.pid,
            },
          })
        }
      >
        <img
          src={`http://localhost:8000${product.picture}`}
          alt={product.name}
        />
      </button>
      <div>
        <span>{product.name}</span>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.feedText}</p>
        <span>{product.category}</span>
      </div>
    </>
  );
};

export default RenderingProduct;
