import { React, useState } from "react";
import styles from "../styles/CreateProduct/CreateProduct.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import { Link } from "react-router-dom";
import produce from "immer";
import { Text, Textarea } from '@chakra-ui/react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ToggleButton } from "react-bootstrap";

const cx = classNames.bind(styles);

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    feedText: "",
    category: "",
    picture: null,
  });

  const categoryTypes = [
    { name: '의류', value: 'DS' },
    { name: '가구', value: 'BV' },
    { name: '소품', value: 'AC' },
    { name: 'DIY', value: 'SD' },
  ];

  const registerProduct = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    if (newProduct?.picture) {
      formData.append("picture", newProduct.picture, newProduct.picture.name);
    }
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("feedText", newProduct.feedText);
    formData.append("category", newProduct.category);

    axios
      .post("http://127.0.0.1:8000/product/", formData, {
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
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const onLoadFile = (e) => {
    const file = e.target.files[0];
    setNewProduct({
      ...newProduct,
      picture: file,
    });
  };

  return (
    <div className={cx("CreateProduct")}>
      <form
        onSubmit={(e) => {
          registerProduct(e);
        }}
        enctype="multipart/form-data"
      >
        <input
          className={cx("Input")}
          name="name"
          type="text"
          placeholder="상품 이름"
          value={newProduct.name}
          required
          onChange={onChange}
        />
        <input
          className={cx("Input")}
          name="price"
          type="text"
          placeholder="가격"
          value={newProduct.price}
          required
          onChange={(e) => {
            let price = parseInt(e.target.value);
            if (!isNaN(price)) {
              setNewProduct({
                ...newProduct,
                price: parseInt(e.target.value),
              });
            } else {
              setNewProduct({
                ...newProduct,
                price: "",
              });
            }
          }}
        />
        <>
          <Text mb='8px'>설명 : {newProduct.description}</Text>
          <Textarea
            className={cx("Textarea")}
            name="description"
            value={newProduct.description}
            onChange={onChange}
            placeholder='상품 설명을 입력하세요'
            size='lg'
          />
        </>
        <Textarea
          className={cx("Textarea")}
          name="feedText"
          placeholder="피드 글 작성"
          value={newProduct.feedText}
          required
          size='lg'
          onChange={onChange}
        />
        <div>{newProduct.category}</div>
        <ButtonGroup>
        {categoryTypes.map((categoryType, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'outline-success'}
            name="radio"
            value={categoryType.value}
            checked={newProduct.category === categoryType.value}
            onChange={(e) => {
              setNewProduct({
                ...newProduct,
                category: e.currentTarget.value
              });
            }}
          >
            {categoryType.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      
        <input type="file" accept="image/*" onChange={onLoadFile} />
        <Link to="/MyPage">
          <button className={cx("Submit")} type="submit">상품 등록</button>
        </Link>
      </form>
    </div>
  );
};

export default CreateProduct;
