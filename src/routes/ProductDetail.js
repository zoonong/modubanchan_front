import axios from "axios";
import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../App.css";
import styles from "../styles/ProductDetail/ProductDetail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ProductDetail = () => {
  const location = useLocation();
  //const data = useLocation().state.productNum;
  const deliveryCharge = 3000;
  //const sellerId = useRef(null);
  const [product, setProduct] = useState({
    pid: "",
    name: "",
    price: 0,
    description: "",
    feedText: "",
    category: "",
    picture: null,
    sellerId: "",
    sellerName: "seller",
  });
  
  const setSellerId = useRef(false);
  const [init, setInit] = useState(false);

  function productDetailInfo() {
      axios.get(`http://127.0.0.1:8000/product/${location.state.pid}/`)
      .then(function (response) {
      //sellerId.current = response.data.user;
      setProduct({
        ...product,
        pid : location.state.pid,
        name: response.data.name,
        price : response.data.price,
        description: response.data.description,
        feedText: response.data.feedText,
        category: response.data.category,
        picture: response.data.picture,
        sellerId: response.data.user,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    
    // return new Promise((resolve, reject) => {
    //   axios.get(`http://127.0.0.1:8000/product/${location.state.pid}/`)
    //   .then(function (response) {
    //   //sellerId.current = response.data.user;
    //   console.log("response.data");
    //   console.log(response.data);
    //   setProduct({
    //     ...product,
    //     pid : location.state.pid,
    //     name: response.data.name,
    //     price : response.data.price,
    //     description: response.data.description,
    //     feedText: response.data.feedText,
    //     category: response.data.category,
    //     picture: response.data.picture,
    //     sellerId: response.data.user
    //   });
    //   resolve(response.data.user);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    // });
  }

  function setSeller() {
    console.log(product);
    //console.log(product.sellerId);
    //while(sellerId.current == null) {console.log("기다리는중...");}
    axios.get(`http://127.0.0.1:8000/mypage/${product.sellerId}/`)
      .then(function(response) {
        console.log("access");
        console.log(response.data);
        console.log(response.data.first_name);
        setProduct({
          ...product,
          sellerName: response.data.first_name
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    // async function initialization(setSeller) {
    //   productDetailInfo().then((product.sellerId) => {
    //     setSeller(product.sellerId);
    //   });
    //   console.log("셀러 id");
    //   console.log(sellerId.current);
    //   //setSeller();
    // }
    // initialization(setSeller);
    // productDetailInfo().then((sellerId) => {
    //   setSeller(sellerId);
    // });
    // console.log("product");
    // console.log(product);
    //console.log(sellerId.current);
    productDetailInfo();
    if(product.pid !== ""){
      setSellerId.current = true;
    }
    console.log("setSellerId");
    console.log(setSellerId.current);
    if(setSellerId.current) {
      setSeller();
    }
    console.log("sellerName");
    console.log(product.sellerName);
    console.log(product.sellerName !== "seller");;
    setInit(true)
  }, []);

  const addToCart = () => {
    axios.post(`http://127.0.0.1:8000/cart/`, {
      productNum: 2,
      productList: location.state.pid
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    if(product.sellerName !== "seller") {
      console.log(product.sellerName);
      setInit(true);
    }
  }, [product.sellerName]);

  return (
    <div className={cx("ProductDetail")}>
      <div>{init ? 
        <div className="container">
          <div className="productdetail">
          <img src={`http://localhost:8000${product.picture}`} alt={product.name} />
          <span>{`상품 이름 : ${product.name}`}</span>
          <span>{`가격 : ${product.price}원`}</span>
          <p>{`상품 설명 : ${product.description}`}</p>
          <p>{`feedText : ${product.feedText}`}</p>
          <span>{`category : ${product.category}`}</span>
        </div>
        <div>
          <Link to={"/MyPage"}>
            <p>{`${product.sellerId} ${product.sellerName}>`}</p>
          </Link>
          <p>{`${product.price}원`}</p>
          <p>{`배송비 ${deliveryCharge}원`}</p>
          <button onClick={addToCart}>장바구니</button>
          <button>주문하기</button>
        </div>
        </div>
         : <div>Loading...</div>}</div>
    </div>
  );
};

export default ProductDetail;
