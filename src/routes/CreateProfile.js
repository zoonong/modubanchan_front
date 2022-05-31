import { React, useState, useDispatch } from "react";
import CartProduct from "../components/CartProduct";
import axios from "axios";
import styles from "../styles/MyPage/MyPage.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const cx = classNames.bind(styles);

const CreateProfile = ({ isProfileNameChanged, setIsProfileNameChanged }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [profileName, setProfileName] = useState({
    nickname: "",
    introduce: "",
  });

  const registerProfile = () => {
    axios
      .put("http://127.0.0.1:8000/mypage/profile_update/", {
        first_name: profileName.nickname,
        last_name: profileName.introduce,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    if (isProfileNameChanged === 0) {
      setIsProfileNameChanged(1);
    } else if (isProfileNameChanged === 1) {
      setIsProfileNameChanged(0);
    }
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setProfileName({
      ...profileName,
      [name]: value,
    });
  };

  return (
    <div>
      <button className={cx("Button", "ProfileBtn")} onClick={handleShow}>
        프로필 편집
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>닉네임</Form.Label>
              <Form.Control
                name="nickname"
                value={profileName.nickname}
                required
                onChange={onChange}
                type="text"
                placeholder="닉네임"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>한 줄 소개</Form.Label>
              <Form.Control
                as="textarea"
                rows={1}
                name="introduce"
                type="text"
                placeholder="한줄소개"
                value={profileName.introduce}
                required
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              registerProfile();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateProfile;
