import axios from "axios";
import { React, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
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

  return (
    <div className={cx("ProductDetail")}>
      <div>
        {init ? (
          <div>
            <div className={cx("container")}>
              <div className={cx("box1")}>
                <img
                  className={cx("img")}
                  src={`http://localhost:8000${product.picture}`}
                  alt={product.name}
                />
                <hr />
                <div className={cx("description")}>{product.description}</div>
              </div>
              <div className={cx("v-line")}></div>
              <div className={cx("box2")}>
                <p className={cx("name")}>{product.name}</p>
                <div
                  className={cx("sellerHome")}
                  onClick={() =>
                    history.push({
                      pathname: "/SellerPage",
                      state: {
                        sId: product.sellerId,
                      },
                    })
                  }
                >{`판매자 ${product.sellerName}의 홈으로 가기 >>`}</div>
                <hr />
                <div className={cx("price")}>
                  <div className={cx("p1")}>판매가</div>
                  <div className={cx("p2")}>{`${product.price}원`}</div>
                </div>
                <div className={cx("point")}>
                  <div className={cx("p1")}>포인트</div>
                  <div className={cx("p2")}>1% ~ 최대 5%</div>
                </div>
                <div className={cx("deliveryCharge")}>
                  <div className={cx("p1")}>배송비</div>
                  <div className={cx("p2")}>3000원</div>
                </div>
                <hr />
                <div className={cx("count")}>
                  <div className={cx("p1")}>수량</div>
                  <div className={cx("p2")}>{product.productNum}</div>
                  <div className={cx("PlusMinus")}>
                    <button
                      className={cx("btn1", "Button")}
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
                      className={cx("btn1", "Button")}
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
                  </div>
                </div>
                <Button variant="success" className={cx("order")}>
                  주문하기
                </Button>
                <div className={cx("cart")}>
                  <CartAlertModal addToCart={addToCart} />
                </div>
                <hr className={cx("hr1")} />
                {product.sellerId ===
                JSON.parse(localStorage.getItem("logInUserId")) ? (
                  <div className={cx("dm")}>
                    <Link to="/MyPage">
                      <Button
                        variant="outline-success"
                        className={cx("d")}
                        onClick={deleteProduct}
                      >
                        상품 삭제하기
                      </Button>
                    </Link>

                    <Button
                      variant="outline-success"
                      className={cx("m")}
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
                    </Button>
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
