import axios from "axios";
import React from "react";
import Profile from "./Profile";


const MyPage = () => {
    function registerProduct() {
        axios.post("http://127.0.0.1:8000/product", {
            name: "cloth",
            description: "pretty clothes",
            feedText: "hi hi",
            category: "의류",
            picture: require("../images/1.jpg")
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    return (
        <div>
            <div>My Page</div>
            <button type="text" onClick={registerProduct}>상품 등록</button>
            <Profile />
        </div>
    );
}
export default MyPage;
