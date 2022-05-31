import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import styles from "../styles/ProductDetail/ProductDetail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CartAlertModal = ({ addToCart }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        variant="success"
        className={cx("order")}
        onClick={() => {
          handleShow();
          addToCart();
        }}
      >
        장바구니
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>장바구니로 이동하시겠습니까?</Modal.Title>
        </Modal.Header>
        <Modal.Body>장바구니에 상품이 담겼습니다.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            계속 쇼핑하기
          </Button>
          <Link to="/Cart">
            <Button variant="success">장바구니로 이동하기</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartAlertModal;
