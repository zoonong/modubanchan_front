// reducers/index.js

/* root reducer */
import { combineReducers } from "redux";
import users from './users';
import products from "./products";

const rootReducer = combineReducers({
    users,
    products
});

export default rootReducer;