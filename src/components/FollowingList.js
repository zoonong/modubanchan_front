import React, { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "../styles/MyPage/MyPage.module.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const cx = classNames.bind(styles);

const FollowingList = ({ profile, setProfile }) => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);

  const [followingNameList, setFollowingNameList] = useState([]);

  const getFollowingList = () => {
    let followingNames = [];
    axios
      .get(`http://127.0.0.1:8000/mypage/following_list/`)
      .then(function (response) {
        console.log(response);
        console.log("서버에서 가져온 팔로잉 아이디 배열");
        console.log(response.data.followings);
        setProfile({
          ...profile,
          followingIdList: response.data.followings,
        });

        response.data.followings.map((following) => {
          axios
            .get(`http://127.0.0.1:8000/mypage/${following}/`)
            .then(function (response) {
              followingNames.push(response.data.first_name);
              //  setFollowingNameList([...followingNameList, response.data.first_name]);
              setFollowingNameList(followingNames);
              console.log("팔로잉 이름");
              console.log(response.data);
              console.log(followingNames);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      })
      .then(function (response) {
        console.log("hh");
        console.log(followingNameList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getFollowingList();
    console.log("profile.followingList");
    console.log(profile.followingIdList);
  }, []);

  return (
    <>
      <button
        className={cx("Followings")}
        onClick={() => {
          //getFollowingList();
          setModalShow(true);
        }}
      >
        Followings
      </button>
      <Modal show={modalShow} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Followings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              {profile.followingIdList.map((following) => (
                <p>{following}</p>
              ))}
            </div>
            <div>
              {followingNameList.map((followingName) => (
                <p>{followingName}</p>
              ))}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FollowingList;
