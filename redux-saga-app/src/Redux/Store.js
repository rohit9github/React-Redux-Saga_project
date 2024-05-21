// import {createStore} from "redux"    
import productSaga from "./productSaga"
import createSagaMiddleware from "redux-saga"

import { configureStore } from "@reduxjs/toolkit";

import RootReducer from"./RootReducer"

const sagaMiddleware = createSagaMiddleware();
// const store = createStore({
   
// })
const store = configureStore({
    reducer: RootReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(productSaga)
    

export default store;