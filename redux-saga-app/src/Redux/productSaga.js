import { put, takeEvery } from "redux-saga/effects"
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./Constant"

function* getProducts() {
    let data = yield fetch("http://localhost:3000/product")
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProduct(action) {
    let res = yield fetch(`http://localhost:3000/product?q=${action.query}`)
    res = yield res.json()
    res = res.filter(item => item.name.toLowerCase().includes(action.query.toLowerCase()))
    yield put({ type: SET_PRODUCT_LIST, data:res })
}

function* productSaga() {

    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(PRODUCT_SEARCH, searchProduct)

}

export default productSaga