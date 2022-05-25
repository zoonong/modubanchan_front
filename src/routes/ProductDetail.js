import axios from "axios";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";

const ProductDetail = ({ pid }) => {
  //const data = useLocation().state.productNum;
  const seller = "매니연";
  const price = 10000;
  const deliveryCharge = 3000;

  const [productInfo, setProductInfo] = useState({
    pid: pid,
    name: "",
    description: "",
    feedText: "",
    category: "",
    picture: null
  });

  function productDetailInfo() {
    axios.get(`http://127.0.0.1:8000/product/1/`)
    .then(function (response) {
      console.log(response);
      console.log(response.data.picture);
      setProductInfo({
        ...productInfo,
        id: response.data.id,
        name: response.data.name,
        description: response.data.description,
        feedText: response.data.feedText,
        category: response.data.category,
        picture: response.data.picture
      });
      console.log(productInfo);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div className="container">
      <div className="productdetail">
        <img src={productInfo.picture} alt={productInfo.name} />
        <span>{productInfo.name}</span>
        <p>{productInfo.description}</p>
        <p>{productInfo.feedText}</p>
        <span>{productInfo.category}</span>
      </div>
      <div>
        <Link>
          <p>{`${seller} >`}</p>
        </Link>
        <p>{`${price}원`}</p>
        <p>{`배송비 ${deliveryCharge}원`}</p>
        <Link to="/Cart">
          <button>장바구니</button>
        </Link>
        <button>주문하기</button>
        {/* <p>{data}</p> */}
        <button type="text" onClick={productDetailInfo}>product detail 정보</button>
      </div>
    </div>
  );
};

export default ProductDetail;
