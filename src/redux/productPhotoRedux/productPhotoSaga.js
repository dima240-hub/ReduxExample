import {takeEvery, put} from 'redux-saga/effects';
import {SET_IMAGE_LIST, PRODUCT_IMAGE_LIST} from '../actionsType';
const SERVER_URL = 'http://192.168.0.192:8080';
function* getProductImage(data) {
  let data1 = yield fetch(`${SERVER_URL}/Images/${data.data}`);

  yield put({type: SET_IMAGE_LIST, data: data1.url});
}

function* productImageSaga() {
  yield takeEvery(PRODUCT_IMAGE_LIST, getProductImage);
}
export default productImageSaga;
