import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styles from "../styles/RenderingMyFeeds/RenderingMyFeeds.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const RenderingMyFeeds = () => {
  const history = useHistory();
  const [followingProductList, setFollowingProductList] = useState([
    {
      productId: 0,
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
            productId: followingProduct.id,
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
            onClick={() =>
              history.push({
                pathname: "/ProductDetail",
                state: {
                  pid: followingProduct.productId,
                },
              })
            }
            src={`http://localhost:8000${followingProduct.picture}`}
            alt={followingProduct.feedText}
          />
          <hr className={cx("line")} />
          <p className={cx("FeedText")}>{followingProduct.feedText}</p>
        </div>
      ))}
    </div>
  );
};

export default RenderingMyFeeds;
