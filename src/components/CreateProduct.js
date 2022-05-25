import {React, useState} from "react";
import styles from "../styles/CreateProduct/CreateProduct.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        feedText: "",
        category: "",
        picture: null
    });
    function registerProduct() {
        axios.post("http://127.0.0.1:8000/product/", {
            name: newProduct.name,
            description: newProduct.description,
            feedText: newProduct.feedText,
            category: newProduct.category,
            picture: newProduct.picture
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    const onChange = (e) => {
        const {value, name} = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    };
    const onLoadFile = (e) => {
        const file = e.target.files;
        console.log(file[0]);
        setNewProduct({
            ...newProduct,
            picture: file[0]
        });
        console.log(newProduct.picture);
    };
    return (
        <div className={cx("CreateProduct")}>
            <input name="name" type="text" placeholder="상품 이름" value={newProduct.name} required onChange={onChange} />
            <input name="description" type="text" placeholder="상품 설명" value={newProduct.description} required onChange={onChange} />
            <input name="feedText" type="text" placeholder="피드 글 작성" value={newProduct.feedText} required onChange={onChange} />
            <input name="category" type="text" placeholder="카테고리 DS" value={newProduct.category} required onChange={onChange} />
            <input type="file" accept="image/*" onChange={onLoadFile}/>
            <button type="text" onClick={registerProduct}>상품 등록</button>
        </div>
    );
}

export default CreateProduct;
