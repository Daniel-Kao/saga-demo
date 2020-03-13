import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSageMiddleware from "redux-saga";
import reducer from "../reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSageMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
