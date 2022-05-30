import { React, useEffect, useState } from "react";
import styles from "../styles/RenderingFeeds/RenderingFeeds.module.scss";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

const RenderingFeeds = () => {
  const [fFeed, setFFeed] = useState([
    {
      feedText: "",
      picture: null,
    },
  ]);
  const followingFeed = () => {
    axios
      .get("http://127.0.0.1:8000/product/followingProducts/")
      .then(function (response) {
        console.log(response);
        setFFeed(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(fFeed);
  useEffect(() => {
    followingFeed();
  }, []);
  const src = [
    require("../images/i10.GIF"),
    require("../images/i11.png"),
    require("../images/i12.png"),
    require("../images/i14.png"),
    require("../images/i16.png"),
    require("../images/i17.png"),
    require("../images/i13.png"),
    require("../images/i15.png"),
    require("../images/i9.png"),
  ];
  const preface = [
    "업사이클링?",
    "‘업그레이드(Upgrade)’와 ‘리사이클링(Recycling)’의 결합",
    "형 형 색 색 현수막과 돛, 타이어 튜브",
  ];
  const text = [
    "업사이클(Upcycle)이라는 용어는 1994년 리너 필츠(Reiner Pilz)가 처음 사용한 개념이다. 그 소용이 다해버려지는 제품을 단순히 재활용하는 차원을 넘어 디자인을 가미하는 등의 새로운 부가가치를 창출하여 새 제품으로 재탄생시키는 일체의 행위를 업사이클이라고 한다. 광의로 보자면, 재활용(Recycle)의 일종이지만, 기계적, 화학적 공정을 거쳐 다른 형태의 재료로 바꾸어 사용하는 다운사이클(Downcycle)과 대비되는 의미로 사용되는데, 가령, 입다 버린 옷이나 제조상 남은 직물(textile) 등을 재활용해 전혀 다른 옷 또는 가방으로 만들 수 있다. 또 버려진 소파 가죽으로 지갑이나 필통 등으로 탈바꿈시키는 것도 가능하다. 이는 모두 업사이클의 사례라고 할 수 있다.",
    "폐기물 처리는 오래 전부터 인간이 해결해야 하는 사회적 문제였다. 그런데 최근 폐기물을 처리하는 것이 아니라 새롭게 재탄생시키는 업사이클링이라는 개념이 도입되어 각광을 받고 있다. 버려진 제품을 단순히 재활용하는 차원을 넘어 새로운 가치를 부여하는 것을 의미하는 업사이클링(upcycling)은 오늘날의 트렌드 중 하나라고 할 수 있다. 세계적으로 높은 인기를 얻고 있는 업사이클링 브랜드인 프라이탁이 그 증거이다. 프라이탁은 제품을 홍보할 때 세계에서 단 하나뿐인 희소성을 부각한다. “하나도 갖지 않은 이는 있으나 한 개만 갖고 있는 사람은 없다”라고 언급하며 브랜드의 차별성을 내세운다.",
    "프라이탁과 같이 업사이클링을 주제로 한 브랜드들이 최근에 정말 많이 생겨나고 있고 인기도 있다. 하지만 이제는 일반 사람들이 단순히 기업이 만든 업사이클링 제품을 구매하는 행위로만 환경 문제 해결에 참여하기 보다는 직접 제품을 만들고 판매하고 업사이클링 방법을 공유하는 능동적인 참여를 통해 더욱 많은 사람들이 환경에 관심을 가지고 문제를 해결해나갔으면 하는 바람이다. 그래서 제작한 서비스가 ‘팔로업사이클링'이다. follow + upcycling을 합쳐서 만든 말이다. “upcycling에 따라와라”, “upcycling을 하는 사람들을 follow해서 피드를 볼 수 있다.”는 중의적인 의미를 담고 있다.",
    "upcycling을 주제로 한 SNS 형식으로 업사이클링 작품을 제작한 작가들이 자신의 피드에 작품을 업로드하고 방법도 공유할 수 있다. 그래서 정보 공유와 판매를 같이 할 수 있는 사이트이다. 사람들은 정보를 얻기 위해 이 사이트에 들어와 피드를 구경하다가 제품을 구매하는 행위까지 이어지게 될 것이라고 기대하고 있다.",
  ];
  return (
    <div className={cx("RenderingFeeds")}>
      <div>
        <img src={src[0]} alt="메인 사진" />
        <img src={src[6]} alt="메인 사진" />
        <p className={cx("Preface")}>{preface[1]}</p>
        <p>{text[1]}</p>
        <img src={src[3]} alt="메인 사진" />
      </div>
      <div>
        <img src={src[1]} alt="메인 사진" />
        <p className={cx("Preface")}>{preface[0]}</p>
        <p>{text[0]}</p>
        <img src={src[4]} alt="메인 사진" />
        <img src={src[7]} alt="메인 사진" />
      </div>
      <div>
        <img src={src[2]} alt="메인 사진" />
        <img src={src[5]} alt="메인 사진" />
        <p className={cx("Preface")}>{preface[2]}</p>
        <p>{text[2]}</p>
        <img src={src[8]} alt="메인 사진" />
        <p>{text[3]}</p>
      </div>
    </div>
  );
};

export default RenderingFeeds;
