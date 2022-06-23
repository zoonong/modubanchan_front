# followUpCycling

폐기물 처리는 오래 전부터 인간이 해결해야 하는 사회적 문제였다. 그런데 최근 폐기물을 처리하는 것이 아니라 새롭게 재탄생시키는 업사이클링이라는 개념이 도입되어 각광을 받고 있다.

버려진 제품을 단순히 재활용하는 차원을 넘어 새로운 가치를 부여하는 것을 의미하는 업사이클링(upcycling)은 오늘날의 트렌드 중 하나라고 할 수 있다. 세계적으로 높은 인기를 얻고 있는 업사이클링 브랜드인 프라이탁이 그 증거이다. 프라이탁은 제품을 홍보할 때 세계에서 단 하나뿐인 희소성을 부각한다. “하나도 갖지 않은 이는 있으나 한 개만 갖고 있는 사람은 없다”라고 언급하며 브랜드의 차별성을 내세운다.

프라이탁과 같이 업사이클링을 주제로 한 브랜드들이 최근에 정말 많이 생겨나고 있고 인기도 있다. 하지만 이제는 일반 사람들이 단순히 기업이 만든 업사이클링 제품을 구매하는 행위로만 환경 문제 해결에 참여하기 보다는 직접 제품을 만들고 판매하고 업사이클링 방법을 공유하는 능동적인 참여를 통해 더욱 많은 사람들이 환경에 관심을 가지고 문제를 해결해나갔으면 하는 바람이다. 그래서 제작한 서비스가 ‘팔로업사이클링'이다.

follow + upcycling을 합쳐서 만든 말이다. “upcycling에 따라와라”, “upcycling을 하는 사람들을 follow해서 피드를 볼 수 있다.”는 중의적인 의미를 담고 있다.

upcycling을 주제로 한 SNS 형식으로 업사이클링 작품을 제작한 작가들이 자신의 피드에 작품을 업로드하고 방법도 공유할 수 있다. 그래서 정보 공유와 판매를 같이 할 수 있는 사이트이다.

사람들은 정보를 얻기 위해 이 사이트에 들어와 피드를 구경하다가 제품을 구매하는 행위까지 이어지게 될 것이라고 기대하고 있다.

# 프로젝트 흐름도
<img width="593" alt="image" src="https://user-images.githubusercontent.com/87538540/175228137-35b8be57-ebf4-43ae-956a-a07f9d336dba.png">

# 구현
프론트엔드는 react, 백엔드는 django로 구현하였다.

# react 사용 기술
리액트에서 전체 코드는 함수형으로 작성하여, useState, useEffect 함수를 활용하였다.

## react-router 사용
Router 라이브러리를 사용하여 useLocation, Router, Route 같은 함수를 활용하여 전체적인 페이지 이동을 구현했고, axios로 api를 받아와 DB에 접근하여 기능을 구현했다.
```
const AppRouter = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/SignIn">
          <SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <div className="body">
          <Tap isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Feed">
            <Feed />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/MyPage">
            <MyPage />
          </Route>
          <Route exact path="/ProductDetail">
            <ProductDetail />
          </Route>
          <Route exact path="/CreateProduct">
            <CreateProduct />
          </Route>
          <Route exact path="/Garment">
            <Garment />
          </Route>
          <Route exact path="/Furniture">
            <Furniture />
          </Route>
          <Route exact path="/Props">
            <Props />
          </Route>
          <Route exact path="/DIY">
            <DIY />
          </Route>
          <Route exact path="/CreateProfile">
            <CreateProfile />
          </Route>
          <Route exact path="/SellerPage">
            <SellerPage />
          </Route>
          <Route exact path="/ModifyProduct">
            <ModifyProduct />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};
```

-----
## scss
코드의 재활용성을 올리고, 가독성을 올리는 등 CSS에서 보이던 단점을 보완하고, 개발의 효율을 올리기 위해 scss를 사용했다.
### 변수 사용
일반 css에서는 변수를 사용할 수 없는데 scss에서는 컬러코드 등을 변수로 설정해두고 여러 번 재활용해서 사용하는 것이 가능하다. 자주 쓰는 컬러코드를 변수로 선언해두고 사용해서 효율성을 높였다.

