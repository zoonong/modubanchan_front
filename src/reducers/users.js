/* 액션 타입 만들기 */
const ADD_USER = 'users/ADD_USER';

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보낸다.
export const addUser = user => ({
    type: ADD_USER,
    user: {
        id: user.id,
        password: user.password,
        nickname: user.nickname,
        followerList: user.followerList,
        followingList: user.followingList
    }
});

/* 초기 상태 선언 */
const initialState = [];

export default function users(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return state.concat(action.user);
        default:
            return state;
    }
}