import { React, useState, useDispatch } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import styles from "../styles/ModifyProduct/ModifyProduct.module.scss";
import classNames from "classnames/bind";
import { Text, Textarea } from "@chakra-ui/react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { ToggleButton } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ModifyProduct = () => {
  const location = useLocation();
  const [modifyProduct, setModifyProduct] = useState({
    name: location.state.product.name,
    price: location.state.product.price,
    description: location.state.product.description,
    feedText: location.state.product.feedText,
    category: location.state.product.category,
    picture: null,
  });
  const categoryTypes = [
    { name: "의류", value: "DS" },
    { name: "가구", value: "BV" },
    { name: "소품", value: "AC" },
    { name: "DIY", value: "SD" },
  ];

  const mProduct = async () => {
    console.log("mProduct 실행");
    let formData = new FormData();
    if (modifyProduct?.picture) {
      formData.append("picture", modifyProduct.picture, modifyProduct.picture.name);
    }
    formData.append("name", modifyProduct.name);
    formData.append("price", modifyProduct.price);
    formData.append("description", modifyProduct.description);
    formData.append("feedText", modifyProduct.feedText);
    formData.append("category", modifyProduct.category);

    axios
      .put(`http://127.0.0.1:8000/product/${location.state.pid}/`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setModifyProduct({
      ...modifyProduct,
      [name]: value,
    });
  };
  const onLoadFile = (e) => {
    const file = e.target.files[0];
    setModifyProduct({
      ...modifyProduct,
      picture: file,
    });
  };

  const onChangePrice = (e) => {
    let price = parseInt(e.target.value);
    if (!isNaN(price)) {
      setModifyProduct({
        ...modifyProduct,
        price: parseInt(e.target.value),
      });
    } else {
      setModifyProduct({
        ...modifyProduct,
        price: "",
      });
    }
  };

  return (
    <div className={cx("ModifyProduct")}>
      <div className={cx("Title")}>상품 정보를 수정해보세요.</div>
      <div className={cx("NameTitle")}>
        <input
          className={cx("Input")}
          name="name"
          type="text"
          placeholder="상품 이름"
          value={modifyProduct.name}
          required
          onChange={onChange}
        />
        <div className={cx("Price")}>
          <input
            className={cx("Input")}
            name="price"
            type="text"
            placeholder="가격"
            value={modifyProduct.price}
            required
            onChange={onChangePrice}
          />
          <span>원</span>
        </div>
      </div>
      <div className={cx("Category")}>
        <span className={cx("CategoryText")}>카테고리 선택</span>
        <ButtonGroup>
          {categoryTypes.map((categoryType, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={"outline-success"}
              name="radio"
              value={categoryType.value}
              checked={modifyProduct.category === categoryType.value}
              onChange={(e) => {
                setModifyProduct({
                  ...modifyProduct,
                  category: e.currentTarget.value,
                });
              }}
            >
              {categoryType.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      <div className={cx("TextareaContainer")}>
        <span className={cx("Text")}>상품 상세 설명</span>
        <Textarea
          className={cx("Textarea")}
          name="description"
          value={modifyProduct.description}
          onChange={onChange}
          placeholder="상품 설명을 입력하세요"
          size="lg"
        />
      </div>
      <div className={cx("TextareaContainer")}>
        <span className={cx("Text")}>피드 작성</span>
        <Textarea
          className={cx("Textarea")}
          name="feedText"
          placeholder="피드 글 작성"
          value={modifyProduct.feedText}
          required
          size="lg"
          onChange={onChange}
        />
        <div className={cx("ImageUpload")}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className={cx("Text")}>이미지 업로드</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={onLoadFile} />
          </Form.Group>
        </div>
        <Link to="/MyPage">
          <button className={cx("Submit")} type="text" onClick={mProduct}>
            상품 등록
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModifyProduct;
