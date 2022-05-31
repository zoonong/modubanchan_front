import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "../App.css";
import axios from "axios";

const UserFeed = ({ pid }) => {
  const history = useHistory();
  const [product, setProduct] = useState({
    pid: pid,
    name: "",
    feedText: "",
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
          feedText: response.data.feedText,
          picture: response.data.picture,
        });
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
        <img src={`http://localhost:8000${product.picture}`} alt={product.name} />
      </button>
      <div>
        <span>{product.name}</span>
        <p>{product.feedText}</p>
      </div>
    </>
  );
};

export default UserFeed;
