import React from "react";
import styles from "../styles/RenderingFeeds/RenderingFeeds.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const RenderingFeeds = () => {
  const src = [
    require("../images/1.jpg"),
    require("../images/2.jpg"),
    require("../images/3.jpg"),
    require("../images/4.jpg"),
    require("../images/5.jpg"),
    require("../images/6.jpg"),
    require("../images/7.jpg"),
    require("../images/8.jpg"),
    require("../images/9.jpg"),
  ];
  const preface = [
    "샐러드 한 끼 어떠세요?",
    "요즘은 웰빙 시대!\n건강한 먹을거리에 유난히 관심이 많은 이때 연어에 주목해 보세요.",
    "형 형 색 색 파프리카!",
  ];
  const text = [
    "야채와 과일은 비타민과 미네랄이 풍부해 변을 부드럽게 하고, 컨디션을 조절해 피로를 풀어줍니다. 게다가 피부를 매끄럽게 가꾸고 다이어트에도 효과가 높아 아침식사로 제격이죠. 샐러드의 맛은 드레싱에 좌우됩니다. 대부분의 사람들은 드레싱을 맛내기 어렵고 번거롭다고 생각하는데 천만의 말씀. 집에 있는 몇 가지 재료만으로도 간편하게 야채와 과일의 맛을 확 살리는 드레싱을 만들 수 있어요. 드레싱은 한 번 만들면 두고두고 먹을 수 있으므로 시간 있을 때 만들어 냉장 보관해 두었다가 필요할 때마다 꺼내먹으면 편합니다. 또 대형 할인매장이나 슈퍼 등에 가면 인스턴트 드레싱을 살 수 있습니다. 인스턴트 드레싱은 아무래도 직접 만든 것만은 못하지만 가볍게 즐기기에는 적당하죠.",
    "건강에 좋은 오메가 3 지방산이 풍부한 연어는 비타민 E도 풍부하답니다. 연어(salmon)는 연어과에 속하며 몸길이가 70㎝ 정도로 등쪽은 담청색이고 몸의 아래쪽은 은백색입니다. 연어는 동양인보다 서양인이 더 좋아하며, 특히 독일, 네덜란드 등 라인 강 주변국 사람들은 연어를 최고의 미식(美食)으로 꼽고 있어요. 최근에는 우리나라에도 연어 애호가가 급증하고 있습니다. 연어는 소화, 흡수가 잘 되므로 어린이, 노약자, 환자에게도 좋습니다.",
    "피망과 혼동하기 쉬운 파프리카는 피망보다 단맛이 강하고 과육이 많게 개량한 채소입니다. 아삭거리는 식감에 달콤한 맛과 형형색색의 색깔이 특징이며, 비타민 함유량이 많아 항암 효과와 피로 해소에 효과적입니다. 파프리카는 단맛에서부터 매운맛까지 종류가 다양한데, 질 좋은 파프리카는 진홍색을 띠고 가벼운 과일향이 납니다. 파프리카를 이용한 가장 유명한 요리는 ‘굴라시(Goulash)’이며, 굴라시는 큼직하게 썬 쇠고기에 파프리카를 넉넉히 넣어 오랜 시간 끓이는 헝가리 전통요리입니다. 파프리카는 케이퍼 위에 뿌려 색을 내거나, 수프에 밝은 색을 첨가할 때 사용해요. 또한 달걀과 채소요리, 갑각류와 치킨요리, 샐러드드레싱에도 사용합니다. 단, 파프리카는 색과 맛을 단시간에 잃기 때문에 오래 보관하기 어려우므로 소량만 구입해 사용하세요!",
  ];
  return (
    <div className={cx("RenderingFeeds")}>
      <div>
        <img src={src[0]} alt="메인 사진" />
        <img src={src[3]} alt="메인 사진" />
        <p className={cx("Preface")}>{preface[1]}</p>
        <p>{text[1]}</p>
        <img src={src[6]} alt="메인 사진" />
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
      </div>
    </div>
  );
};

export default RenderingFeeds;
