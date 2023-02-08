import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CombineReducers from "./Reducers/CombineReducers";




const mystore = createStore(CombineReducers, composeWithDevTools())


export default mystore;