import { React, useState } from "react";
import Profile from "./Profile";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);


const MyPage = () => {
    const [inputs, setInputs] = useState({
        name: "orange",
        description: "delicious orange",
        feedText: "oh my god",
        category: "DS"
    });

    const [profileInfo, setProfileInfo] = useState({
        firstName: "Yoo",
        lastName: "Dayeon"
    });

    function registerProduct() {
        axios.post("http://127.0.0.1:8000/product/", {
            name: inputs.name,
            description: inputs.description,
            feedText: inputs.feedText,
            category: inputs.category
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    function registerProfile() {
        axios.post("http://127.0.0.1:8000/mypage/", {
          first_name: profileInfo.firstName,
          last_name: profileInfo.lastName
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
        }); 
      }
      function getProfile() {
        axios.get("http://127.0.0.1:8000/mypage/")
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
          }); 
      }
    return (
        <div className={cx("MyPage")}>
            <div>My Page</div>
            <button type="text" onClick={registerProduct}>상품 등록</button>
            <button type="text" onClick={registerProfile}>프로필 등록</button>
            <button type="text" onClick={getProfile}>프로필 가져오기</button>
            <Profile />
        </div>
    );
}
export default MyPage;
