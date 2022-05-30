import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    productDetailInfo();
  }, []);
  return (
    <Card style={{ width: "18rem" }} border="success">
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
        <Card.Img variant="top" src={`http://localhost:8000${product.picture}`} alt={product.name} />
      </button>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.feedText}</Card.Text>
        <Button
          variant="success"
          onClick={() =>
            history.push({
              pathname: "/ProductDetail",
              state: {
                pid: product.pid,
              },
            })
          }
        >
          Show More >
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">판매자는 누굴까요? 맞혀보세요 울룰루 히히히</small>
      </Card.Footer>
    </Card>
  );
};

export default RenderingProduct;