<img width="289" alt="image" src="https://user-images.githubusercontent.com/87538540/175228754-b7e6b446-31b5-4fc4-a86f-c408556a8409.png">
  
### Nesting(중첩) 사용
일반 css와 다르게 셀렉터를 중첩시킨다든지, 속성을 중첩시키거나 상위 요소를 참조하는 것이 가능하다. 예를 들어 hover 속성 설정을 할 때 일반 css 코드로 작성하면 따로 작성해야 하는데 scss를 활용하면 중첩을 사용해서 Submit 안에 hover 코드를 넣을 수 있어 편리하다. 참고로, hover 속성은 버튼 같은 곳에 마우스를 올렸을 때 어떻게 변화할지 지정해주는 속성이다. 버튼 위에 마우스를 올렸을 때 버튼 색깔을 변경하거나 테두리가 생기게 할 수 있다.

```
// 일반 css 코드
.Submit {
    color: white;
    font-size: 1.5rem;
    width: 10rem;
    height: 3.5rem;
    border-radius: 20px;
    margin: 2rem;
    margin-bottom: 8rem;
    background-color: $green;
    border: none;
    cursor: pointer;
  }
.Submit:hover {
      background: lighten($green, 20%);
      border: none;
      outline: none;
  }
 ```
 
 ```
 // scss 코드
.Submit {
    color: white;
    font-size: 1.5rem;
    width: 10rem;
    height: 3.5rem;
    border-radius: 20px;
    margin: 2rem;
    margin-bottom: 8rem;
    background-color: $green;
    border: none;
    cursor: pointer;
    &:hover {
      background: lighten($green, 20%);
      border: none;
      outline: none;
    }
  }
 ```
 #### 버튼에 hover 속성을 적용한 예시
 <img width="300" alt="image" src="https://user-images.githubusercontent.com/87538540/175229345-7c038f0f-78d2-45b2-b74b-3367c3753402.png">
<img width="300" alt="image" src="https://user-images.githubusercontent.com/87538540/175229366-d71843c8-0fee-4990-95b7-bc2821f59130.png">

## css module
리액트 프로젝트에서 컴포넌트를 스타일링 할 때 CSS 클래스가 중첩되는 것을 완벽히 방지하기 위해 CSS Module 이라는 기술을 사용했다. CSS 파일의 확장자를 .module.css로 하면 리액트 컴포넌트 파일에서 해당 CSS 파일을 불러올 때 CSS 파일에 선언한 클래스 이름들이 모두 고유해진다. 따라서 실수로 CSS 클래스 이름이 다른 관계 없는 곳에서 사용한 CSS 클래스 이름과 중복되는 일에 대하여 걱정 할 필요가 없다. 원래는 CSS 클래스를 중복되지 않게 하기 위해 CSS 클래스 네이밍 규칙에 따라 작성해야 하는데 css module을 사용하여 그러한 불편함을 제거했다.

--------
# 결과물 설명
# Main Page
<img width="1512" alt="image" src="https://user-images.githubusercontent.com/87538540/174558623-10195b7a-152c-4a29-9e87-ef9333b7feef.png">

# 회원가입
이메일과 비밀번호를 입력하면 회원가입이 가능하다. 비밀번호는 유효성 검사를 통해 영문 소문자, 숫자, 특수문자가 모두 들어가야 회원가입을 할 수 있다.

