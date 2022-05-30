import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import UserProducts from "../components/UserProducts";
import UserFeeds from "../components/UserFeeds";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const cx = classNames.bind(styles);

const MyPage = () => {
  const [profileInfo, setProfileInfo] = useState({
    uid: JSON.parse(localStorage.getItem("logInUserId")),
    followingList: [],
  });
  const [following, setFollowing] = useState([
    {
      nickname: "",
      introduce: "",
    },
  ]);

  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);

  const getFollowingList = () => {
    axios.get(`http://127.0.0.1:8000/mypage/following_list/`)
    .then(function(response) {
      axios.get(`http://127.0.0.1:8000/mypage/${response.data.followings}`)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      // console.log(response);
      // console.log(response.data.followings);
      // setProfileInfo({
      //   ...profileInfo,
      //   followingList: response.data.followings
      // })
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  const followingList = () => {
    axios
      .get("http://127.0.0.1:8000/mypage/following_list/")
      .then(function (response) {
        console.log(response.data.followings);
        axios
          .get(`http://127.0.0.1:8000/mypage/${response.data.followings}/`)
          //.get("http://127.0.0.1:8000/mypage/2/")
          .then(function (response) {
            setFollowing(response.data);
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getProfile();
    followingList();
  }, []);
  console.log(following);
  console.log(JSON.parse(localStorage.getItem("logInUserId")));
  return (
    <div className={cx("MyPage")}>
      <Link to="/CreateProduct">
        <button>상품 추가하기</button>
      </Link>
      <Link to="CreateProfile">
        <button className={cx("Followings")}>프로필 등록</button>
      </Link>
      <Profile userId={JSON.parse(localStorage.getItem("logInUserId"))} />
      <button className={cx("Followings")} onClick={() => {
        getFollowingList();
        setModalShow(true);
      }}>Followings</button>
      <Modal
      show={modalShow} onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="lg"
      >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Followings</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div>{profileInfo.followingList.map((following) => <p>{following}</p>)}</div>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary">Hi</Button>
              </Modal.Footer>
      </Modal>
      <p>내가 등록한 상품</p>
      <UserProducts uId={JSON.parse(localStorage.getItem("logInUserId"))} />
      <p>내가 등록한 피드</p>
      <UserFeeds uId={JSON.parse(localStorage.getItem("logInUserId"))} />
    </div>
  );
};
export default MyPage;
