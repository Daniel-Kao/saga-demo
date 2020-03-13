import { put, takeEvery, all, call, select, take } from "redux-saga/effects";
import {
  fetchArticle,
  saveArticle,
  increment,
  incrementCount,
  loginRequest
} from "../actions";
import axios from "axios";

function* helloSaga() {
  console.log("Hello Sagas!");
}

const fetchArticleData = () => axios.get("http://localhost:3000/posts/1");
function* fetchArticleDataAsync() {
  const res = yield call(fetchArticleData);

  yield put(saveArticle(res.data));
  // yield put(increment());
}

function* incrementAsync() {
  yield put(incrementCount());
}

function* watchAsync() {
  yield takeEvery(fetchArticle.toString(), fetchArticleDataAsync);
  yield takeEvery(increment.toString(), incrementAsync);
}

function* watchAndLog() {
  while (true) {
    const action = yield take("*");
    const state = yield select();

    console.log("action", action);
    console.log("state after", state);
  }
}

function* loginFlow() {
  while (true) {
    const res = yield take(loginRequest.toString());

    console.log(res.payload);
    // ... perform the login logic
    yield take("LOGOUT");
    // ... perform the logout logic
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchAsync(), watchAndLog(), loginFlow()]);
}
