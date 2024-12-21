/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createStore } from "redux"
import reducers from "../redux/reducers/index"

const store =createStore (reducers,{

}, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__compose)
export default store;