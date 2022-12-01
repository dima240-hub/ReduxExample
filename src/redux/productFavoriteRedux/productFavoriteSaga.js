import {takeEvery, put, takeLatest} from 'redux-saga/effects';
import {PRODUCT_FAVORITE_LIST, SET_FAVORITE_LIST} from '../actionsType';
function* getFavoriteProducts() {
  let data = yield fetch('http://192.168.0.192:8080/get/favorite');
  data = yield data.json();

  yield put({type: SET_FAVORITE_LIST, data});
}
function* productFavoriteSaga() {
  yield takeEvery(PRODUCT_FAVORITE_LIST, getFavoriteProducts);
}
export default productFavoriteSaga;
