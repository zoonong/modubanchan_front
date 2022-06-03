import React, { useEffect } from "react";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "../styles/MyPage/MyPage.module.scss";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const cx = classNames.bind(styles);

const FollowingList = ({ profile, setProfile }) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);

  const [followingInfoList, setFollowingInfoList] = useState([]);

  const getFollowingList = () => {
    let followingInfos = [];
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
              let tmpName = "unknown";
              if (response.data.first_name !== "") {
                tmpName = response.data.first_name;
              }
              let followingInfo = {
                userId: following,
                name: tmpName,
              };
              followingInfos.push(followingInfo);
              //  setFollowingNameList([...followingNameList, response.data.first_name]);
              setFollowingInfoList(followingInfos);
              console.log("팔로잉 이름");
              console.log(response.data);
              console.log(followingInfos);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      })
      .then(function (response) {
        console.log(followingInfoList);
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
    <div>
      <button
        className={cx("Button", "FollowingsBtn")}
        onClick={() => {
          setModalShow(true);
        }}
      >
        Followings
      </button>
      <Modal
        show={modalShow}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
        scrollable="true"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Followings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {followingInfoList.map((followingInfo) => (
              <p>
                <Link to="SellerPage">
                  <Button
                    variant="success"
                    onClick={() =>
                      history.push({
                        pathname: "/SellerPage",
                        state: {
                          sId: followingInfo.userId,
                        },
                      })
                    }
                  >
                    {followingInfo.name}
                  </Button>
                </Link>
              </p>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default FollowingList;
