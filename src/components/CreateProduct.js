import {React, useState} from "react";
import styles from "../styles/CreateProduct/CreateProduct.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const CreateProduct = () => {
    let formData = new FormData();
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        feedText: "",
        category: "",
        picture: null
    });
    const registerProduct = async (e) => {
        e.preventDefault();
        // console.log(formData);
        // const postSurvey = await axios({
        //     method: "post",
        //     url: "http://127.0.0.1:8000/product/",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     },
        //     data: formData,
        //   });
        // postSurvey()
        // .then(function(response) {
        //     console.log(response);
        // })
        // .catch(function(error) {
        //     console.log(error);
        // })
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
            picture: file
        })
        formData.append("files", file);
        formData.append("data", JSON.stringify(newProduct));
    };
    return (
        <div className={cx("CreateProduct")}>
            <form onSubmit={(e) => {
                registerProduct(e);
            }} enctype="multipart/form-data">
            <input name="name" type="text" placeholder="상품 이름" value={newProduct.name} required onChange={onChange} />
            <input name="description" type="text" placeholder="상품 설명" value={newProduct.description} required onChange={onChange} />
            <input name="feedText" type="text" placeholder="피드 글 작성" value={newProduct.feedText} required onChange={onChange} />
            <input name="category" type="text" placeholder="카테고리 DS" value={newProduct.category} required onChange={onChange} />
            <input type="file" accept="image/*" onChange={onLoadFile}/>
            <button type="submit">상품 등록</button>
            </form>
        </div>
    );
}

export default CreateProduct;
