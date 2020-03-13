import { put, takeEvery, all, call } from "redux-saga/effects";
import { fetchArticle, saveArticle } from "../actions";
import axios from "axios";

function* helloSaga() {
  console.log("Hello Sagas!");
}

const fetchArticleData = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(123);
    }, 1000);
  });

function* incrementAsync() {
  const res = yield call(fetchArticleData);
  yield put(saveArticle({ res }));
}

function* watchIncrementAsync() {
  yield takeEvery(fetchArticle.toString(), incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
