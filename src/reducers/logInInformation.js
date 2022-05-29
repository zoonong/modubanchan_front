/* 액션 타입 만들기 */
const LOG_IN = 'logInInformation/LOG_IN';
const LOG_OUT = 'logInInformation/LOG_OUT';

/* 액션 생성함수 선언 */
export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });

/* 초기 상태 선언 */
const initialState = {
    isLoggedIn: false,
    logInUserId: 0,
}

export default function toggleLogIn(state = initialState, action) {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                logInUserId: action.logInUserId
            };
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                logInUserId: 0
            };
        default:
            return state;
    }
}