![Jun-20-2022 17-32-28](https://user-images.githubusercontent.com/87538540/174560026-719641bc-30fc-4f87-9631-969b1a58fe7c.gif)

# 로그인
시연의 편의를 위해 로그인은 미리 만들어놓은 다른 아이디로 로그인하겠다.

![Jun-20-2022 17-29-21](https://user-images.githubusercontent.com/87538540/174559550-1d5711a7-3caf-4af6-8a91-bd2168d822c5.gif)

# 카테고리
의류, 가구, 소품, DIY 이렇게 총 4가지 카테고리가 있다. 카테고리를 클릭하면 각 카테고리에 해당하는 상품들이 올라와있는 것을 볼 수 있다.

![Jun-20-2022 17-36-45](https://user-images.githubusercontent.com/87538540/174560887-af189d0b-5b77-45c5-b11f-7844afa98e47.gif)

# 내 프로필
내 프로필을 들어가면 나의 기본 정보와 내가 올린 상품 목록을 볼 수 있다.

![Jun-20-2022 17-39-05](https://user-images.githubusercontent.com/87538540/174561349-d99bc78c-5145-441d-92fd-21c6bc15c219.gif)

# 프로필 편집하기
내 닉네임과 한 줄 소개를 편집할 수 있다.

![Jun-20-2022 17-42-52](https://user-images.githubusercontent.com/87538540/174562247-b4a859c6-d70f-4b54-8a48-e8dea2f1247c.gif)

# 상품 등록하기
새로운 상품을 등록할 수 있다. 상품 이름을 적고 카테고리를 선택하고 가격을 적는다. 그리고 상품 상세 설명에 상품에 대한 소개와 업사이클링 제품을 제작한 과정을 적어 다른 사람들이 보고 따라할 수 있게 한다. 피드에는 나를 팔로잉한 사람들이 보는 피드 글을 적는다.

![Jun-20-2022 17-46-44](https://user-images.githubusercontent.com/87538540/174563210-ba813e09-a097-438e-a622-f71f4eb646e7.gif)

# 카테고리에서 상품 상세 페이지 들어가기
카테고리를 탐색하다가 마음에 드는 상품이 있으면 상세 페이지로 들어가서 자세히 볼 수 있다.

![Jun-20-2022 17-53-41](https://user-images.githubusercontent.com/87538540/174564157-c1ef0911-f4da-4c80-92e6-e2f6f1b9c6c4.gif)

# 수량을 선택해서 상품 장바구니에 넣기
수량을 선택해서 상품을 장바구니에 넣을 수 있다.

![Jun-20-2022 17-55-35](https://user-images.githubusercontent.com/87538540/174564637-73ff17f5-eef3-4196-8cd0-c42ffe536ae1.gif)

# 장바구니에서 수량 조정, 장바구니에서 삭제하기
장바구니에서 수량을 조정할 수 있고 상품을 장바구니에서 삭제할 수 있다.

![Jun-20-2022 17-57-07](https://user-images.githubusercontent.com/87538540/174565036-92ae614b-a6c9-414e-8116-db07179f0da0.gif)

# 상품 상세 페이지에서 판매자 홈으로 들어가기
상품 상세 페이지에서 판매자의 홈으로 들어가서 그 사람의 판매 상품들과 프로필을 확인할 수 있다.

![Jun-20-2022 17-59-17](https://user-images.githubusercontent.com/87538540/174565479-88ca3dad-a841-4be9-8d26-3556a2b339bd.gif)

# 다른 판매자들 팔로우하기, 팔로잉 목록에서 팔로우한 사람들 프로필 들어가서 언팔로우하기, 다시 팔로잉 목록 확인
상품 상세 페이지에서 판매자 홈으로 들어가면 그 사람을 팔로우 할 수 있다. 그러면 팔로잉 목록에서 내가 팔로우 한 사람들을 확인할 수 있다. 팔로잉 목록을 통해 그 사람 페이지로 들어가서 다시 언팔로우할 수도 있다. 언팔로우하면 다시 팔로잉 목록에서 그 사람이 없어져 있는 것을 확인할 수 있다.

![Jun-20-2022 18-02-47](https://user-images.githubusercontent.com/87538540/174566615-16728319-54d4-4e62-bfea-1a5bb49d976b.gif)

# 내가 팔로우한 사람들 피드 구경하기
내가 팔로우한 사람들의 피드만 모아서 구경할 수 있다. 구경하다가 상품 제작 과정이나 상품 설명을 상세하게 보고 싶으면 상품 상세 페이지로 들어갈 수도 있다.

![Jun-20-2022 18-08-10](https://user-images.githubusercontent.com/87538540/174567260-c39a81dd-5c29-4783-922a-51a1308e2aba.gif)



