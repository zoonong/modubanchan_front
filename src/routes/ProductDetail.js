import axios from "axios";
import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../App.css";
import styles from "../styles/ProductDetail/ProductDetail.module.scss";
import classNames from "classnames/bind";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartAlertModal from "../components/CartAlertModal";

const cx = classNames.bind(styles);

const ProductDetail = () => {
  const history = useHistory();
  const location = useLocation();
  const deliveryCharge = 3000;
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
    productNum: 1, // 상품 수량
  });
  const setSellerId = useRef(false);
  const [init, setInit] = useState(false);

  function productDetailInfo() {
    axios
      .get(`http://127.0.0.1:8000/product/${location.state.pid}/`)
      .then(function (response) {
        setProduct({
          ...product,
          pid: location.state.pid,
          name: response.data.name,
          price: response.data.price,
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
  }

  function setSeller() {
    axios
      .get(`http://127.0.0.1:8000/mypage/${product.sellerId}/`)
      .then(function (response) {
        console.log("access");
        console.log(response.data);
        console.log(response.data.first_name);
        setProduct({
          ...product,
          sellerName: response.data.first_name,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    productDetailInfo();
    if (product.pid !== "") {
      setSellerId.current = true;
    }
    if (setSellerId.current) {
      setSeller();
    }
    setInit(true);
  }, []);

  const addToCart = () => {
    axios
      .post(`http://127.0.0.1:8000/cart/`, {
        productNum: product.productNum,
        productList: location.state.pid,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const deleteProduct = () => {
    axios
      .delete(`http://127.0.0.1:8000/product/${product.pid}/`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (product.sellerName !== "seller") {
      console.log(product.sellerName);
      setInit(true);
    }
  }, [product.sellerName]);
  console.log();
  return (
    <div className={cx("ProductDetail")}>
      <div>
        {init ? (
          <div>
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
                <p
                  onClick={() =>
                    history.push({
                      pathname: "/SellerPage",
                      state: {
                        sId: product.sellerId,
                      },
                    })
                  }
                >{`${product.sellerId} ${product.sellerName}>`}</p>
                <p>{`${product.price}원`}</p>
                <p>{`배송비 ${deliveryCharge}원`}</p>
                <span>{`수량 : ${product.productNum}`}</span>
                <button
                  type="text"
                  onClick={() => {
                    setProduct({
                      ...product,
                      productNum: product.productNum + 1,
                    });
                  }}
                >
                  +
                </button>
                <button
                  type="text"
                  onClick={() => {
                    setProduct({
                      ...product,
                      productNum: product.productNum - 1,
                    });
                  }}
                >
                  -
                </button>
                <p></p>
                <CartAlertModal addToCart={addToCart} />
                <button>주문하기</button>
                {product.sellerId === JSON.parse(localStorage.getItem("logInUserId")) ? (
                  <div>
                    <button onClick={deleteProduct}>상품 삭제하기</button>
                    <button
                      onClick={() =>
                        history.push({
                          pathname: "/ModifyProduct",
                          state: {
                            pid: product.pid,
                            product: product,
                          },
                        })
                      }
                    >
                      상품 수정하기
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
