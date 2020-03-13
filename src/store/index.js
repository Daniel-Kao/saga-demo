import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSageMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "primary",
  storage
};

const persistedReducer = persistReducer(config, rootReducer);

const sagaMiddleware = createSageMiddleware();

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
