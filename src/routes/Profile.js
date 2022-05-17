import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/Profile/Profile.module.scss";
import classNames from "classnames/bind";
import RenderingProduct from "../components/RenderingProduct";
import RenderingProducts from "../components/RenderingProducts";

const cx = classNames.bind(styles);

const Profile = () => {
    const [userObj, setUserObj] = useState({
        id: 0,
        password: "",
        nickname: "",
        followerList: [],
        followingList: [],
        profilePicture: ""
    })
    const users = useSelector(state => state.users)
    const userId = useRef(2);

    useEffect(() => {
        users.map((user) => {
            if (user.id === userId.current) {
                console.log(user.id);
                setUserObj({
                    ...userObj,
                    id: user.id,
                    password: user.password,
                    nickname: user.nickname,
                    followerList: user.followerList,
                    followingList: user.followingList,
                    profilePicture: user.profilePicture
                });
            }
        });
    }, []);
    return (
        <div>
            <div className={cx("Profile")}>
                <div className={cx("ProfilePicture")}>
                    <img src={userObj.profilePicture} alt="프로필 사진" />
                </div>
                <div className={cx("ProfileDetails")}>
                    <div className={cx("NickName")}>{userObj.nickname}</div>
                    <p className={cx("Introduction")}>안녕하세요. 매니연입니다.</p>
                    <button className={cx("Following")}>Follow</button>
                </div>
            </div>
            <RenderingProducts />
        </div>
    );
}
export default Profile;
