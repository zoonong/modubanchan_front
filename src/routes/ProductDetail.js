import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css";

const ProductDetail = () => {
  const data = useLocation().state.productNum;
  const src = require("../images/tteokbokki.GIF");
  const detail =
    "이 떡볶이로 하여금 지나가던 교수님도 냄새를 맡으면 가게 안으로 들어와 먹고 간다하여..떡볶이가 서민들을 위한 요리가 되기 시작한 것은 고추장 떡볶이가 등장하면서부터이다. 고추장 떡볶이에 대한 유래는 크게 두 가지 설로 나눌 수 있다. 첫 번째는 마복림이 1950년대에 중국음식점에서 개업 떡을 먹으려다 짜장면 소스에 떡을 떨어뜨렸던 일에 착안하여 만들었다는 설로, 짜장 소스가 묻은 떡이 맛이 제법 좋아 1953년부터 신당동에서 가래떡에 고추장을 섞어 볶는 방식으로 떡볶이를 팔았다는 것이다. 마복림의 떡볶이는 이후 즉석 떡볶이로 발전하여 신당동 떡볶이 골목을 형성하는데 일조하였다. 두 번째는 한국전쟁 직후 떡볶이 할머니라 불리던 노파가 고추장에 재운 가래떡을 기름에 지져 ‘기름 떡볶이’를 만들었던 것에서 출발하였다는 것이다. 한편 떡볶이의 대중화는 1950년대 미국의 곡물 원조와 1960년대 말부터 본격화된 분식장려운동의 영향을 받은 것으로 추정된다. 당시의 떡볶이는 쌀떡에 비해 값이 저렴한 밀가루로 만든 떡을 주로 사용하였는데, 1969년 보건사회부에서 주최한 분식 조리법 연구 발표회에서도 밀가루로 만든 떡볶이가 등장하였다. 이후 떡볶이는 학교 주변에서 불량 식품으로 불리기 시작했고, 1970년대에는 고추장 떡볶이가 보편적인 형태로 자리 잡기 시작하였다. 1970년대 후반에는 신당동 떡볶이 골목이 전성기를 맞이하기도 하였다. 오늘날 떡볶이는 다양한 형태로 변신을 거듭하고 있다. 떡 자체도 기본적인 쌀떡과 밀가루떡 이외에 떡에 치즈나 고구마를 넣기도 하고 색소를 넣어 색을 달리하기도 한다. 또한 모양과 형태, 길이마저 다양해지는 추세이다. 부재료로는 각종 채소와 어묵, 삶은 달걀, 각종 면, 가공육, 치즈 등이 쓰일 수 있으며, 완성된 떡볶이에는 튀김이나 순대, 김밥 등을 곁들여 먹기도 한다. 떡볶이의 종류 또한 다양해져, 국물이 많은 국물떡볶이, 라면 사리가 든 라볶이, 즉석에서 각종 사리를 첨가하여 끓여 먹는 즉석 떡볶이, 떡을 기름에 볶아 만든 매콤한 맛의 기름떡볶이, 간장양념을 하여 만든 간장떡볶이, 치즈를 첨가하거나 치즈가 들어간 떡을 사용하여 만든 치즈떡볶이, 카레를 넣어 만든 카레떡볶이, 짜장소스를 넣어 만든 짜장떡볶이, 까르보나라소스를 첨가하여 만든 까르보나라떡볶이, 로제소스를 첨가하여 만든 로제떡볶이 등이 있다. 그밖에 떡볶이의 매운맛에 초점을 두고 매운맛의 단계를 나누어 판매하기도 한다.";
  const seller = "매니연";
  const price = 10000;
  const deliveryCharge = 3000;

  function productDetailInfo() {
    axios.get("http://127.0.0.1:8000/product/1/")
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div className="container">
      <div className="productdetail">
        <img src={src} alt="상품 사진" />
        <p>{`${detail}`}</p>
      </div>
      <div>
        <Link>
          <p>{`${seller} >`}</p>
        </Link>
        <p>{`${price}원`}</p>
        <p>{`배송비 ${deliveryCharge}원`}</p>
        <Link to="/cart">
          <button>장바구니</button>
        </Link>
        <button>주문하기</button>
        <p>{data}</p>
        <button type="text" onClick={productDetailInfo}>product detail 정보</button>
      </div>
    </div>
  );
};

export default ProductDetail;
