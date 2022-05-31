/* 액션 타입 만들기 */
const ADD_PRODUCT = "products/ADD_PRODUCT";

/* 액션 생성함수 선언 */
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product: {
    id: product.id,
    name: product.name,
    category: product.category,
    seller: product.seller,
    picture: product.picture,
    feedText: product.feedText,
    createdDate: product.createdDate,
  },
});

/* 초기 상태 선언 */
const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return state.concat(action.product);
    default:
      return state;
  }
}
