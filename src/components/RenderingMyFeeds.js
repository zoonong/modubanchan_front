import { React, useEffect, useState } from "react";
import styles from "../styles/RenderingMyFeeds/RenderingMyFeeds.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const RenderingMyFeeds = () => {
  const [followingProductList, setFollowingProductList] = useState([
    {
      feedText: "",
      picture: null,
    },
  ]);

  const getFollowingProducts = () => {
    axios
      .get("http://127.0.0.1:8000/product/followingProducts/")
      .then(function (response) {
        let tmpFollowingProductList = [];
        response.data.map((followingProduct) => {
          tmpFollowingProductList.push({
            feedText: followingProduct.feedText,
            picture: followingProduct.picture,
          });
        });
        console.log(tmpFollowingProductList);
        setFollowingProductList(tmpFollowingProductList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getFollowingProducts();
  }, []);

  return (
    <div className={cx("RenderingMyFeeds")}>
      <div className={cx("Title")}>My Followings</div>
      {followingProductList.map((followingProduct) => (
        <div className={cx("Card")}>
          <img
            src={`http://localhost:8000${followingProduct.picture}`}
            alt={followingProduct.feedText}
          />
          <p className={cx("FeedText")}>{followingProduct.feedText}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderingMyFeeds;
