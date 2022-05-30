import { React, useState, useDispatch } from "react";
import axios from "axios";
import { useLocation } from "react-router";

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
  console.log(modifyProduct);
  const mProduct = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (modifyProduct?.picture) {
      formData.append(
        "picture",
        modifyProduct.picture,
        modifyProduct.picture.name
      );
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
  return (
    <div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <div>.</div>
      <form
        onSubmit={(e) => {
          mProduct(e);
        }}
        enctype="multipart/form-data"
      >
        <input
          name="name"
          type="text"
          placeholder="상품 이름"
          value={modifyProduct.name}
          required
          onChange={onChange}
        />
        <input
          name="price"
          type="text"
          placeholder="가격"
          value={modifyProduct.price}
          required
          onChange={(e) => {
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
          }}
        />
        <input
          name="description"
          type="text"
          placeholder="상품 설명"
          value={modifyProduct.description}
          required
          onChange={onChange}
        />
        <input
          name="feedText"
          type="text"
          placeholder="피드 글 작성"
          value={modifyProduct.feedText}
          required
          onChange={onChange}
        />
        <input
          name="category"
          type="text"
          placeholder="카테고리"
          value={modifyProduct.category}
          required
          onChange={onChange}
        />
        <input type="file" accept="image/*" onChange={onLoadFile} />
        <button type="submit">상품 수정</button>
      </form>
    </div>
  );
};

export default ModifyProduct;
